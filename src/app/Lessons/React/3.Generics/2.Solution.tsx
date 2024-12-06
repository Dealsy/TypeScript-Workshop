import { ReactNode } from "react";

interface TableProps<T> {
  rows: T[];
  renderRow: (row: T) => ReactNode;
}

export const Table = <T,>(props: TableProps<T>) => {
  return (
    <table>
      <tbody>
        {props.rows.map((row, index) => (
          <tr key={index}>{props.renderRow(row)}</tr>
        ))}
      </tbody>
    </table>
  );
};

interface User {
  id: number;
  name: string;
  age: number;
}

<>
  <Table<User>
    // @ts-expect-error rows should be User[]
    rows={[1, 2, 3]}
    renderRow={(row) => {
      return <td>{row.name}</td>;
    }}
  />
  <Table<User>
    rows={[
      {
        id: 1,
        name: "John",
        age: 30,
      },
      {
        // @ts-expect-error id should be number
        id: "2",
        name: "Jane",
        age: 30,
      },
    ]}
    renderRow={(row) => {
      return <td>{row.name}</td>;
    }}
  ></Table>
</>;
