import "./globals.css";
import { Fira_Code } from 'next/font/google'
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const fcFont = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fcFont',
  weight: "400"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fcFont.variable}>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
