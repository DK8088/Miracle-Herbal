import { NextResponse } from "next/server";
import {connectDB} from "@/app/lib/mongodb";
import Page from "@/app/models/page";

export async function GET() {
  try {
    await connectDB();

    const pages = await Page.find({}).sort({ createdAt: -1 }).lean();

    return NextResponse.json({
      success: true,
      data: pages,
      message: "Pages fetched successfully",
    });

  } catch (error) {
    console.error("GET pages error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch pages",
      },
      { status: 500 }
    );
  }
}
