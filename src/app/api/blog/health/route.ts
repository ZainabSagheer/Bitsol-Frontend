import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [total, published] = await Promise.all([
      prisma.blog.count(),
      prisma.blog.count({ where: { published: true } }),
    ]);
    return NextResponse.json({ ok: true, total, published });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
