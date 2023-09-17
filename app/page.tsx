"use client";
import { Header } from "@components/header";
import { Hero } from "@/app/components/home";
import { Content } from "@/app/components/home";
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
