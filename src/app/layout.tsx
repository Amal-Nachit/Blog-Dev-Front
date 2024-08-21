import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Blog Dev",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@400&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
