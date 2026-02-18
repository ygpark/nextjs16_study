export type Service = {
  src: string;
  alt: string;
  href: (ip: string) => string;
  label: string;
};

export const services: Service[] = [
  {
    src: "/image/favicon.shodan.io.webp",
    alt: "shodan.io",
    href: (ip) => `https://www.shodan.io/host/${ip}`,
    label: "shodan",
  },
  {
    src: "/image/favicon.virustotal.svg",
    alt: "virustotal",
    href: (ip) => `https://www.virustotal.com/gui/ip-address/${ip}`,
    label: "virustotal",
  },
  {
    src: "/image/favicon.censys.io.ico",
    alt: "censys.io",
    href: (ip) => `https://platform.censys.io/search?q=host.ip%3D%22${ip}%22`,
    label: "censys",
  },
  {
    src: "/image/favicon.check-host.net.ico",
    alt: "check-host.net",
    href: (ip) => `https://check-host.net/ip-info?host=${ip}`,
    label: "check-host",
  },
  {
    src: "/image/favicon.bgp.he.net.ico",
    alt: "bgp.he.net",
    href: (ip) => `https://bgp.he.net/ip/${ip}`,
    label: "he.net",
  },
  {
    src: "/image/favicon.secai.ai.ico",
    alt: "secai.ai",
    href: (ip) => `https://i.secai.ai/research/${ip}`,
    label: "secai",
  },
  {
    src: "/image/favicon.criminalip.io.ico",
    alt: "criminalip.io",
    href: (ip) => `https://www.criminalip.io/asset/report/${ip}`,
    label: "criminalip",
  },
  {
    src: "/image/favicon.spur.us.ico",
    alt: "spur.us",
    href: (ip) => `https://spur.us/context/${ip}`,
    label: "spur.us",
  },
  {
    src: "/image/favicon.whois.com.ico",
    alt: "whois.com",
    href: (ip) => `https://www.whois.com/whois/${ip}`,
    label: "whois.com",
  },
  {
    src: "/image/favicon.ipapi.is.png",
    alt: "ipapi.is",
    href: (ip) => `https://api.ipapi.is/?q=${ip}`,
    label: "ipapi",
  },
  {
    src: "/image/favicon.ipapi.is.png",
    alt: "ipapi.is",
    href: (ip) => `https://api.ipapi.is/?whois=${ip}`,
    label: "ipapi",
  },
  {
    src: "/image/favicon.urlscan.io.ico",
    alt: "urlscan.io",
    href: (ip) => `https://urlscan.io/ip/${ip}`,
    label: "urlscan",
  },
  //   { src: "/image/favicon.iplocate.io.webp", alt: "iplocate.io", href: (ip) => `https://www.iplocate.io/api/lookup/${ip}`, label: "iplocate" },
];
