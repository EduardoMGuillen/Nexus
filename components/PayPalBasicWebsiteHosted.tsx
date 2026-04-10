"use client";

import { useMessages } from "@/components/LocaleProvider";

export default function PayPalBasicWebsiteHosted() {
  const { paginasWeb: p } = useMessages();

  return (
    <div className="w-full max-w-full sm:max-w-md mx-auto">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/90 p-1 sm:p-1.5 shadow-xl shadow-black/40 ring-1 ring-white/5">
        <div className="rounded-[0.875rem] overflow-hidden bg-white shadow-inner ring-1 ring-slate-200/90">
          <iframe
            title={p.basicIframeTitle}
            src="/api/paypal-embed-basic"
            className="m-0 block w-full border-0 bg-white align-top"
            style={{ height: "min(520px, 78vh)", minHeight: 400 }}
            allow="payment *"
          />
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-dark-500">{p.basicSecureNote}</p>
    </div>
  );
}
