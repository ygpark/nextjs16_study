import {
  Clock9,
  Database,
  Flower,
  Gamepad2,
  Hash,
  House,
  SquareSlash,
  TableProperties,
  TriangleAlert,
  Wifi,
} from "lucide-react";

export const path: {
  title: string;
  href: string;
  target: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Home",
    href: "/",
    target: "",
    icon: <House size="17" className="my-1" />,
  },
  {
    title: "Warning",
    href: "/warning",
    target: "",
    icon: <TriangleAlert size="17" className="my-1" />,
  },
  {
    title: "drizzle-orm",
    href: "/drizzle-orm",
    target: "",
    icon: <Database size="17" className="my-1" />,
  },
  {
    title: "Daisy-ui",
    href: "/daisy-ui",
    target: "",
    icon: <Flower size="17" className="my-1" />,
  },
  {
    title: "game",
    href: "/game",
    target: "",
    icon: <Gamepad2 size="17" className="my-1" />,
  },
  {
    title: "reveal",
    href: "/reveal",
    target: "",
    icon: <Gamepad2 size="17" className="my-1" />,
  },
  {
    title: "reveal-input",
    href: "/reveal-input",
    target: "",
    icon: <Gamepad2 size="17" className="my-1" />,
  },
  {
    title: "Props",
    href: "/props",
    target: "",
    icon: <TableProperties size="17" className="my-1" />,
  },
  {
    title: "Params",
    href: "/params",
    target: "",
    icon: <Hash size="17" className="my-1" />,
  },
  {
    title: "SearchParams",
    href: "/searchparams?key=value",
    target: "",
    icon: <SquareSlash size="17" className="my-1" />,
  },
  {
    title: "api/ip",
    href: "/api/ip",
    target: "_blank",
    icon: <Wifi size="17" className="my-1" />,
  },
  {
    title: "api/time",
    href: "/api/time",
    target: "_blank",
    icon: <Clock9 size="17" className="my-1" />,
  },
];
