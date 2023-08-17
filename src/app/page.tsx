import { Header } from "@components/header";
import { Hero } from "@components/home/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2">
      <Header />
      <Hero />
    </main>
  );
}
