"use client";
import React, { useEffect, useState } from "react";
import { getRecentIPs, RecentIPEntry } from "@/lib/utils";
import { useRouter } from "next/navigation";

const RecentIP = () => {
  // 1. 상태는 처음에 빈 배열로 시작합니다.
  const [recentIPs, setRecentIPs] = useState<RecentIPEntry[]>([]);
  // 2. 하이드레이션이 완료되었는지 확인할 플래그입니다.
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // 3. 컴포넌트가 브라우저에 마운트된 직후에 실행됩니다.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRecentIPs(getRecentIPs().sort((a, b) => b.timestamp - a.timestamp));
    setMounted(true);
  }, []);

  const handleIPClick = (ip: string) => {
    router.push(`/host/${ip}`);
  };

  // 4. 마운트되기 전(서버 렌더링 시점)에는 아무것도 그리거나
  // 일관된 기본 UI만 보여주어 서버-클라이언트 간 불일치를 방지합니다.
  if (!mounted) {
    return null; // 또는 로딩 스피너
  }

  return (
    <div>
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
                {entry.ip}
                {/* {entry.ip} ({new Date(entry.timestamp).toLocaleString()}) */}
              </li>
            ))}
          </ul>
        ) : (
          <p>최근 방문한 IP가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default RecentIP;
