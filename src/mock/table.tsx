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

export interface User {
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
    Category: "Hot Dishes",
    Price: "$12.0",
    Remark: "-",
  },
  {
    Id: "2",
    Name: "Bob",
    Category: "Cold Dishes",
    Price: "$12.0",
    Remark: "-",
  },
  {
    Id: "3",
    Name: "Bob-1",
    Category: "Staple Foods",
    Price: "$12.0",
    Remark: "-",
  },
  {
    Id: "4",
    Name: "Bob-2",
    Category: "Drinks",
    Price: "$17.0",
    Remark: "-",
  },
  {
    Id: "5",
    Name: "Bob-4",
    Category: "Soups",
    Price: "$15.0",
    Remark: "-",
  },
  {
    Id: "6",
    Name: "Bob-5",
    Category: "Soups",
    Price: "$15.0",
    Remark: "-",
  },
  {
    Id: "7",
    Name: "Bob-6",
    Category: "Soups",
    Price: "$15.0",
    Remark: "-",
  },
  {
    Id: "8",
    Name: "Bob-7",
    Category: "Soups",
    Price: "$15.0",
    Remark: "-",
  },
  {
    Id: "9",
    Name: "Bob-8",
    Category: "Soups",
    Price: "$15.0",
    Remark: "-",
  },
];

export { columns, data };
