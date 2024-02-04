import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request, res: Response) {
  try {
    const { kepuasan } = await request.json();

    const { error } = await supabase.from("pelanggan").insert({ kepuasan });

    if (error) {
      return NextResponse.json(
        { message: "Gagal", success: false },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Success", success: true },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Internal Error" }, { status: 500 });
  }
}
