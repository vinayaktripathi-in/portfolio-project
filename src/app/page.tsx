import Image from "next/image";
import { Hero } from "@components/home/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 py-4">
      <Hero />
    </main>
  );
}
