import { TableBody, TableCell, TableRow } from '@/components/ui/table';

interface ITableLoaderProps {
  columns: number;
  rows: number;
}

const TableLoader = ({ rows, columns }: ITableLoaderProps) => {
  return (
    <TableBody className="w-full">
      {Array.from({ length: rows }).map((row, rowIndex) => (
        <TableRow key={`${row}-${rowIndex}`} className="w-full hover:bg-gray-50">
          {Array.from({ length: columns }).map((col, colIndex) => (
            <TableCell key={`${col}-${colIndex}`} className="">
              <div className="h-4 animate-pulse rounded bg-neutral-200"></div>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableLoader;
