/**
 * Currently, TableProps accepts `any` for its `rows` prop
 *
 * This isn't ideal, and it's not very type-safe. Wouldn't it
 * be nice if we could somehow have TypeScript infer the types
 * for us?
 *
 * 1. How do we rearrange this code so that TypeScript infers
 * the type of `rows` for us?
 *
 * Hint: you'll need to use a generic type.
 *
 * Resource:
 *
 * https://www.typescriptlang.org/docs/handbook/2/generics.html
 *
 */

interface TableProps<T> {
  rows: T[];
  renderRow: (row: T) => React.ReactNode;
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

const data = [
  {
    id: 1,
    name: "John",
  },
];

export const Parent = () => {
  return (
    <div>
      <Table rows={data} renderRow={(row) => <td>{row.name}</td>} />
    </div>
  );
};
