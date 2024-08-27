import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Politica & Gestão",
  description: "Software de gestão politica",
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
