"use client";

import { PanelRightClose } from "lucide-react";
import { useState, useEffect } from "react";
import { getRecentIPs, type RecentIPEntry } from "@/lib/utils";
import { useRouter } from "next/navigation";
import RecentIP from "@/components/recentip";

export default function Page() {
  const [recentIPs, setRecentIPs] = useState<RecentIPEntry[]>([]);
  const router = useRouter();

  const handleIPClick = (ip: string) => {
    router.push(`/host/${ip}`);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setRecentIPs(getRecentIPs().sort((a, b) => b.timestamp - a.timestamp));
  }, []);

  return (
    <>
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <PanelRightClose size="17" className="my-1" />
          </label>
          <div className="px-4">Home</div>
        </nav>
        <RecentIP />
      </div>
    </>
  );
}
