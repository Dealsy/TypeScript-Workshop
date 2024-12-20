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
    email: "john@example.com",
  },
];

export default function Parent() {
  return (
    <div>
      <Table
        rows={data}
        renderRow={(row) => (
          <>
            <td>{row.name}</td>
            <td>{row.email}</td>
          </>
        )}
      />
    </div>
  );
}
