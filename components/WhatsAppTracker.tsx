"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

function locationOf(link: HTMLAnchorElement) {
  if (link.dataset.wa) return link.dataset.wa;
  if (link.closest("header")) return "menu";
  if (link.closest("footer")) return "footer";
  return link.closest("section[id]")?.id || "contenido";
}

export default function WhatsAppTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.<HTMLAnchorElement>('a[href*="wa.me/"]');
      if (!link) return;
      track("whatsapp_click", {
        link_location: locationOf(link),
        link_text: (link.textContent || link.getAttribute("aria-label") || "").trim().slice(0, 80),
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
