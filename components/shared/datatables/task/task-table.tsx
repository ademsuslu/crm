"use client"

import { IoIosTimer  } from "react-icons/io";
import { FaEdit, FaEye } from "react-icons/fa";
import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { Task } from "@/types/task/model"
import { sanitizeInput } from "@/utils/regex";
import { cn, formatToTurkeyTime } from "@/lib/utils";



export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-md flex justify-start items-start px-0 font-extrabold" 
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Priority
        <ArrowUpDown  className="w-4 h-4"/>
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("priority")}</div>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const description = row.getValue("description");
      return <div>{typeof description === "string" ? description.slice(0, 12)+'..' : ""}</div>;
    },
  },
  
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: ({ row }) => <div>{formatToTurkeyTime(row.getValue("dueDate"))}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const value = row.getValue("status");
      let color;
      if (value === "pending") {
        color = "text-yellow-500";
      } else if (value === "in_progress") {
        color = "text-orange-500";
      } else if (value === "completed") {
        color = "text-green-500";
      }
      return <div className={`${color} capitalize`}>{ String(value) === "in_progress"  ? "In Progress" :String(value)  }</div>;
    },
  },
  
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem >
            <Link className="inline-flex items-center" href={`/bussines/task/${row.original._id}`}>
              <FaEye className="w-4 h-4 mr-2" /> Show  Details
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem >
            <Link className="inline-flex items-center" href={`/bussines/task/edit/${row.original._id}`}>
              <FaEdit className="w-4 h-4 mr-2" /> Edit
            </Link>
          </DropdownMenuItem>
        
        </DropdownMenuContent>
      </DropdownMenu>
    }
  },
];


type TaskTableProps = {
  data: Task[];
};

const TaskTable: React.FC<TaskTableProps> = ({ data }) => {

  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    const handleSearch = async () => {
      let cleanQuery = sanitizeInput(query)

      console.log(cleanQuery)
      try {
        const response = await fetch(`https://crm-backend-production-e80f.up.railway.app/api/customers/search?ad=${cleanQuery}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Arama işlemi başarısız oldu.');
        }
        const data = await response.json();
        setResults(data);
      } catch (error) {
      }
    };

    if (query) {
      handleSearch();
    }
  }, [query]);


  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: results.length > 0 ? results : data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })
  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full py-4">
        <Input
          placeholder="Filter Names..."
          // value={(table.getColumn("ad")?.getFilterValue() as string) ?? ""}
          // onChange={(event) =>
          //   table.getColumn("ad")?.setFilterValue(event.target.value)
          // }
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <div className="flex space-x-2">
          <Button asChild className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 ml-auto rounded-full" data-state="closed">
          <Link href="/bussines/create-task">
              <Plus className="w-4 h-4 text-white"/>
          </Link>
          </Button>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value: any) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-b border-neutral-100 ">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="whitespace-nowrap text-md font-extrabold" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="whitespace-nowrap	" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
export default TaskTable