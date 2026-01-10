import React from "react";

interface parmasType {
  params: Promise<{ id: string | string[] | undefined }>;
}

async function Page({ params }: parmasType) {
  // 핵심
  const { id } = await params;

  return (
    <div>
      <h1>props/parmas/type3/[[...id]]</h1>
      <p>id = {id === undefined ? "undefined" : JSON.stringify(id)}</p>
    </div>
  );
}

export default Page;
