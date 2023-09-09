"use client";
import { Header } from "@components/header";
import { Hero } from "@components/home/hero";
import { Content } from "@components/content";
import { Footer } from "@components/footer";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-between px-2">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </section>
  );
}
