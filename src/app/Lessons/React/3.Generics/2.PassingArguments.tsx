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

/**
 * We are currently passing any type as an argument to TableProps,
 * But what if we wanted to pass a specific argument to TableProps?
 *
 * Let's say a user object:
 *
 * 1. How do we rearrange this code so that we can pass a specific
 * argument to TableProps?
 *
 * Hint: You'll need to add <User> to the Tables below somehow.
 *
 */

interface User {
  id: number;
  name: string;
  age: number;
}

<>
  <Table
    // @ts-expect-error rows should be User[]
    rows={[1, 2, 3]}
    renderRow={(row) => {
      return <td>{row.name}</td>;
    }}
  />
  <Table
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
