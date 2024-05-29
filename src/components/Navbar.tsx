import { PAGES } from "src/utils/constants";
import { useRef, useState, type ReactNode } from "react";
import { IconMenu } from "./Icons";

const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/about-us",
    name: "Los Pichys",
  },
  {
    path: "/#section-ticket",
    name: "tickets",
  },
  {
    path: "/serrano",
    name: "Serrano",
  },
  { path: "#", name: "La tienda de los Pichy Boys" },
];

export default function Navbar({
  active,
  children,
}: {
  active: string;
  children?: ReactNode;
}) {
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const handleToggle = () => {
    toggleRef.current?.classList.toggle("show_menu");
  };

  return (
    <>
      <nav className="fixed top-0 w-full h-auto hidden lg:flex justify-around items-center z-50">
        <a href={PAGES.HOME}>
          <img
            src="/images/pichy-boys-banner.webp"
            alt="pichy boys banner"
            className="h-[64px] w-auto"
            height={64}
            width={200}
          />
        </a>

        <section>
          <ul className="flex gap-6 text-yellow-500 text-lg font-light transition-colors">
            {links.map((link) => {
              return (
                <li
                  key={link.path}
                  className="group hover:text-violet-500 relative overflow-hidden flex h-[50px] items-center capitalize"
                >
                  <a
                    href={link.path}
                    className={`${active === link.path && "text-violet-500"}`}
                  >
                    {link.name}
                  </a>
                  <div
                    className={`w-full h-[1px] absolute bg-violet-500 transition-all ${
                      active !== link.path
                        ? "-bottom-7 group-hover:bottom-3"
                        : "bottom-3"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </section>

        {children}
      </nav>

      <nav className="fixed w-full flex justify-between flex-row lg:hidden z-50 px-5">
        <a href="/" className="w-auto">
          <img
            src="/images/pichy-boys-banner.webp"
            alt="pichy boys banner"
            className="h-[64px] w-auto"
            height={64}
            width={200}
          />
        </a>

        <button onClick={() => handleToggle()}>
          <IconMenu width={"3em"} className="text-yellow-500" />
        </button>
      </nav>

      <section
        ref={toggleRef}
        className="fixed flex flex-col justify-stretch h-screen w-[90%] bg-gradient-to-br to-violet-500 from-violet-900 z-50 pl-10 pt-10 gap-10 transition-transform -translate-x-[200%]"
      >
        <a href="/">
          <img
            src="/images/pichy-boys-banner.webp"
            alt="pichy boys banner"
            className="h-[64px] w-auto"
            height={64}
            width={200}
          />
        </a>

        <ul className="flex flex-col gap-6 text-lg font-light text-yellow-500">
          {links.map((link) => {
            return (
              <li key={link.path} className="group capitalize">
                <a
                  href={link.path}
                  className={`${active === link.path && "text-violet-500"}`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {children}
      </section>
    </>
  );
}
