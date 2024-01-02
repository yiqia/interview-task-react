import React, { useState } from "react";
import Popup from "../popup";
import DropdownMenu, { DropdownItemClickType } from "./DropdownMenu";
import { Align, Direction } from "../popup/Popup";

export interface DropdownOptionItem {
  content: string | React.ReactNode;
  value: string | number;
}

export interface DropdownProps {
  options: DropdownOptionItem[];
  direction?: Direction;
  align?: Align;
  children: React.ReactNode;
  onClick?: DropdownItemClickType;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  align,
  direction,
  children,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onDropdownItemClick: DropdownItemClickType = (item, index) => {
    setIsOpen(false);
    onClick?.(item, index);
  };

  return (
    <Popup
      visible={isOpen}
      align={align}
      direction={direction}
      content={
        <DropdownMenu
          options={options}
          onDropdownItemClick={onDropdownItemClick}
        />
      }
    >
      <div className="dropdown" onClick={toggleDropdown}>
        {children}
      </div>
    </Popup>
  );
};

export default Dropdown;
