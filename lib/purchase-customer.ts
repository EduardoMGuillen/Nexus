export type PurchaseCustomerDetails = {
  name: string;
  email: string;
  phone: string;
  filesUrl: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isPurchaseCustomerValid(c: PurchaseCustomerDetails): boolean {
  const name = c.name?.trim() ?? "";
  const email = c.email?.trim() ?? "";
  const phone = c.phone?.trim() ?? "";
  if (!name || !email || !phone) return false;
  if (!EMAIL_RE.test(email)) return false;
  const files = c.filesUrl?.trim() ?? "";
  if (files) {
    try {
      const u = new URL(files);
      if (u.protocol !== "http:" && u.protocol !== "https:") return false;
    } catch {
      return false;
    }
  }
  return true;
}
