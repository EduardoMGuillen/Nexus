"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import { useMessages } from "@/components/LocaleProvider";

const CLIENT_ID =
  process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ??
  "AT7NZ1UbTDfNe_QyHkzIncEcsKARjMSEnPCFwFKMvAyiWDX3w5wrBtWlDFMn7nWTEXAsvdJBUFnYTBw7";

const PLAN_ID =
  process.env.NEXT_PUBLIC_PAYPAL_PLAN_ID ?? "P-1GF80607EP151353RNHMD3TI";

const SDK_SRC = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(
  CLIENT_ID
)}&vault=true&intent=subscription`;

type PayPalButtonInstance = {
  render: (container: HTMLElement | string) => Promise<void>;
  close: () => void;
};

type PayPalNamespace = {
  Buttons: (options: Record<string, unknown>) => PayPalButtonInstance;
};

declare global {
  interface Window {
    paypal?: PayPalNamespace;
  }
}

export default function PayPalMaintenanceSubscribe() {
  const m = useMessages();
  const copy = m.paginasWeb;
  const containerRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<PayPalButtonInstance | null>(null);

  const [sdkReady, setSdkReady] = useState(false);
  const [scriptError, setScriptError] = useState(false);
  const [successId, setSuccessId] = useState<string | null>(null);

  useEffect(() => {
    if (!sdkReady || scriptError) return;
    const el = containerRef.current;
    const paypal = window.paypal;
    if (!el || !paypal) return;

    if (instanceRef.current) {
      instanceRef.current.close();
      instanceRef.current = null;
    }

    const instance = paypal.Buttons({
      style: {
        shape: "pill",
        color: "gold",
        layout: "vertical",
        label: "subscribe",
      },
      createSubscription: (
        _data: unknown,
        actions: { subscription: { create: (o: { plan_id: string }) => Promise<string> } }
      ) => {
        return actions.subscription.create({
          plan_id: PLAN_ID,
        });
      },
      onApprove: (data: { subscriptionID?: string }) => {
        const id = data.subscriptionID ?? "";
        setSuccessId(id);
      },
    });

    instanceRef.current = instance;
    instance.render(el).catch(() => {
      try {
        instance.close();
      } catch {
        /* ignore */
      }
      if (instanceRef.current === instance) {
        instanceRef.current = null;
      }
      setScriptError(true);
    });

    return () => {
      instance.close();
      if (instanceRef.current === instance) {
        instanceRef.current = null;
      }
    };
  }, [sdkReady, scriptError]);

  return (
    <div className="w-full max-w-md mx-auto">
      <Script
        src={SDK_SRC}
        strategy="afterInteractive"
        onLoad={() => setSdkReady(true)}
        onError={() => setScriptError(true)}
      />

      {successId && (
        <div
          className="mb-6 p-4 rounded-xl bg-primary-500/15 border border-primary-500/40 text-left"
          role="status"
        >
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold mb-1">{copy.subscribeSuccess}</p>
              <p className="text-dark-300 text-sm">
                <span className="text-dark-400">{copy.subscribeIdLabel}: </span>
                <span className="font-mono text-dark-200 break-all">{successId}</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {scriptError && (
        <p className="text-sm text-red-400 text-center mb-4">{copy.subscribeLoadError}</p>
      )}

      <div
        ref={containerRef}
        id="paypal-button-container-maintenance-hosting"
        className="min-h-[120px] flex flex-col items-stretch justify-center"
      />

      <p className="text-xs text-dark-500 text-center mt-4">{copy.subscribeSecureNote}</p>
    </div>
  );
}
