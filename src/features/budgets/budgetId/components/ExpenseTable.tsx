import { useState } from 'react';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { columns } from './columns';
import { useStore } from '@/store';
import { ServerPagination } from '@/components/ServerPagination';
import { observer } from 'mobx-react-lite';
import TableLoader from '@/components/Loaders/TableLoader';

interface DataTableProps {
  isLoading: boolean;
  data: IFinMedServerPaginatedRes<TExpensesItem>['data'];
}

function ExpenseTable({ isLoading, data }: DataTableProps) {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const {
    AppConfigStore: { appQueryLimit },
    ExpenseStore: { expenseQuery, setLimit, setOffset }
  } = useStore();

  const pagination: TPaginatedRes = {
    current_page: data.pagination.current_page,
    total: data.pagination.total,
    total_pages: data.pagination.total_pages,
    limit: data.pagination.limit
  };

  const table = useReactTable({
    data: data.items,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    initialState: {
      pagination: {
        pageSize: appQueryLimit
      }
    }
  });

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          {isLoading ? (
            <TableLoader rows={6} columns={10} />
          ) : (
            data && (
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-96 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            )
          )}
        </Table>
      </div>
      <ServerPagination
        pagination={pagination}
        setLimit={setLimit}
        setOffset={setOffset}
        limit={expenseQuery.limit}
        offset={expenseQuery.offset}
      />
    </>
  );
}

export default observer(ExpenseTable);
