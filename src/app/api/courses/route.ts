import { NextResponse } from "next/server";
import { mockCourses } from "../mock-data/courses";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const subject = searchParams.get("subject");

  if (subject) {
    const filtered = mockCourses.filter(
      (course) => course.subject.toLowerCase() === subject.toLowerCase()
    );
    return NextResponse.json(filtered);
  }

  return NextResponse.json(mockCourses);
}
