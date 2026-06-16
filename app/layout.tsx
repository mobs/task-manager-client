import type { Metadata } from "next";

import "./globals.css";

import Providers from "./providers";

import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Task Manager",
  description:
    "Task management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />

          {children}
        </Providers>
      </body>
    </html>
  );
}