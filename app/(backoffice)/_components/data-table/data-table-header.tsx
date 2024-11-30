import React from "react";
import { TableHead } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  Filter,
  X,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Column } from "./types";

interface DataTableHeaderProps<T> {
  column: Column<T>;
  sortColumn: keyof T | null;
  sortDirection: "asc" | "desc";
  handleSort: (column: keyof T) => void;
  filters: Record<keyof T, string>;
  handleFilter: (column: keyof T, value: string) => void;
}

export function DataTableHeader<T>({
  column,
  sortColumn,
  sortDirection,
  handleSort,
  filters,
  handleFilter,
}: DataTableHeaderProps<T>) {
  const SortIcon = () => {
    if (column.accessor !== sortColumn)
      return <ChevronsUpDown className="ml-2 h-4 w-4" />;
    return sortDirection === "asc" ? (
      <ChevronUp className="ml-2 h-4 w-4" />
    ) : (
      <ChevronDown className="ml-2 h-4 w-4" />
    );
  };

  return (
    <TableHead key={column.accessor as string}>
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => column.sortable && handleSort(column.accessor)}
          className="font-bold"
        >
          {column.header}
          {column.sortable && <SortIcon />}
        </Button>
        {column.filterable && (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <Filter className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h4 className="font-medium leading-none">
                  Filter {column.header}
                </h4>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder={`Filter ${column.header}...`}
                    value={filters[column.accessor] || ""}
                    onChange={(e) =>
                      handleFilter(column.accessor, e.target.value)
                    }
                  />
                  {filters[column.accessor] && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleFilter(column.accessor, "")}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </TableHead>
  );
}
