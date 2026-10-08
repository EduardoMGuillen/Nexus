type Gtag = (...args: unknown[]) => void;

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  (window as unknown as { gtag?: Gtag }).gtag?.("event", event, params);
}
