import Header from "@/components/Header";
import Nav from "@/components/Nav";
import WorkSection from "@/components/workSection";

export default function Index() {
  return (
    <main className="container px-4 text-center m:px-0 text-neutral-500">
      <div className="sticky top-0 z-50 flex items-center justify-center pt-4 backdrop-blur-sm">
        <Nav />
      </div>
      <Header />
      <section className="flex flex-col items-start">
        <WorkSection />
      </section>
    </main>
  );
}
