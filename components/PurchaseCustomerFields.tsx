"use client";

import { useId } from "react";
import type { PurchaseCustomerDetails } from "@/lib/purchase-customer";

export type PurchaseFieldLabels = {
  title: string;
  name: string;
  email: string;
  phone: string;
  files: string;
  filesHint: string;
  enablePayHint: string;
};

type Props = {
  value: PurchaseCustomerDetails;
  onChange: (next: PurchaseCustomerDetails) => void;
  labels: PurchaseFieldLabels;
  showEnableHint: boolean;
};

export default function PurchaseCustomerFields({
  value,
  onChange,
  labels,
  showEnableHint,
}: Props) {
  const fid = useId();
  return (
    <div className="mb-5 space-y-3 text-left">
      <p className="text-sm font-semibold text-white">{labels.title}</p>
      <div>
        <label className="block text-xs text-dark-400 mb-1" htmlFor={`${fid}-name`}>
          {labels.name}
        </label>
        <input
          id={`${fid}-name`}
          type="text"
          autoComplete="name"
          value={value.name}
          onChange={(e) => onChange({ ...value, name: e.target.value })}
          className="w-full rounded-lg border border-dark-600 bg-dark-900/80 px-3 py-2 text-sm text-white placeholder:text-dark-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>
      <div>
        <label className="block text-xs text-dark-400 mb-1" htmlFor={`${fid}-email`}>
          {labels.email}
        </label>
        <input
          id={`${fid}-email`}
          type="email"
          autoComplete="email"
          value={value.email}
          onChange={(e) => onChange({ ...value, email: e.target.value })}
          className="w-full rounded-lg border border-dark-600 bg-dark-900/80 px-3 py-2 text-sm text-white placeholder:text-dark-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>
      <div>
        <label className="block text-xs text-dark-400 mb-1" htmlFor={`${fid}-phone`}>
          {labels.phone}
        </label>
        <input
          id={`${fid}-phone`}
          type="tel"
          autoComplete="tel"
          value={value.phone}
          onChange={(e) => onChange({ ...value, phone: e.target.value })}
          className="w-full rounded-lg border border-dark-600 bg-dark-900/80 px-3 py-2 text-sm text-white placeholder:text-dark-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>
      <div>
        <label className="block text-xs text-dark-400 mb-1" htmlFor={`${fid}-files`}>
          {labels.files}
        </label>
        <input
          id={`${fid}-files`}
          type="url"
          inputMode="url"
          placeholder="https://"
          value={value.filesUrl}
          onChange={(e) => onChange({ ...value, filesUrl: e.target.value })}
          className="w-full rounded-lg border border-dark-600 bg-dark-900/80 px-3 py-2 text-sm text-white placeholder:text-dark-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
        <p className="mt-1 text-xs text-dark-500">{labels.filesHint}</p>
      </div>
      {showEnableHint && (
        <p className="text-xs text-amber-400/90 pt-1">{labels.enablePayHint}</p>
      )}
    </div>
  );
}
