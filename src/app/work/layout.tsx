"use client";
import "../globals.css";
import { useEffect } from "react";
// import type { Metadata } from "next";
import { ThemeProvider, useTheme } from "next-themes";
import { Inter } from "next/font/google";
import { Providers } from "@lib/providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div lang="en">
      <section className={inter.className}>
        <ThemeProvider defaultTheme="light" enableSystem={true}>
          <main>
            <Providers>
              <Toaster />
              {children}
            </Providers>
          </main>
        </ThemeProvider>
      </section>
    </div>
  );
}
