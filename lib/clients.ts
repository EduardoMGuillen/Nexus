export type ClientCategory =
  | "realEstate"
  | "platforms"
  | "security"
  | "business"
  | "beauty";

export type Client = {
  name: string;
  domain: string;
  url: string;
  logo: string;
  category: ClientCategory;
  logoBg?: string;
};

export const CLIENTS: Client[] = [
  {
    name: "Astro",
    domain: "lagrancasablanca.com",
    url: "https://www.lagrancasablanca.com",
    logo: "/partners/astrologo.png",
    category: "realEstate",
  },
  {
    name: "Casablanca",
    domain: "lagrancasablanca.com",
    url: "https://www.lagrancasablanca.com",
    logo: "/partners/casablancadorado.png",
    category: "realEstate",
  },
  {
    name: "Studio 54",
    domain: "lagrancasablanca.com",
    url: "https://www.lagrancasablanca.com",
    logo: "/partners/studio54logo.png",
    category: "realEstate",
  },
  {
    name: "Stellare",
    domain: "stellare.co",
    url: "https://www.stellare.co",
    logo: "/partners/stellarelogo.png",
    category: "realEstate",
  },
  {
    name: "Secaira Soluciones Inmobiliarias",
    domain: "secairainmobiliaria.com",
    url: "https://secairainmobiliaria.com",
    logo: "/partners/secaira-logo.png",
    category: "realEstate",
    logoBg: "bg-neutral-900 rounded-xl",
  },
  {
    name: "MiVisita",
    domain: "mivisita.app",
    url: "https://mivisita.app",
    logo: "/partners/mivisita-logo.png",
    category: "security",
  },
  {
    name: "MiVisita Dragon",
    domain: "mivisitadragon.xyz",
    url: "https://mivisitadragon.xyz",
    logo: "/partners/mivisita-dragon-logo.jpg",
    category: "security",
  },
  {
    name: "Apuntado",
    domain: "apuntado.app",
    url: "https://apuntado.app",
    logo: "/partners/apuntado-logo.png",
    category: "platforms",
  },
  {
    name: "Mi Barbería",
    domain: "mibarberia.xyz",
    url: "https://mibarberia.xyz",
    logo: "/partners/mibarberia-logo.png",
    category: "platforms",
    logoBg: "bg-neutral-900 rounded-xl",
  },
  {
    name: "TeamLink",
    domain: "teamlink.lat",
    url: "https://www.teamlink.lat",
    logo: "/partners/teamlinklogo.png",
    category: "business",
  },
  {
    name: "BizzTrack",
    domain: "bizztrack.pro",
    url: "https://www.bizztrack.pro",
    logo: "/partners/Bizztracklogo.png",
    category: "business",
  },
  {
    name: "Bravex Trade Services",
    domain: "bravextradeservices.com",
    url: "https://bravextradeservices.com/",
    logo: "/partners/bravex_sinf.png",
    category: "business",
    logoBg: "bg-neutral-900 rounded-xl",
  },
  {
    name: "Marta Martínez Estética",
    domain: "martamartinezestetica.com",
    url: "https://www.martamartinezestetica.com/",
    logo: "/partners/marta_martinez_estetica.png",
    category: "beauty",
  },
  {
    name: "RoseLune Floristería",
    domain: "roselunehn.com",
    url: "https://roselunehn.com",
    logo: "/partners/roselune.png",
    category: "beauty",
    logoBg: "bg-neutral-900 rounded-xl",
  },
];
