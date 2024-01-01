export interface ColumnProps<T> {
  key: string; // 列的key
  title?: string; // 表头标题
  width?: number; // 表格宽度
  align?: "left" | "center" | "right"; // 对齐方式
  cell?: (data: T, column: ColumnProps<T>, index: number) => JSX.Element; // 自定义单元格
}

export interface TableProps<T> {
  data?: Array<T>;
  columns: ColumnProps<T>[];
  rowClassName?: rowClassNameType;
}

export type rowClassNameFnType = (data: any, index: number) => string;
export type rowClassNameType = string | rowClassNameFnType;