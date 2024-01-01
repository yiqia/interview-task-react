import { ColumnProps } from "../components/table";

const columns: ColumnProps<User>[] = [
  { key: "Name", title: "Name", width: 100 },
  {
    key: "Category",
    title: "Category",
    width: 150,
    cell: (data) => (
      <span style={{ color: " rgba(0, 0, 0, 0.50)" }}>{data.Category}</span>
    ),
  },
  { key: "Price", title: "Category", width: 50 },
  { key: "Remark", title: "Category", width: 50 },
];

interface User {
  Id: string;
  Name: string;
  Category: string;
  Price: string;
  Remark?: string;
}

const data: User[] = [
  {
    Id: "1",
    Name: "Alice",
    Category: "Staple Foods-1",
    Price: "$12.0",
    Remark: "-",
  },
  {
    Id: "2",
    Name: "Bob",
    Category: "Staple Foods-2",
    Price: "$12.0",
    Remark: "-",
  },
  {
    Id: "3",
    Name: "Bob-1",
    Category: "Staple Foods-3",
    Price: "$12.0",
    Remark: "-",
  },
  {
    Id: "4",
    Name: "Bob-2",
    Category: "Staple Foods-4",
    Price: "$17.0",
    Remark: "-",
  },
  {
    Id: "5",
    Name: "Bob-4",
    Category: "Staple Foods-5",
    Price: "$15.0",
    Remark: "-",
  },
];

export { columns, data };
