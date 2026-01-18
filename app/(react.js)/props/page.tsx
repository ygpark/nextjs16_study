import React from "react";

interface PageProps {
  // ex) /blog/[id]
  params: Promise<{ [key: string]: string | string[] | undefined }>;
  // ex) google.com?search=keyword
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function Page(props: PageProps) {
  // 1. params와 searchParams를 await로 풀어줍니다.
  const params = await props.params;
  const searchParams = await props.searchParams;

  // 2. 출력용 객체를 별도로 구성합니다.
  const resolvedProps = {
    params,
    searchParams,
  };

  return (
    <div>
      <h1>Props</h1>
      {/* 2. 객체를 문자열로 변환하여 출력합니다. */}
      <pre className="bg-gray-400">
        {JSON.stringify(resolvedProps, null, 2)}
      </pre>
    </div>
  );
}

export default Page;
