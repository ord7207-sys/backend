// นำเข้า NextResponse จาก next/server เพื่อใช้จัดการและส่งค่า HTTP Response กลับไปยังไคลเอนต์
import { NextResponse } from "next/server";

//================================================================================
// GET By ID Function (/src/app/api/users/[id]/route.js)
//================================================================================
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    console.log({ success: true, message: `ลบข้อมูลผู้คนที่ ${id} สำเร็จ`, status: 200 });

    return NextResponse.json(
      {
        success: true,
        message: "ลบข้อมูลผู้ใช้สำเร็จ",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}