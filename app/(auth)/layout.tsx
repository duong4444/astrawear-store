import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AstraWear - Store Auth",
  description: "Next.js 14 AstraWear Ecommerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      {/* bỏ qua cảnh báo khi HTML server và client khác nhau, thường dùng cho <html> 
      hoặc <body> trong Next.js để tránh warning về font/theme/auth khi hydrate. */}
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
