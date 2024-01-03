import classnames from "classnames";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useScroll } from "../../../hooks/useScroll";

interface HeaderLinkProps {
  label: string;
  links?: { label: string; linkTo: string }[];
  className?: string;
}

export const HeaderDropDownLink = (props: HeaderLinkProps) => {
  const scrolled = useScroll(50);
  return (
    <div
      className={classnames(
        "transition-colors flex items-center justify-center cursor-pointer",
        `${scrolled ? "text-black" : "text-white"}`,
        props.className,
      )}
    >
      <p className="">{props.label}</p>
      <ChevronDownIcon width={20} height={20}></ChevronDownIcon>
    </div>
  );
};
