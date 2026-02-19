import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DolcePartyCBA - Catálogo de Globos",
  description: "Catálogo interactivo de globos para fiestas y eventos",
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
