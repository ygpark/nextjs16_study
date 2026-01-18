import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string; // 추가적인 스타일 확장을 위해 권장
}

const Code = ({ children, className = "" }: Props) => {
  return (
    // v4에서는 링(ring)이나 그림자(shadow) 수치 조절이 더 직관적입니다.
    <div className={`my-4 rounded-lg bg-gray-900 p-4 shadow-sm ${className}`}>
      <pre className="overflow-x-auto">
        <code className="font-mono text-sm text-gray-100 antialiased">
          {children}
        </code>
      </pre>
    </div>
  );
};

export default Code;
