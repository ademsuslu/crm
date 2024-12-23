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
import { Customer } from "@/types/customer/model"
import { sanitizeInput } from "@/utils/regex";



export const columns: ColumnDef<Customer>[] = [
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
    accessorKey: "ad",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("ad")}</div>
    ),
  },
  {
    accessorKey: "soyad",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-md flex justify-start items-start px-0 font-extrabold" 
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Surname
        <ArrowUpDown  className="w-4 h-4"/>
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("soyad")}</div>,
  },
  {
    accessorKey: "cinsiyet",
    header: "Gender",
    cell: ({ row }) => <div>{row.getValue("cinsiyet")}</div>,
  },
  {
    header: "Customer Segmentation",
    cell: ({ row }) => <div className="whitespace-nowrap	">{row.original.segmentasyon?.musteri_segmenti || "Bilgi yok"}</div>,
  },
  {
    header: "Phone",
    cell: ({ row }) => <div>{row.original.iletisim_bilgileri?.telefon || "Bilgi yok"}</div>,
  },
  {
    header: "E-mail",
    cell: ({ row }) => <div>{row.original.iletisim_bilgileri?.email || "Bilgi yok"}</div>,
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
            <Link className="inline-flex items-center" href={`/customer/${row.original._id}`}>
              <FaEye className="w-4 h-4 mr-2" /> Show  Details
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem >
            <Link className="inline-flex items-center" href={`/customer/edit/${row.original._id}`}>
              <FaEdit className="w-4 h-4 mr-2" /> Edit
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem >
            <Link className="inline-flex items-center" href={`/customer/${row.original._id}/create`}>
              <IoIosTimer  className="w-5 h-5 mr-2" /> Add Reminder
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    }
  },
];


type DataTableDemoProps = {
  data: Customer[];
};

const DataTableDemo: React.FC<DataTableDemoProps> = ({ data }) => {

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
          <Link href="/customer/create">
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
export default DataTableDemo