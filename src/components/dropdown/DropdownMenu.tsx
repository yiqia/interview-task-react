import React from "react";
import { DropdownOptionItem } from "./Dropdown";

import "./DropdownMenu.scss";

export type DropdownItemClickType = (
  item: DropdownOptionItem,
  index: number
) => void;

interface DropdownMenuProps {
  options: DropdownOptionItem[];
  onDropdownItemClick?: DropdownItemClickType;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options = [],
  onDropdownItemClick,
}) => {
  return (
    <ul className="dropdown-menu">
      {options.map((item, index) => (
        <li
          className="dropdown-item"
          key={item.value}
          onClick={() => onDropdownItemClick?.(item, index)}
        >
          {item.content}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
