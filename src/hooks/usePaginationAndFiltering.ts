// src/usePaginationAndFiltering.ts
import { useState, useMemo } from "react";
import { data } from "@/mock/table";

interface UsePaginationAndFilteringOptions {
  pageNum: number;
  pageSize: number;
}

export function usePaginationAndFiltering(
  filterCategory: string | number,
  searchValue: string,
  { pageNum, pageSize }: UsePaginationAndFilteringOptions
) {
  const [currentPage, setCurrentPage] = useState(pageNum);

  const filteredData = useMemo(() => {
    let result = data;

    if (filterCategory) {
      result = result.filter((item) => item.Category === filterCategory);
    }

    if (searchValue) {
      result = result.filter((item) =>
        item.Name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    return result;
  }, [filterCategory, searchValue]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, pageSize]);

  return {
    paginatedData,
    totalPages,
    currentPage,
    setCurrentPage,
  };
}
