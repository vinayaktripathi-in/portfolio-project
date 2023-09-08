"use client";
import { Header } from "@components/header";
import { Hero } from "@components/home/hero";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-between px-2">
      <Header />
      <Hero />
      {/* <Counter/> */}
    </section>
  );
}
