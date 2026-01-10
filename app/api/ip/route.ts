import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const headerList = await headers();
  // Vercel 환경에서는 'x-real-ip'나 'x-forwarded-for'를 사용합니다.
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0] ||
    headerList.get("x-real-ip") ||
    "Unknown";

  return NextResponse.json({ ip });
}
