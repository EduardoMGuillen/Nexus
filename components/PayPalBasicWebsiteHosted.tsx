"use client";

import { useMessages } from "@/components/LocaleProvider";
import PayPalOneTimeBuy from "@/components/PayPalOneTimeBuy";
import type { PurchaseCustomerDetails } from "@/lib/purchase-customer";

const BASIC_AMOUNT =
  process.env.NEXT_PUBLIC_PAYPAL_BASIC_AMOUNT ?? "300.00";

type Props = {
  customer: PurchaseCustomerDetails;
  customerValid: boolean;
};

export default function PayPalBasicWebsiteHosted({ customer, customerValid }: Props) {
  const { paginasWeb: copy } = useMessages();

  return (
    <PayPalOneTimeBuy
      packageType="basic"
      customer={customer}
      customerValid={customerValid}
      amount={BASIC_AMOUNT}
      purchaseDescription="Plan Pro — Landing / 1–3 pages"
      ariaLabel={copy.basicIframeTitle}
      secureNote={copy.basicSecureNote}
      successMessage={copy.basicPurchaseSuccess}
      orderIdLabel={copy.basicOrderIdLabel}
      loadErrorMessage={copy.subscribeLoadError}
      notifyFailMessage={copy.purchaseNotifyFail}
      containerId="paypal-button-container-basic-website"
    />
  );
}
