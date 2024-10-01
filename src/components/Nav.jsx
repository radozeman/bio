"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";
const NavItem = ({ children, setPosition }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!!ref?.current) {
          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            width,
            opacity: 1,
            left: ref.current.offsetLeft,
          });
        }
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs font-bold uppercase text-white  md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Nav = ({
  locale,
  setLocale,
  onWorkClick,
  onEducationClick,
  onAboutClick,
}) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <BackgroundGradient className="p-0.5 rounded-3xl">
      <ul
        onMouseLeave={() => {
          setPosition((prev) => {
            return { ...prev, opacity: 0 };
          });
        }}
        className="relative flex p-1 mx-auto border-2 rounded-full w-fit bg-background"
      >
        <NavItem setPosition={setPosition}>
          <button type="button" onClick={() => onWorkClick()}>
            <span className="hidden md:block">
              {locale ? "Work experience" : "pracovné skúsenosti"}
            </span>
            <span className="md:hidden"> {locale ? "Work" : "Práca"}</span>
          </button>
        </NavItem>
        <NavItem setPosition={setPosition}>
          <button type="button" onClick={() => onEducationClick()}>
            {locale ? "Education" : "Vzdelanie"}
          </button>
        </NavItem>
        <NavItem setPosition={setPosition}>
          <button type="button" onClick={() => onAboutClick()}>
            {locale ? "About me" : "O mne"}
          </button>
        </NavItem>
        <NavItem setPosition={setPosition}>
          <button type="button" onClick={() => setLocale((prev) => !prev)}>
            {locale ? "SK" : "EN"}
          </button>
        </NavItem>
        <Cursor position={position} />
      </ul>
    </BackgroundGradient>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 rounded-full bg-gradient-to-b from-neutral-950 to-neutral-700 h-7 md:h-12"
    />
  );
};

export default Nav;
