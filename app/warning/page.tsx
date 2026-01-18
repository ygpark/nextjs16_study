"use client";
import React, { useEffect, useRef } from "react";

function Page() {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) contentRef.current.innerText = "Load";
  }, []);

  return (
    <div>
      <p>
        (주의) 클라이언트 컴포넌트에서 서버 컴포넌트를 import 하지 마라. 대신
        children으로 전달받아라.
      </p>
      <div ref={contentRef}>...</div>
    </div>
  );
}

export default Page;
