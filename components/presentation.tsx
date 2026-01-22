// components/Presentation.tsx
"use client";

import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
// CSS 파일 임포트
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css"; // 원하는 테마 선택

export default function Presentation({
  children,
}: {
  children?: React.ReactNode;
}) {
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 클라이언트 사이드에서만 초기화
    if (deckRef.current) {
      const deck = new Reveal(deckRef.current, {
        // 옵션 설정 (Tailwind v4 등과 함께 사용 시 레이아웃 조정 가능)
        embedded: true, // 다른 요소 안에 포함될 때 필수
        hash: true,
      });

      deck.initialize();

      // 컴포넌트 언마운트 시 정리
      return () => {
        try {
          // reveal.js의 파괴(destroy) API가 완벽하지 않을 수 있으므로
          // 필요한 경우 인스턴스 관리를 수행합니다.
        } catch (e) {
          console.warn("Reveal cleanup error", e);
        }
      };
    }
  }, []);

  return (
    <div className="reveal w-full h-full" ref={deckRef}>
      <div className="slides">
        {/* 섹션 하나가 슬라이드 한 장입니다. */}
        {children}
        {/* <section>
          <h1 className="text-4xl font-bold text-white">Slide 1</h1>
          <p>Next.js + Reveal.js</p>
        </section> */}
      </div>
    </div>
  );
}
