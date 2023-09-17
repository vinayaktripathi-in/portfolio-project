"use client";
import { Header } from "@components/header";
import { Hero } from "@components/home/hero";
import { Content } from "@/app/components/home/content";
import { Footer } from "@components/footer";
import { ProgressBar } from "@components/loading/ProgressBar";
import { useSelector } from "react-redux";
import { ReduxState } from "@/lib/redux";
import { useEffect, useState } from "react";

export default function Home() {
  // const userDataState = useSelector((state: ReduxState) => state.userData);
  // const { data, loading, error } = userDataState;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This code will run on the client side after hydration.
    setLoading(false); // Set loading to false once fully hydrated.
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-between">
      <ProgressBar loading={loading} />
      <Header />
      <Hero />
      <Content />
      <Footer />
    </section>
  );
}
