import React from "react";
import Code from "@/components/code";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Shadcn</h1>
      <h2>공식 홈페이지</h2>
      <Link href="https://ui.shadcn.com/" target="_blank">
        https://ui.shadcn.com/
      </Link>
      <hr />
      <h2>설치</h2>
      <Code>yarn shadcn@latest create</Code>
      <Code>yarn dlx shadcn@latest add dropdown-menu</Code>
    </div>
  );
};

export default Page;
