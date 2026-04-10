"use client";

import { useMessages } from "@/components/LocaleProvider";

export default function PayPalBasicWebsiteHosted() {
  const { paginasWeb: p } = useMessages();

  return (
    <div className="w-full max-w-lg mx-auto">
      <iframe
        title={p.basicIframeTitle}
        src="/api/paypal-embed-basic"
        className="w-full min-h-[200px] rounded-xl border border-dark-700 bg-dark-900"
        style={{ minHeight: 200 }}
        allow="payment *"
      />
      <p className="text-xs text-dark-500 text-center mt-4">{p.basicSecureNote}</p>
    </div>
  );
}
