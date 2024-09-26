import { Timeline } from "./ui/timeline";

const WorkSection = () => {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <h2 className="mb-4 font-sans text-2xl font-bold text-transparent leading-1 md:text-5xl/[55px] bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 text-start hover:bg-clip-text ">
            <a
              href="https://www.kupujauto.sk/"
              className="hover:bg-clip-text hover:bg-no-repeat hover:text-transparent hover:bg-gradient-to-r  hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 hover:[text-shadow:0_0_rgba(0,0,0,0.1)]"
            >
              kupujauto.sk
            </a>
          </h2>

          <p className="mb-4 text-start">
            React.js | Next.js | Supabase | Postgres | TailwindCSS
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm text-start">
            Autobazár s administrátorským rozhraním pre vytváranie, upravovanie
            a mazanie inzerátov.
          </p>
        </div>
      ),
    },
    {
      title: "2021 - 2024",
      content: (
        <div>
          <h2 className="mb-4 font-sans text-2xl font-bold text-transparent leading-1 md:text-5xl/[55px] bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 text-start">
            Ticketportal - Frontend Engineer
          </h2>
          <p className="mb-4 md:mb-0 text-start">
            ASP.NET MVC | .NET Web API | Dapper | T-SQL | jQuery | Bootstrap 5
          </p>
          <p className="mb-4 text-start">
            React.js | Next.js | RHF | Redux | SWR | React Select | TailwindCSS
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm text-start">
            Vývoj CRM systému pre organizátorov podujatí, zobrazovanie dát,
            možnosť odosielať hromadné a plánované e-maily, push notifikácie do
            appiek + UI na vytváranie šablón pre tieto e-maily a pushky.
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <h2 className="mb-4 font-sans text-2xl font-bold text-transparent leading-1 md:text-5xl/[55px] bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 text-start hover:bg-clip-text ">
            <a
              href="https://www.nelaprovazi.cz/"
              className="hover:bg-clip-text hover:bg-no-repeat hover:text-transparent hover:bg-gradient-to-r  hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 hover:[text-shadow:0_0_rgba(0,0,0,0.1)]"
            >
              nelaprovazi.cz
            </a>
          </h2>
          <p className="mb-4 text-start">React.js | Next.js | TailwindCSS</p>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm text-start">
            Jednoduché portfólio s multi step formulárom.
          </p>
        </div>
      ),
    },
    {
      title: "2019 - 2021",
      content: (
        <div>
          <h2 className="mb-4 font-sans text-2xl font-bold text-transparent leading-1 md:text-5xl/[55px] bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 text-start">
            SK-ING a.s. - Údržbár
          </h2>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm text-start">
            Opravy elektrických a vodoinštalačných porúch. V tejto práci som sa
            naučil komunikovať so zákazníkmi a externými spoločnosťami, ako aj
            plánovať každodenné pracovné úlohy.
          </p>
        </div>
      ),
    },
  ];
  return <Timeline data={timelineData} />;
};

export default WorkSection;
