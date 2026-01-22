"use client";
// app/presentation/page.tsx

import dynamic from "next/dynamic";
import { useState } from "react";

// 클라이언트 사이드에서만 렌더링되도록 동적 임포트
const Presentation = dynamic(() => import("@/components/presentation"), {
  ssr: false,
});

export default function Page({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  const list = ["1", "2"];
  return (
    <main className="">
      <div className="flex flex-row gap-1 p-1">
        {/* 좌측 사이드바 */}
        <div className="flex flex-col gap-1">
          {list.map((item, idx) => (
            <div key={item} className="w-40 bg-amber-400 rounded-xl p-1">
              {item}
            </div>
          ))}
        </div>
        {/* 우측 본문 */}
        <div className="flex-1 flex flex-col h-svh gap-1 p-1 bg-blue-100">
          {/* 우측 본문 : 미리보기 */}
          <div className="bg-amber-800 w-[400px] h-[300px]">미리보기</div>
          <textarea
            className="flex-1 w-full bg-amber-700 rounded-xl p-1"
            defaultValue={"asdf"}
          ></textarea>
        </div>
      </div>
      {/* <Presentation>
        <section>
          <h1>미리보기</h1>
        </section>
      </Presentation> */}
    </main>
  );
}
