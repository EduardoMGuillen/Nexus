"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import { usePayPalOffersSdk } from "@/components/PayPalOffersSdkProvider";
import type { PurchaseCustomerDetails } from "@/lib/purchase-customer";

type PayPalButtonInstance = {
  render: (container: HTMLElement | string) => Promise<void>;
  close: () => void;
};

type OrderCreateActions = {
  order: {
    create: (opts: {
      purchase_units: Array<{
        description?: string;
        amount: { value: string; currency_code: string };
      }>;
    }) => Promise<string>;
  };
};

type OrderCaptureActions = {
  order: {
    capture: () => Promise<{ id?: string }>;
  };
};

type PayPalNamespace = {
  Buttons: (options: Record<string, unknown>) => PayPalButtonInstance;
};

declare global {
  interface Window {
    paypal?: PayPalNamespace;
  }
}

export type PayPalOneTimeBuyProps = {
  packageType: "basic" | "premium";
  customer: PurchaseCustomerDetails;
  customerValid: boolean;
  amount: string;
  purchaseDescription: string;
  ariaLabel: string;
  secureNote: string;
  successMessage: string;
  orderIdLabel: string;
  loadErrorMessage: string;
  notifyFailMessage: string;
  containerId: string;
};

async function postOrderNotification(body: Record<string, unknown>) {
  const res = await fetch("/api/order-notification", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.ok;
}

export default function PayPalOneTimeBuy({
  packageType,
  customer,
  customerValid,
  amount,
  purchaseDescription,
  ariaLabel,
  secureNote,
  successMessage,
  orderIdLabel,
  loadErrorMessage,
  notifyFailMessage,
  containerId,
}: PayPalOneTimeBuyProps) {
  const { sdkReady, sdkError } = usePayPalOffersSdk();
  const containerRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<PayPalButtonInstance | null>(null);

  const [successId, setSuccessId] = useState<string | null>(null);
  const [renderError, setRenderError] = useState(false);
  const [notifyFailed, setNotifyFailed] = useState(false);

  useEffect(() => {
    if (!sdkReady || sdkError || !customerValid) {
      if (instanceRef.current) {
        try {
          instanceRef.current.close();
        } catch {
          /* ignore */
        }
        instanceRef.current = null;
      }
      return;
    }

    const el = containerRef.current;
    const paypal = window.paypal;
    if (!el || !paypal) return;

    if (instanceRef.current) {
      instanceRef.current.close();
      instanceRef.current = null;
    }

    const cust = { ...customer };

    const instance = paypal.Buttons({
      style: {
        shape: "pill",
        color: "gold",
        layout: "vertical",
        label: "paypal",
      },
      createOrder: (_data: unknown, actions: OrderCreateActions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: purchaseDescription,
              amount: {
                value: amount,
                currency_code: "USD",
              },
            },
          ],
        });
      },
      onApprove: async (_data: unknown, actions: OrderCaptureActions) => {
        const details = await actions.order.capture();
        const id = details.id ?? "";
        setSuccessId(id);
        setNotifyFailed(false);
        const ok = await postOrderNotification({
          packageType,
          paypalOrderId: id,
          name: cust.name.trim(),
          email: cust.email.trim(),
          phone: cust.phone.trim(),
          filesUrl: cust.filesUrl.trim(),
        });
        if (!ok) setNotifyFailed(true);
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
      setRenderError(true);
    });

    return () => {
      instance.close();
      if (instanceRef.current === instance) {
        instanceRef.current = null;
      }
    };
  }, [
    sdkReady,
    sdkError,
    customerValid,
    customer,
    amount,
    purchaseDescription,
    packageType,
  ]);

  return (
    <div className="w-full max-w-md mx-auto" role="region" aria-label={ariaLabel}>
      {successId && (
        <div
          className="mb-6 p-4 rounded-xl bg-primary-500/15 border border-primary-500/40 text-left"
          role="status"
        >
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold mb-1">{successMessage}</p>
              <p className="text-dark-300 text-sm">
                <span className="text-dark-400">{orderIdLabel}: </span>
                <span className="font-mono text-dark-200 break-all">{successId}</span>
              </p>
              {notifyFailed && (
                <p className="text-amber-400/95 text-xs mt-3 leading-relaxed">{notifyFailMessage}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {(sdkError || renderError) && (
        <p className="text-sm text-red-400 text-center mb-4">{loadErrorMessage}</p>
      )}

      <div
        ref={containerRef}
        id={containerId}
        className="min-h-[120px] flex flex-col items-stretch justify-center"
      />

      <p className="text-xs text-dark-500 text-center mt-4">{secureNote}</p>
    </div>
  );
}
