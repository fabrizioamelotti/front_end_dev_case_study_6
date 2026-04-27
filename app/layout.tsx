import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Front-end dev case study 6",
  description: "Front-end code challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body className={"min-h-full flex flex-col"}>
        {children}
      </body>
    </html>
  );
}
