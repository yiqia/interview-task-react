import React, { FC, ReactNode, useState } from "react";
import classNames from "classnames";

import "./Search.scss";

export interface SearchProps {
  className?: string;
  placeholder?: string;
  prefixIcon?: ReactNode;
  suffixContent?: ReactNode;
  onSearch: (value: string) => void;
}

const Search: FC<SearchProps> = ({
  className,
  placeholder = "请输入搜索内容",
  prefixIcon,
  suffixContent,
  onSearch,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchValue);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className={classNames("search-box", className)}>
      {prefixIcon}
      <input
        className="search-input"
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
      />
      {suffixContent && (
        <div className="search-suffix-content" onClick={handleSearchClick}>
          {suffixContent}
        </div>
      )}
    </div>
  );
};

export default Search;
