"use client";

import Script from "next/script";
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { PAYPAL_SDK_SRC } from "@/lib/paypalSdk";

type PayPalOffersSdkState = {
  sdkReady: boolean;
  sdkError: boolean;
};

const PayPalOffersSdkContext = createContext<PayPalOffersSdkState | null>(null);

export function PayPalOffersSdkProvider({ children }: { children: ReactNode }) {
  const [sdkReady, setSdkReady] = useState(false);
  const [sdkError, setSdkError] = useState(false);

  const value = useMemo(
    () => ({ sdkReady, sdkError }),
    [sdkReady, sdkError]
  );

  return (
    <PayPalOffersSdkContext.Provider value={value}>
      <Script
        src={PAYPAL_SDK_SRC}
        strategy="afterInteractive"
        onLoad={() => setSdkReady(true)}
        onError={() => setSdkError(true)}
      />
      {children}
    </PayPalOffersSdkContext.Provider>
  );
}

export function usePayPalOffersSdk(): PayPalOffersSdkState {
  const ctx = useContext(PayPalOffersSdkContext);
  if (!ctx) {
    throw new Error("usePayPalOffersSdk must be used within PayPalOffersSdkProvider");
  }
  return ctx;
}
