import { NextResponse } from "next/server";

export async function POST(request: Request, res: Response) {
  try {
    const { username, password } = await request.json();

    console.log(process.env.USERNAME_APP);
    console.log(process.env.PASSWORD);

    if (
      username !== process.env.USERNAME_APP ||
      password !== process.env.PASSWORD
    ) {
      return NextResponse.json(
        { message: "Gagal", success: false },
        { status: 200 }
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
