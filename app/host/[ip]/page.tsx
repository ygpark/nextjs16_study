import React from "react";
import Image from "next/image";

interface parmasType {
  params: Promise<{ ip: string | string[] | undefined }>;
}

async function Page({ params }: parmasType) {
  // 핵심
  const { ip } = await params;

  return (
    <div>
      <h1>{ip}</h1>
      <ul>
        <li className="flex flex-row items-center gap-2 py-1">
          <Image
            src="/img/favicon.virustotal.svg"
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
            src="/img/favicon.shodan.io.webp"
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
            src="/img/favicon.criminalip.io.ico"
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
            src="/img/favicon.secai.ai.ico"
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
            src="/img/favicon.censys.io.ico"
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
            src="/img/favicon.spur.us.ico"
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
            src="/img/favicon.whois.com.ico"
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
            src="/img/favicon.iplocate.io.webp"
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
            src="/img/favicon.ipapi.is.png"
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
            src="/img/favicon.bgp.he.net.ico"
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
            src="/img/favicon.urlscan.io.ico"
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
            src="/img/favicon.check-host.net.ico"
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
  );
}

export default Page;
