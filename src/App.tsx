import { useState } from "react";

import Table from "./components/table";
import Search from "./components/search";
import FilterBtn from "./components/filter-btn";
import Pagination from "./components/pagination";
import { DropdownItemClickType } from "./components/dropdown/DropdownMenu";
import Dropdown from "./components/dropdown";
import { FILTER_OPTIONS } from "./constants/filter";
import { DropdownOptionItem } from "./components/dropdown/Dropdown";

import { usePaginationAndFiltering } from "./hooks/usePaginationAndFiltering";
import { columns } from "./mock/table";

import "./App.scss";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const onSearch = (value: string) => {
    setSearchValue(value);
  };

  const [filterOption, setFilterOption] = useState<DropdownOptionItem>(
    FILTER_OPTIONS[0]
  );

  const { paginatedData, totalPages, currentPage, setCurrentPage } =
    usePaginationAndFiltering(filterOption.value, searchValue, {
      pageNum: 1,
      pageSize: 5,
    });

  const onFilterItemClick: DropdownItemClickType = (item) => {
    setFilterOption(item);
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
              <FilterBtn option={filterOption}></FilterBtn>
            </Dropdown>
          }
        ></Search>
        <Table
          rowClassName="rowClassName"
          data={paginatedData}
          columns={columns}
        ></Table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
