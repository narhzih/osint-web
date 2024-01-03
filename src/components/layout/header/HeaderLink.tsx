import classnames from "classnames";
import { useScroll } from "../../../hooks/useScroll";

interface HeaderLinkProps {
  label: string;
  linkTo: string;
  className?: string;
}

export const HeaderLink = (props: HeaderLinkProps) => {
  const scrolled = useScroll(50);
  return (
    <div
      className={classnames(
        "cursor-pointer transition-colors",
        `${scrolled ? "text-black" : "text-white"}`,
        props.className,
      )}
    >
      <p>{props.label}</p>
    </div>
  );
};
