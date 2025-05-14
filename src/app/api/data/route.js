// app/api/data/route.js
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    if (!db) {
      throw new Error("Database connection not established");
    }

    const data = db
      .prepare(
        `
        SELECT 
          id,
          title,
          img,
          desc,
          link,
          created_at,
          technologies,
          github
        FROM projects
        ORDER BY created_at DESC
      `,
      )
      .all();

    return NextResponse.json({
      success: true,
      data,
      count: data.length,
    });
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch projects",
        message:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}

// // You can also add other HTTP methods
// export async function POST(request: Request) {
//   const body = await request.json();
//   // Process the POST request
//   return NextResponse.json({ success: true });
// }
