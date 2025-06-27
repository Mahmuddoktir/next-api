import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json(
      { message: "Foydalanuvchi topilmadi!" },
      { status: 404 }
    );
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json({ message: "Parol noto‘g‘ri!" }, { status: 401 });
  }

  return NextResponse.json({
    message: "Kirish muvaffaqiyatli!",
    user: { email: user.email },
  });
}
