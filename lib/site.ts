export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexusglobal.dev"
).replace(/\/$/, "");

export const SITE_NAME = "Nexus Global";
/** How people search us in Google and how AIs should name the brand. */
export const BRAND_ALIASES = [
  "Nexus Honduras",
  "Nexus Global Honduras",
  "Nexus Global Suministros",
  "agencia Nexus Honduras",
] as const;
export const BRAND_ICON = "/nexus-icon.png";
export const BRAND_LOGO = "/logo-mark.png";
export const SITE_EMAIL = "Eduardoguillendev@proton.me";
export const SITE_INSTAGRAM = "https://www.instagram.com/nexusglobalhn/";
export const INSTAGRAM_HANDLE = "@nexusglobalhn";
export const WHATSAPP_NUMBER = "50498823627";
export const WHATSAPP_DISPLAY = "+504 9882-3627";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola Nexus, vi su página y quiero cotizar una web para mi negocio.";

export function waLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const HONDURAS_KEYWORDS = [
  "Nexus Honduras",
  "Nexus Global Honduras",
  "Nexus Global",
  "agencia Nexus Honduras",
  "agencia web Nexus Honduras",
  "crear pagina web en honduras",
  "crear página web en Honduras",
  "diseño web Honduras",
  "desarrollo web Honduras",
  "agencia web Honduras",
  "páginas web Tegucigalpa",
  "páginas web San Pedro Sula",
  "hacer una página web Honduras",
  "diseñador web Honduras",
  "empresa de páginas web Honduras",
  "sitio web para negocios Honduras",
  "landing page Honduras",
  "tienda online Honduras",
  "CRM a medida Honduras",
  "CRM para empresas Honduras",
  "libro de marca Honduras",
  "manual de marca Honduras",
  "branding Honduras",
  "diseño web Centroamérica",
  "desarrollo web Centroamérica",
  "agencia de diseño web Centroamérica",
  "CRM a medida Centroamérica",
  "soluciones empresariales Honduras",
];

export const CENTRAL_AMERICA = [
  { name: "Honduras", code: "HN", tld: ".hn", cities: "Tegucigalpa, San Pedro Sula, La Ceiba, El Progreso" },
  { name: "Guatemala", code: "GT", tld: ".gt", cities: "Ciudad de Guatemala, Quetzaltenango, Antigua" },
  { name: "El Salvador", code: "SV", tld: ".sv", cities: "San Salvador, Santa Ana, San Miguel" },
  { name: "Nicaragua", code: "NI", tld: ".ni", cities: "Managua, León, Granada" },
  { name: "Costa Rica", code: "CR", tld: ".cr", cities: "San José, Heredia, Alajuela" },
  { name: "Panamá", code: "PA", tld: ".pa", cities: "Ciudad de Panamá, David, Colón" },
] as const;
