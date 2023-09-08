"use client";
import "../globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div className="bg-white dark:bg-[#121212]" lang="en">
      {/* className={inter.className} */}
      <section>
        <main>
          <Toaster />
          {children}
        </main>
      </section>
    </div>
  );
}