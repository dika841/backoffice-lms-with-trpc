import { ColumnDef } from "@tanstack/react-table";
export type DataTableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
  };
  onFilterChange?: (filter: string) => void;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  filterPlaceholder?: string;
  noResultsText?: string;
};
