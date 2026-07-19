import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Learning Platform",
  description: "Learn anything, anywhere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
