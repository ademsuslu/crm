"use client"

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
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

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
    header: "Adı",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("ad")}</div>
    ),
  },
  {
    accessorKey: "soyad",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Soyadı
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("soyad")}</div>,
  },
  {
    accessorKey: "cinsiyet",
    header: "Cinsiyet",
    cell: ({ row }) => <div>{row.getValue("cinsiyet")}</div>,
  },
  // {
  //   accessorKey: "dogum_tarihi",
  //   header: "Doğum Tarihi",
  //   cell: ({ row }) => <div>{new Date(row.getValue("dogum_tarihi")).toLocaleTimeString()}</div>,
  // },
  {
    header: "Müşteri Segmenti",
    cell: ({ row }) => <div>{row.original.segmentasyon?.musteri_segmenti || "Bilgi yok"}</div>,
  },
  {
    header: "Telefon",
    cell: ({ row }) => <div>{row.original.iletisim_bilgileri?.telefon || "Bilgi yok"}</div>,
  },
  {
    header: "E-posta",
    cell: ({ row }) => <div>{row.original.iletisim_bilgileri?.email || "Bilgi yok"}</div>,
  },
  
  // {
  //   accessorKey: "satin_alma_gecmisi",
  //   header: "Satın Alma Geçmişi",
  //   cell: ({ row }) => (
  //     <ul>
  //       {row.original.satin_alma_gecmisi.map((siparis) => (
  //         <li key={siparis.siparis_id}>
  //           {siparis.urun} - {siparis.toplam_fiyat} TL ({new Date(siparis.tarih).toLocaleDateString()})
  //         </li>
  //       ))}
  //     </ul>
  //   ),
  // },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      
    return  <DropdownMenu>
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
             <Link href={`/customer/${row.original._id}`}>
               Müşteriyi Görüntüle
          </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Ödeme Detaylarını Görüntüle</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      }
  },
];


type DataTableDemoProps = {
  data: Customer[];
};

const DataTableDemo: React.FC<DataTableDemoProps> = ({ data }) => {

   const [sorting, setSorting] = React.useState<SortingState>([])
   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
     []
   )
   const [columnVisibility, setColumnVisibility] =
     React.useState<VisibilityState>({})
   const [rowSelection, setRowSelection] = React.useState({})

   const table = useReactTable({
     data,
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
       <div className="flex items-center py-4">
         <Input
           placeholder="Filter emails..."
           value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
           onChange={(event) =>
             table.getColumn("email")?.setFilterValue(event.target.value)
           }
           className="max-w-sm"
         />
         <DropdownMenu>
           <DropdownMenuTrigger asChild>
             <Button variant="outline" className="ml-auto">
               Columns <ChevronDown />
             </Button>
           </DropdownMenuTrigger>
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
                     onCheckedChange={(value:any) =>
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
               <TableRow key={headerGroup.id}>
                 {headerGroup.headers.map((header) => {
                   return (
                     <TableHead key={header.id}>
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
                     <TableCell key={cell.id}>
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