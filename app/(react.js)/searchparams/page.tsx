import React from "react";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function Page({ searchParams }: PageProps) {
  // 핵심
  const search = await searchParams;

  return (
    <div>
      <p>searchParams = {JSON.stringify(search, null, 2)}</p>
    </div>
  );
}

export default Page;
