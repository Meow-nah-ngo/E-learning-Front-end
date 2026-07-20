import { NextResponse } from "next/server";
import { mockSubjects } from "../mock-data/subjects";

export async function GET() {
  return NextResponse.json(mockSubjects);
}
