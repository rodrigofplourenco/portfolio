import Link from "next/link";
import { FunctionComponent } from "react";
import { Category } from "../types";

const NavItemProjects: FunctionComponent<{
  value: Category | 'all',
  handlerFilterCategory: Function,
  active: string
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-purple";

  if (active === value) className += " text-purple";

  return (
    <li onClick={() => handlerFilterCategory(value)} className={className}>
      {value}
    </li>
  )
};

export default NavItemProjects;
