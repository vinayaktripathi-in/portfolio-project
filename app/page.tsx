"use client";
import { Header } from "@components/header";
import { Hero } from "@components/home/hero";
import { Content } from "@/app/components/home/content";
import { Footer } from "@components/footer";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-between">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </section>
  );
}
