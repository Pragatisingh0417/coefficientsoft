
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoefficientSoft | Engineering Ideas into Reality",
  description:
    "CoefficientSoft builds modern software, SaaS products, AI solutions, and digital commerce experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
