import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Lucidus.AI",
  description: "Lorem Ipsum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className="overflow-hidden bg-neutral-800"
      >
        {children}
      </body>
    </html>
  );
}
