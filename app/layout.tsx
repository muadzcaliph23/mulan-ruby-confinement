import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose required weights
  variable: "--font-poppins", // Define a CSS variable
});

export const metadata: Metadata = {
  title: "Mulan Ruby Spa",
  description:
    "Anda perlukan servis penjagaan selepas bersalin? Usah risau lagi! Pengalaman berpantang di rumah kali ini akan menjadi indah dan nyaman dengan perkhidmatan kami, Mulan Ruby Spa. Anda hanya perlu menunggu di rumah, dan tempah sahaja. Seterusnya, kami akan penuhi hasrat anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className={poppins.variable}>
      <body className={poppins.className}>
        <div>{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
