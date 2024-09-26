import Header from "@/components/Header";

import WorkSection from "@/components/workSection";

export default function Index() {
  return (
    <main className="container px-4 text-center m:px-0 text-neutral-500">
      <Header />

      <section className="flex flex-col items-start">
        <WorkSection />
      </section>
    </main>
  );
}
