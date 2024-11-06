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

 const data: Customer[] = [
 
  {
    "iletisim_bilgileri": {
      "adres": {
        "sokak": "Gazi Bulvarı No:45",
        "sehir": "İzmir",
        "posta_kodu": "35100",
        "ulke": "Türkiye"
      },
      "sosyal_medya": {
        "twitter": "@denizkara",
        "linkedin": "linkedin.com/in/denizkara"
      },
      "telefon": "+90 533 222 3333",
      "email": "deniz.kara@example.com"
    },
    "sirket_bilgileri": {
      "sirket_adresi": {
        "sokak": "Danışmanlık Sok. No:12",
        "sehir": "İzmir",
        "posta_kodu": "35100",
        "ulke": "Türkiye"
      },
      "sirket_adi": "XYZ Danışmanlık A.Ş.",
      "gorev": "Pazarlama Müdürü"
    },
    "segmentasyon": {
      "musteri_segmenti": "VIP",
      "ilgi_alanlari": [
        "Pazarlama",
        "Teknoloji",
        "Yazılım"
      ],
      "sadakat_durumu": "Sadık Müşteri"
    },
    "iliskiler": {
      "asama": "Mevcut Müşteri",
      "notlar": "Deniz Hanım düzenli olarak alım yapmaktadır ve yeni teknolojilere ilgi göstermektedir."
    },
    "pazarlama_izinleri": {
      "email_izni": true,
      "sms_izni": true,
      "tercih_edilen_kanal": "Email"
    },
    "_id": "672b7843a2ae4a1a2fd2e725",
    "ad": "Deniz",
    "soyad": "Kara",
    "cinsiyet": "Kadın",
    "dogum_tarihi": "1988-07-23T00:00:00.000Z",
    "satin_alma_gecmisi": [
      {
        "siparis_id": "101",
        "urun": "Laptop",
        "miktar": 1,
        "toplam_fiyat": 14000,
        "tarih": "2023-02-15T00:00:00.000Z",
        "_id": "672b7843a2ae4a1a2fd2e726"
      },
      {
        "siparis_id": "102",
        "urun": "Klavye",
        "miktar": 2,
        "toplam_fiyat": 600,
        "tarih": "2023-03-20T00:00:00.000Z",
        "_id": "672b7843a2ae4a1a2fd2e727"
      }
    ],
    "createdAt": "2024-11-06T14:08:03.635Z",
    "updatedAt": "2024-11-06T14:08:03.635Z",
    "__v": 0
  },
  {
    "iletisim_bilgileri": {
      "adres": {
        "sokak": "Gazi Bulvarı No:45",
        "sehir": "İzmir",
        "posta_kodu": "35100",
        "ulke": "Türkiye"
      },
      "sosyal_medya": {
        "twitter": "@denizkara",
        "linkedin": "linkedin.com/in/denizkara"
      },
      "telefon": "+90 533 222 3333",
      "email": "adem.kara@example.com"
    },
    "sirket_bilgileri": {
      "sirket_adresi": {
        "sokak": "Danışmanlık Sok. No:12",
        "sehir": "İzmir",
        "posta_kodu": "35100",
        "ulke": "Türkiye"
      },
      "sirket_adi": "XYZ Danışmanlık A.Ş.",
      "gorev": "Pazarlama Müdürü"
    },
    "segmentasyon": {
      "musteri_segmenti": "VIP",
      "ilgi_alanlari": [
        "Pazarlama",
        "Teknoloji",
        "Yazılım"
      ],
      "sadakat_durumu": "Sadık Müşteri"
    },
    "iliskiler": {
      "asama": "Mevcut Müşteri",
      "notlar": "Deniz Hanım düzenli olarak alım yapmaktadır ve yeni teknolojilere ilgi göstermektedir."
    },
    "pazarlama_izinleri": {
      "email_izni": true,
      "sms_izni": true,
      "tercih_edilen_kanal": "Email"
    },
    "_id": "672b784aa2ae4a1a2fd2e729",
    "ad": "Deniz",
    "soyad": "Kara",
    "cinsiyet": "Kadın",
    "dogum_tarihi": "1988-07-23T00:00:00.000Z",
    "satin_alma_gecmisi": [
      {
        "siparis_id": "101",
        "urun": "Laptop",
        "miktar": 1,
        "toplam_fiyat": 14000,
        "tarih": "2023-02-15T00:00:00.000Z",
        "_id": "672b784aa2ae4a1a2fd2e72a"
      },
      {
        "siparis_id": "102",
        "urun": "Klavye",
        "miktar": 2,
        "toplam_fiyat": 600,
        "tarih": "2023-03-20T00:00:00.000Z",
        "_id": "672b784aa2ae4a1a2fd2e72b"
      }
    ],
    "createdAt": "2024-11-06T14:08:10.373Z",
    "updatedAt": "2024-11-06T14:08:10.373Z",
    "__v": 0
  },
  {
    "iletisim_bilgileri": {
      "adres": {
        "sokak": "Atatürk Mah. No:78",
        "sehir": "Ankara",
        "posta_kodu": "06050",
        "ulke": "Türkiye"
      },
      "sosyal_medya": {
        "twitter": "@alivural",
        "linkedin": "linkedin.com/in/alivural"
      },
      "telefon": "+90 534 444 5555",
      "email": "ali.sa@example.com"
    },
    "sirket_bilgileri": {
      "sirket_adresi": {
        "sokak": "Yazılım Sok. No:25",
        "sehir": "Ankara",
        "posta_kodu": "06050",
        "ulke": "Türkiye"
      },
      "sirket_adi": "ABC Yazılım Ltd.",
      "gorev": "Genel Müdür"
    },
    "segmentasyon": {
      "musteri_segmenti": "Kurumsal",
      "ilgi_alanlari": [
        "Teknoloji",
        "İş Geliştirme",
        "Yönetim"
      ],
      "sadakat_durumu": "Yeni Müşteri"
    },
    "iliskiler": {
      "asama": "Potansiyel Müşteri",
      "notlar": "Ali Bey iş geliştirme ve yönetim alanlarına büyük ilgi gösteriyor. Seminerlere katılıyor."
    },
    "pazarlama_izinleri": {
      "email_izni": true,
      "sms_izni": false,
      "tercih_edilen_kanal": "SMS"
    },
    "_id": "672b8a28902b3222e0af38a8",
    "ad": "Ali",
    "soyad": "Vural",
    "cinsiyet": "Erkek",
    "dogum_tarihi": "1975-11-30T00:00:00.000Z",
    "satin_alma_gecmisi": [
      {
        "siparis_id": "103",
        "urun": "Monitor",
        "miktar": 2,
        "toplam_fiyat": 5000,
        "tarih": "2023-01-10T00:00:00.000Z",
        "_id": "672b8a28902b3222e0af38a9"
      },
      {
        "siparis_id": "104",
        "urun": "Mouse",
        "miktar": 3,
        "toplam_fiyat": 450,
        "tarih": "2023-04-05T00:00:00.000Z",
        "_id": "672b8a28902b3222e0af38aa"
      }
    ],
    "createdAt": "2024-11-06T15:24:24.320Z",
    "updatedAt": "2024-11-06T15:24:24.320Z",
    "__v": 0
  }

 ]


type IletisimBilgileri = {
  adres: {
    sokak: string;
    sehir: string;
    posta_kodu: string;
    ulke: string;
  };
  sosyal_medya: {
    twitter?: string;
    linkedin?: string;
  };
  telefon: string;
  email: string;
};

type SirketBilgileri = {
  sirket_adresi: {
    sokak: string;
    sehir: string;
    posta_kodu: string;
    ulke: string;
  };
  sirket_adi: string;
  gorev: string;
};

type Segmentasyon = {
  musteri_segmenti: string;
  ilgi_alanlari: string[];
  sadakat_durumu: string;
};

type Iliskiler = {
  asama: string;
  notlar: string;
};

type PazarlamaIzinleri = {
  email_izni: boolean;
  sms_izni: boolean;
  tercih_edilen_kanal: string;
};

type SatinAlmaGecmisi = {
  siparis_id: string;
  urun: string;
  miktar: number;
  toplam_fiyat: number;
  tarih: string;
  _id: string;
};

export type Customer = {
  _id: string;
  ad: string;
  soyad: string;
  cinsiyet: string;
  dogum_tarihi: string;
  iletisim_bilgileri: IletisimBilgileri;
  sirket_bilgileri: SirketBilgileri;
  segmentasyon: Segmentasyon;
  iliskiler: Iliskiler;
  pazarlama_izinleri: PazarlamaIzinleri;
  satin_alma_gecmisi: SatinAlmaGecmisi[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};


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
          <DropdownMenuItem onClick={()=>alert(row.original._id)}>Müşteriyi Görüntüle</DropdownMenuItem>
          <DropdownMenuItem>Ödeme Detaylarını Görüntüle</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      }
  },
];


// export const columns: ColumnDef<Customer>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "ad",
//     header: "Adı",
//     cell: ({ row }) => (
//       <div className="capitalize">{row.getValue("ad")}</div>
//     ),
//   },
//   {
//     accessorKey: "soyad",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Soyadı
//           <ArrowUpDown />
//         </Button>
//       )
//     },
//     cell: ({ row }) => <div className="lowercase">{row.getValue("soyad")}</div>,
//   },
//   {
//     accessorKey: "cinsiyet",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Cinsiyet
//           <ArrowUpDown />
//         </Button>
//       )
//     },
//     cell: ({ row }) => <div className="lowercase">{row.getValue("cinsiyet")}</div>,
//   },
 
//   {
//     id: "actions",
//     enableHiding: false,
//     cell: ({ row }) => {
//       const payment = row.original

//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <MoreHorizontal />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             {/* <DropdownMenuItem
//               onClick={() => navigator.clipboard.writeText(payment.id)}
//             >
//               Copy payment ID
//             </DropdownMenuItem> */}
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View customer</DropdownMenuItem>
//             <DropdownMenuItem>View payment details</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },
// ]

 export function DataTableDemo() {
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
