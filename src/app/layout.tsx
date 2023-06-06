import "./globals.css";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";

const futura = localFont({
  src: [
    {
      path: "../fonts/futurabold.ttf",
      weight: "500",
    },
    {
      path: "../fonts/futuralight.ttf",
      weight: "200",
    },
  ],
  variable: "--font-futura",
});

const fontroboto = Roboto({
  subsets: ["latin"],
  weight: ["100"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Nike",
  description: "Just do it.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${futura.variable} font-sans`}>
      <body className={`${fontroboto.variable} font-roboto`}>{children}</body>
    </html>
  );
}
