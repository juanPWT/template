import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastContext from "./context/ToastContext";
import AuthContext from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Template Next Auth",
  description: "Template Next Auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToastContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
