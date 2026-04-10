"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import PurchaseCustomerFields, {
  type PurchaseFieldLabels,
} from "@/components/PurchaseCustomerFields";
import PayPalBasicWebsiteHosted from "@/components/PayPalBasicWebsiteHosted";
import PayPalPremiumWebsiteHosted from "@/components/PayPalPremiumWebsiteHosted";
import PayPalMaintenanceSubscribe from "@/components/PayPalMaintenanceSubscribe";
import type { PurchaseCustomerDetails } from "@/lib/purchase-customer";
import { isPurchaseCustomerValid } from "@/lib/purchase-customer";

export type CheckoutPackage = "basic" | "premium" | "subscription";

type Props = {
  open: boolean;
  onClose: () => void;
  packageKind: CheckoutPackage;
  planTitle: string;
  intro: string;
  closeLabel: string;
  paySectionTitle: string;
  labels: PurchaseFieldLabels;
  customer: PurchaseCustomerDetails;
  onCustomerChange: (c: PurchaseCustomerDetails) => void;
};

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

export default function OfferCheckoutModal({
  open,
  onClose,
  packageKind,
  planTitle,
  intro,
  closeLabel,
  paySectionTitle,
  labels,
  customer,
  onCustomerChange,
}: Props) {
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  const valid = isPurchaseCustomerValid(customer);

  const content = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label={closeLabel}
        onClick={onClose}
      />
      <div
        className="relative z-10 w-full max-w-lg max-h-[min(90vh,720px)] overflow-y-auto rounded-2xl border border-dark-600 bg-gradient-to-b from-dark-800 to-dark-900 shadow-2xl shadow-black/50 ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-dark-600/80 bg-dark-800/95 px-5 py-4 backdrop-blur-sm">
          <h2
            id="checkout-modal-title"
            className="text-lg sm:text-xl font-bold text-white text-left pr-2 leading-tight"
          >
            {planTitle}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg p-2 text-dark-400 transition hover:bg-dark-700 hover:text-white"
            aria-label={closeLabel}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-sm text-dark-300 mb-5 leading-relaxed">{intro}</p>

          <PurchaseCustomerFields
            value={customer}
            onChange={onCustomerChange}
            labels={labels}
            showEnableHint={!valid}
          />

          <div className="mt-2 border-t border-dark-600/80 pt-5">
            <p className="text-xs font-medium text-dark-400 mb-3">{paySectionTitle}</p>
            {packageKind === "basic" && (
              <PayPalBasicWebsiteHosted customer={customer} customerValid={valid} />
            )}
            {packageKind === "premium" && (
              <PayPalPremiumWebsiteHosted customer={customer} customerValid={valid} />
            )}
            {packageKind === "subscription" && (
              <PayPalMaintenanceSubscribe customer={customer} customerValid={valid} />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
