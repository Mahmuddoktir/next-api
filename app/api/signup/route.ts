import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json(
      { message: "Bu email allaqachon mavjud!" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10); // 10 — hash kuchi

  const user = await prisma.user.create({
    data: { email, password: hashedPassword },
  });

  return NextResponse.json({
    message: "Ro‘yxatdann o‘tish muvaffaqiyatli!",
    user,
  });
}
