import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "777 Bet",
  description: "Best betting casine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-poppinsLight">{children}</body>
    </html>
  );
}
