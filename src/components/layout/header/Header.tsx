import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { HeaderLink } from "./HeaderLink";
import { HeaderDropDownLink } from "./HeaderDropDownLink";
import { Container } from "../../shared/Container";
import { useScroll } from "../../../hooks/useScroll";
import { Bars3Icon } from "@heroicons/react/20/solid";

const navLinks = [
  { label: "Training", type: "single", linkTo: "" },
  { label: "Enterprise", type: "single", linkTo: "" },
  {
    label: "Contact",
    type: "dropdown",
    children: [{ label: "Link A", linkTo: "/" }],
  },
  { label: "Buy Credits", type: "single" },
  {
    label: "Full Access",
    type: "dropdown",
    children: [{ label: "Link A", linkTo: "/" }],
  },
];

export const Header = () => {
  const scrolled = useScroll(50);

  return (
    <Container
      className={`transition-colors h-[10vh] flex justify-between items-center fixed top-0 z-20 w-full left-0 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex justify-center items-center">
        <img
          src="/icons/osint_logo.svg"
          alt="Osint Logo"
          className={`mr-4 ${scrolled ? "bg-black" : ""} `}
        />
        <p
          className={`transition-colors ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {" "}
          OSINT Industries
        </p>
      </div>

      {/* Harm burger trigger */}
      <div
        className={`lg:hidden flex flex-row justify-center ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        <Bars3Icon width={27} height={27}></Bars3Icon>
      </div>

      <div className="hidden lg:flex-row lg:justify-center lg:items-center lg:flex">
        {navLinks.map((navLink, index) => {
          return (
            <Fragment key={index}>
              {navLink.type === "single" && (
                <HeaderLink
                  label={navLink.label}
                  linkTo={navLink.linkTo!}
                  className="not-last:mr-5"
                ></HeaderLink>
              )}
              {navLink.type === "dropdown" && (
                <HeaderDropDownLink
                  label={navLink.label}
                  links={navLink.children!}
                  className="not-last:mr-5"
                ></HeaderDropDownLink>
              )}
            </Fragment>
          );
        })}
      </div>
      <div
        className={`hidden transition-colors lg:flex lg:justify-center lg:items-center w-auto ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        <p className="mr-2">Get Started</p>
        <ArrowRightIcon width={20} height={20}></ArrowRightIcon>
      </div>
    </Container>
  );
};
