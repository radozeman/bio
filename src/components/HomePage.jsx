"use client";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import { Timeline } from "@/components/ui/timeline";
import { ABOUT_ME, TIMELINE_EDUCATION, TIMELINE_WORK } from "@/lib/constants";
import { useRef, useState } from "react";

export default function HomePage() {
  const [locale, setLocale] = useState(true);
  const workRef = useRef(null);
  const educationRef = useRef(null);
  const aboutRef = useRef(null);

  const handleSectionScroll = (e, section) => {
    switch (section) {
      case "work":
        if (!workRef?.current) return;
        e.preventDefault();
        workRef.current?.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      case "education":
        if (!educationRef?.current) return;
        e.preventDefault();
        workRef.current?.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      case "about":
        if (!aboutRef?.current) return;
        e.preventDefault();
        workRef.current?.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
    }
  };

  return (
    <main className="container flex flex-col items-center px-4 text-center m:px-0 text-neutral-500">
      <div className="sticky top-0 z-50 px-0 py-10 rounded-full md:p-10 backdrop-blur-sm w-fit">
        <Nav
          locale={locale}
          setLocale={setLocale}
          onNavClick={handleSectionScroll}
        />
      </div>
      <Header />
      <section ref={workRef} id="work" className="flex flex-col items-start">
        <Timeline
          data={locale ? TIMELINE_WORK.en : TIMELINE_WORK.sk}
          heading={locale ? "Work experience" : "Pracovné skúsenosti"}
        />
      </section>
      <section
        ref={educationRef}
        id="education"
        className="flex flex-col items-start"
      >
        <Timeline
          data={locale ? TIMELINE_EDUCATION.en : TIMELINE_EDUCATION.sk}
          heading={locale ? "Education" : "Vzdelanie"}
        />
      </section>
      <section
        ref={aboutRef}
        id="about"
        className="flex flex-col items-start w-full font-sans md:px-10"
      >
        <h2 className="mb-0 md:mb-8 pl-20 font-sans text-xl font-bold text-transparent leading-1 md:text-2xl/[55px] bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 text-start hover:bg-clip-text ">
          <span className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r  from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            {locale ? "About me" : "O mne"}
          </span>
        </h2>
        <p className="pt-5 pr-4 mb-8 text-base font-normal m:ps-0 ps-4 md:pl-20 pb-28 text-neutral-800 dark:text-neutral-200 text-start">
          {locale ? ABOUT_ME.en : ABOUT_ME.sk}
        </p>
      </section>
    </main>
  );
}
