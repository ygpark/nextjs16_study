"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { addRecentIP } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import RecentIP from "@/components/recentip";
import { services } from "@/components/services";

function Page() {
  const params = useParams();
  const ip = params.ip as string;
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const isValidIP = (ip: string) => {
    const ipRegex =
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(ip);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isValidIP(value) || value === "") {
      setSearchValue(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isValidIP(searchValue)) {
      router.push(`/host/${searchValue}`);
    }
  };
  useEffect(() => {
    if (ip) {
      addRecentIP(ip);
    }
  }, [ip]);

  return (
    <>
      <div>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search IP"
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </label>
        <h1 className="text-2xl font-bold">{ip}</h1>
        <ul>
          {services.map((s, idx) => (
            <li key={idx} className="flex flex-row items-center gap-2 py-1">
              <Image src={s.src} alt={s.alt} width={16} height={16} />
              <a href={s.href(ip)} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <RecentIP />
    </>
  );
}

export default Page;
