"use client";

import { useMessages } from "@/components/LocaleProvider";
import PayPalOneTimeBuy from "@/components/PayPalOneTimeBuy";
import type { PurchaseCustomerDetails } from "@/lib/purchase-customer";

const PREMIUM_AMOUNT =
  process.env.NEXT_PUBLIC_PAYPAL_PREMIUM_AMOUNT ?? "500.00";

type Props = {
  customer: PurchaseCustomerDetails;
  customerValid: boolean;
};

export default function PayPalPremiumWebsiteHosted({ customer, customerValid }: Props) {
  const { paginasWeb: copy } = useMessages();

  return (
    <PayPalOneTimeBuy
      packageType="premium"
      customer={customer}
      customerValid={customerValid}
      amount={PREMIUM_AMOUNT}
      purchaseDescription="Premium Website — Up to 10 pages"
      ariaLabel={copy.premiumHostedAria}
      secureNote={copy.premiumSecureNote}
      successMessage={copy.basicPurchaseSuccess}
      orderIdLabel={copy.basicOrderIdLabel}
      loadErrorMessage={copy.subscribeLoadError}
      notifyFailMessage={copy.purchaseNotifyFail}
      containerId="paypal-button-container-premium-website"
    />
  );
}
