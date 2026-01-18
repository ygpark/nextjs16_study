"use client";
import Link from "next/link";
import React, { useRef } from "react";

const Appbar = () => {
  // details 요소에 접근하기 위한 ref
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleClose = () => {
    if (detailsRef.current) {
      // open 속성을 수동으로 제거하여 메뉴를 닫음
      detailsRef.current.removeAttribute("open");
    }
  };

  const navList: { title: string; href: string }[] = [
    { title: "Home", href: "/" },
    { title: "Client Component", href: "/client-component" },
    { title: "drizzle-orm", href: "/drizzle-orm" },
    { title: "Daisy-ui", href: "/daisy-ui" },
    { title: "shadcn", href: "/shadcn" },
    { title: "game", href: "/game" },
  ];

  const navListProps: { title: string; href: string }[] = [
    { title: "Props", href: "/props" },
    { title: "Params", href: "/props/params" },
    { title: "SearchParams", href: "/props/searchparams?key=value" },
  ];

  const navListAPI: { title: string; href: string }[] = [
    { title: "ip", href: "/api/ip" },
    { title: "time", href: "/api/time" },
  ];

  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {navList.map((item, idx) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}

            <li>
              <details ref={detailsRef}>
                <summary>API</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  {navListAPI.map((item, idx) => (
                    <li key={item.href}>
                      <Link href={item.href} onClick={handleClose}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <details ref={detailsRef}>
                <summary>Props</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  {navListProps.map((item, idx) => (
                    <li key={item.href}>
                      <Link href={item.href} onClick={handleClose}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
