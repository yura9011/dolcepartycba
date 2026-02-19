import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DolcePartyCBA - Catálogo Completo",
  description: "Catálogo completo de productos para fiestas y eventos: globos, golosinas, bazar, librería y más",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
