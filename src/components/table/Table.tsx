import classNames from "classnames";
import { isFunction } from "../utils";
import { ColumnProps, TableProps, rowClassNameFnType } from "./interface";
import { useCallback, useMemo } from "react";

import "./table.scss";

const Table = <T extends { [key: string]: any }>({
  data = [],
  columns,
  rowClassName,
}: TableProps<T>) => {

  const getRowClassName = useCallback(
    (data: T, index: number) => {
      return isFunction(rowClassName)
        ? (rowClassName as rowClassNameFnType)?.(data, index)
        : rowClassName || "";
    },
    [rowClassName]
  );

  const getColumnStyle = useMemo(() => {
    return (column: ColumnProps<T>) => ({
      width: `${column.width || 100}px`,
      textAlign: column.align || "left",
    });
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              className="table-th"
              style={getColumnStyle(column)}
              key={column.key}
            >
              {column.title || column.key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            className={classNames("table-tr", getRowClassName(item, index))}
            key={index}
          >
            {columns.map((column) => (
              <td className="table-tr-td" key={column.key}>
                {isFunction(column.cell)
                  ? column.cell?.(item, column, index)
                  : item[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
