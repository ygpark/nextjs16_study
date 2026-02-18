"use client";
import { PanelRightClose } from "lucide-react";
// app/presentation/page.tsx

import dynamic from "next/dynamic";
import { useState } from "react";

// 클라이언트 사이드에서만 렌더링되도록 동적 임포트
const Presentation = dynamic(() => import("@/components/presentation"), {
  ssr: false,
});

// 2. 데이터 구성
const quizData = [
  "기린",
  "펭귄",
  "코끼리",
  "치타",
  "판다",
  "탕수육",
  "떡볶이",
  "아이스크림",
  "삼겹살",
  "마라탕",
  "소방관",
  "요리사",
  "경찰관",
  "의사",
  "우주비행사",
  "스파이더맨",
  "엘사",
  "해리포터",
  "피카츄",
  "아이언맨",
  "축구",
  "양치질",
  "자전거",
  "눈싸움",
  "노래방",
  "달리기",
];

export default function Page() {
  const [mode, setMode] = useState("show");

  const onEditBtnClickHandler = () => {
    switch (mode) {
      case "show":
        setMode("edit");
        break;
      case "edit":
        setMode("show");
        break;
    }
  };

  return (
    <>
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          {/* Sidebar toggle icon */}
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <PanelRightClose size="17" className="my-1" />
          </label>
          {/* TITLE */}
          <div className="px-4">{/* Title */}Reveal</div>
          {mode == "show" ? (
            <button className="btn" onClick={onEditBtnClickHandler}>
              수정
            </button>
          ) : (
            <button className="btn" onClick={onEditBtnClickHandler}>
              완료
            </button>
          )}
        </nav>
        {/* Page content here */}
        <div className="">
          <main className="w-full h-[calc(100vh-100px)]">
            {mode == "show" ? (
              <Presentation>
                {quizData.map((item, idx) => (
                  <section key={item}>
                    <h1>{item}</h1>
                  </section>
                ))}
              </Presentation>
            ) : (
              <textarea
                defaultValue={quizData.toString()}
                className="w-full h-[calc(100vh-100px)] bg-amber-200"
              />
            )}
          </main>
        </div>
      </div>
    </>
  );
}
