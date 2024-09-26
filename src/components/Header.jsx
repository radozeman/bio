import { TextGenEffect } from "./TextGenEffect";
const Header = () => {
  return (
    <section className="my-10 md:my-20">
      <TextGenEffect />
      {/* <h1 className="font-sans text-3xl font-bold text-transparent md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
        Radovan Zeman
      </h1> */}
      <p className="text-sm">
        <a
          href="https://github.com/radozeman"
          target="_blank"
          className="hover:bg-clip-text hover:bg-no-repeat hover:text-transparent hover:bg-gradient-to-r  hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 hover:[text-shadow:0_0_rgba(0,0,0,0.1)]"
        >
          Github
        </a>{" "}
        |{" "}
        <a
          href="mailto:r.zeman96@gmail.com"
          target="_blank"
          className="hover:bg-clip-text hover:bg-no-repeat hover:text-transparent hover:bg-gradient-to-r  hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 hover:[text-shadow:0_0_rgba(0,0,0,0.1)]"
        >
          r.zeman96@gmail.com
        </a>{" "}
        |{" "}
        <a
          href="tel:+421915357238"
          target="_blank"
          className="hover:bg-clip-text hover:bg-no-repeat hover:text-transparent hover:bg-gradient-to-r  hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 hover:[text-shadow:0_0_rgba(0,0,0,0.1)]"
        >
          +421 915 357 238
        </a>{" "}
        | Bratislava | Slovakia
      </p>
    </section>
  );
};

export default Header;
