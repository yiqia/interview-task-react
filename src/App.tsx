import { ReactNode, useMemo, useState } from "react";

import Table from "./components/table";
import Search from "./components/search";
import FilterBtn from "./components/filter-btn";
import Pagination from "./components/pagination";
import { DropdownItemClickType } from "./components/dropdown/DropdownMenu";
import Dropdown from "./components/dropdown";
import { FILTER_OPTIONS } from "./constants/filter";

import { columns, data } from "./mock/table";

import "./App.scss";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const onSearch = (value: string) => {
    setSearchValue(value);
  };

  const [filterValue, setFilterValue] = useState<ReactNode | string>(
    FILTER_OPTIONS[0].content
  );

  useMemo(() => {
    console.log(searchValue);
  }, [searchValue]);

  const onFilterItemClick: DropdownItemClickType = (item) => {
    setFilterValue(item.content);
  };

  return (
    <div className="app">
      <div className="table-container">
        <Search
          className="search"
          onSearch={onSearch}
          placeholder="Search"
          prefixIcon={
            <img className="search-icon" src="/public/icons/search.svg"></img>
          }
          suffixContent={
            <Dropdown
              align="right"
              options={FILTER_OPTIONS}
              onClick={onFilterItemClick}
            >
              <FilterBtn value={filterValue}></FilterBtn>
            </Dropdown>
          }
        ></Search>
        <Table
          rowClassName="rowClassName"
          data={data}
          columns={columns}
        ></Table>
        <Pagination></Pagination>
      </div>
    </div>
  );
}

export default App;
