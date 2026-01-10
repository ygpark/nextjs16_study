// src/app/api/hello/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ date: new Date().toLocaleString() });
}

export async function POST(request: Request) {
  const data = await request.json(); // 표준 Request 객체 사용
  return NextResponse.json({ data });
}
