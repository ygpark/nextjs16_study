"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { addRecentIP } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import RecentIP from "@/components/recentip";

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
        <h1>{ip}</h1>
        <ul>
          <li className="flex flex-row items-center gap-2 py-1">
            <Image
              src="/image/favicon.virustotal.svg"
              alt="virustotal"
              width="16"
              height="16"
            />
            <a
              href={`https://www.virustotal.com/gui/ip-address/${ip}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              virustotal
            </a>
          </li>
          <li className="flex flex-row items-center gap-2 py-1">
            <Image
              src="/image/favicon.shodan.io.webp"
              alt="shodan.io"
              width="16"
              height="16"
            />
            <a
              href={`https://www.shodan.io/host/${ip}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              shodan
            </a>
          </li>
          <li className="flex flex-row items-center gap-2 py-1">
            <Image
              src="/image/favicon.criminalip.io.ico"
              alt="criminalip.io"
              width="16"
              height="16"
            />
            <a
              href={`https://www.criminalip.io/asset/report/${ip}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              criminalip
            </a>
          </li>
          <li className="flex flex-row items-center gap-2 py-1">
            <Image
              src="/image/favicon.secai.ai.ico"
              alt="secai.ai"
              width="16"
              height="16"
            />
            <a
              href={`https://i.secai.ai/research/${ip}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              secai
            </a>
          </li>
          <li className="flex flex-row items-center gap-2 py-1">
            <Image
              src="/image/favicon.censys.io.ico"
              alt="censys.io"
              width="16"
              height="16"
            />
            <a
              href={`https://platform.censys.io/search?q=host.ip%3D%22${ip}%22`}
              target="_blank"
              rel="noopener noreferrer"
            >
              censys
            </a>
          </li>
          <li className="flex flex-row items-center gap-2 py-1">
            <Image
              src="/image/favicon.spur.us.ico"
              alt="spur.us"
              width="16"
              height="16"
            />
            <a
              href={`https://spur.us/context/${ip}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              spur.us
            </a>
          </li>
          <li className="flex flex-row items-center gap-2 py-1">
            <Image
              src="/image/favicon.whois.com.ico"
              alt="whois.com"
              width="16"
              height="16"
            />
            <a
              href={`https://www.whois.com/whois/${ip}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              whois.com
            </a>
          </li>
          <li className="flex flex-row items-center gap-2 py-1">
            <Image
              src="/image/favicon.iplocate.io.webp"
              alt="iplocate.io"
              width="16"
              height="16"
            />
            <a
              href={`https://www.iplocate.io/api/lookup/${ip}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              iplocate
            </a>
          </li>
          <li className="flex flex-row items-center gap-2 py-1">
            <Image
              src="/image/favicon.ipapi.is.png"
              alt="ipapi.is"
              width="16"
              height="16"
            />
            <a
              href={`https://api.ipapi.is/?q=${ip}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              ipapi
            </a>
          </li>
          <li className="flex flex-row items-center gap-2 py-1">
            <Image
              src="/image/favicon.bgp.he.net.ico"
              alt="bgp.he.net"
              width="16"
              height="16"
            />
            <a
              href={`https://bgp.he.net/ip/${ip}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              he.net
            </a>
          </li>
          <li className="flex flex-row items-center gap-2 py-1">
            <Image
              src="/image/favicon.urlscan.io.ico"
              alt="urlscan.io"
              width="16"
              height="16"
            />
            <a
              href={`https://urlscan.io/ip/${ip}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              urlscan
            </a>
          </li>
          <li className="flex flex-row items-center gap-2 py-1">
            <Image
              src="/image/favicon.check-host.net.ico"
              alt="check-host.net"
              width="16"
              height="16"
            />
            <a
              href={`https://check-host.net/ip-info?host=${ip}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              check-host
            </a>
          </li>
        </ul>
      </div>
      <RecentIP />
    </>
  );
}

export default Page;
