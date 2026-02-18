"use client";

import DrawerContent from "@/components/drawer-content";
import { PanelRightClose } from "lucide-react";
import { useState, useEffect } from "react";
import { getRecentIPs, type RecentIPEntry } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Home() {
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
        {/* Page content here */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">최근 IP 목록</h2>
          {recentIPs.length > 0 ? (
            <ul className="list-disc list-inside">
              {recentIPs.map((entry, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:underline"
                  onClick={() => handleIPClick(entry.ip)}
                >
                  {entry.ip} ({new Date(entry.timestamp).toLocaleString()})
                </li>
              ))}
            </ul>
          ) : (
            <p>최근 방문한 IP가 없습니다.</p>
          )}
        </div>
      </div>
    </>
  );
}
