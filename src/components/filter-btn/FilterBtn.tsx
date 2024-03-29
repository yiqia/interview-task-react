import { FC, useState } from "react";
import classNames from "classnames";

import "./FilterBtn.scss";
import { DropdownOptionItem } from "../dropdown/Dropdown";

export interface FilterBtnProps {
  option: DropdownOptionItem;
  onIsActive?: (isActive: boolean) => void;
}

const FilterBtn: FC<FilterBtnProps> = ({ option, onIsActive }) => {
  const [isActive, setIsActive] = useState(false);

  const onFilterBtnClick = () => {
    onIsActive?.(!isActive);
    setIsActive(!isActive);
  };

  return (
    <div className="filter-btn" onClick={onFilterBtnClick}>
      <div className="filter-btn__text">{option.content}</div>
      <img
        className={classNames("filter-btn__icon", {
          "filter-btn__icon--up": !isActive,
        })}
        src="/public/icons/drop.svg"
      ></img>
    </div>
  );
};

export default FilterBtn;
