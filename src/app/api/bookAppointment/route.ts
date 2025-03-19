import { google } from "googleapis";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const credentialsPath = path.join(process.cwd(), "credentials.json");

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(fs.readFileSync(credentialsPath, "utf-8")),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = "1H43O-gk_mLIMlxfaVyr9Wk6mKOoHt9JDVExsG7JS30g";
const RANGE = "Sheet1!A:G";

// ✅ Next.js App Router requires named functions (POST)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, date, time, service, message } = body;

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: "RAW",
      requestBody: {
        values: [[name, email, phone, date, time, service, message]],
      },
    });

    return NextResponse.json({ message: "Appointment booked successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error saving appointment:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
