import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { buildLimitArray } from '@/utils';
import { DEFAULT_LIMIT } from '@/constants/api';
import { Table } from '@tanstack/react-table';

interface ServerPaginationProps<TData> {
  pagination: TPaginatedRes;
  limit: number;
  setLimit: (arg: number) => void;
  setOffset: (arg: number) => void;
  offset: number;
  table: Table<TData>;
}

export function ServerPagination<TData>({
  pagination,
  limit,
  setLimit,
  setOffset,
  offset,
  table
}: ServerPaginationProps<TData>) {
  const { current_page, total_pages } = pagination;

  const goToPage = (page: number) => {
    const newOffset = (page - 1) * limit;
    setOffset(newOffset);
  };

  const handleLimitChange = (newLimit: number) => {
    const currentPageNum = Math.floor(offset / limit) + 1;
    const maxPossiblePage = Math.ceil(pagination.total / newLimit);
    const targetPage = Math.min(currentPageNum, maxPossiblePage);
    const newOffset = (targetPage - 1) * newLimit;

    setLimit(newLimit);
    setOffset(newOffset);
    table.setPageSize(newLimit);
  };

  const goToPreviousPage = () => {
    if (current_page > 1) {
      goToPage(current_page - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(pagination.total / limit);
    if (current_page < totalPages) {
      goToPage(current_page + 1);
    }
  };

  // Calculate pagination metadata
  const totalPages = Math.ceil(pagination.total / limit) || 1;
  const canGoPrevious = current_page > 1;
  const canGoNext = current_page < totalPages && totalPages > 0;

  return (
    <div
      className="flex items-center justify-between overflow-clip px-2"
      style={{ overflowClipMargin: 1 }}
    >
      <div className="text-muted-foreground hidden flex-1 text-sm sm:block">
        {pagination.total > 0 && (
          <>
            Showing {offset + 1} to {Math.min(offset + limit, pagination.total)} of{' '}
            {pagination.total} entries
          </>
        )}
      </div>
      <div className="flex items-center sm:space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="hidden text-sm font-medium sm:block">Rows per page</p>
          <Select
            value={`${limit}`}
            onValueChange={(value) => {
              handleLimitChange(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={limit} />
            </SelectTrigger>
            <SelectContent side="top">
              {buildLimitArray(30, DEFAULT_LIMIT).map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-fit items-center justify-center text-sm font-medium">
          Page {current_page} of {total_pages}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={goToPreviousPage}
            disabled={!canGoPrevious}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={goToNextPage}
            disabled={!canGoNext}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
