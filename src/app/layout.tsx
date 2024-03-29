import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Eloïck | Portfolio",
  description: "Portfolio of Eloïck",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans text-sm sm:text-base md:text-lg lg:text-xl ${inter.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
