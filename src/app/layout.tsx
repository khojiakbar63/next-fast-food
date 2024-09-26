import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Header, Footer, MLayout } from "@/components";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        ></link>

      </Head>
      <body className={` antialiased`}>
        <Header />
        <MLayout>{children}</MLayout>
        <Footer />
      </body>
    </html>
  );
}
