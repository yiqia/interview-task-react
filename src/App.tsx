import { useMemo, useState } from "react";

import Table from "./components/table";
import Search from "./components/search";
import Pagination from "./components/pagination";
import { columns, data } from "./mock/table";

import "./App.scss";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const onSearch = (value: string) => {
    setSearchValue(value);
  };

  useMemo(() => {
    console.log(searchValue);
  }, [searchValue]);

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
          suffixContent={<button className="search-btn">搜索</button>}
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
