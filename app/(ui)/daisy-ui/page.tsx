import React from "react";

const Page = () => {
  return (
    <div>
      <div>설치</div>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code className="text-sm font-mono text-blue-600">{`@import "tailwindcss";
+@plugin "daisyui";
`}</code>
      </pre>
    </div>
  );
};

export default Page;
