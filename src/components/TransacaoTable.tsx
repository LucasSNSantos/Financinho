"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, AlertTriangle, XCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { format, parseISO, isBefore } from "date-fns";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Transacao } from "@/models/Transacao";

interface TransacaoTableProps {
   data: Transacao[];
}

export default function TransacaoTable({ data }: TransacaoTableProps) {
   const [itemsPerPage, setItemsPerPage] = useState(5);
   const [currentPage, setCurrentPage] = useState(1);

   const totalPages = Math.ceil(data.length / itemsPerPage);
   const hoje = new Date();

   const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

   const handleItemsPerPageChange = (value: string) => {
      setItemsPerPage(Number(value));
      setCurrentPage(1); // reset page
   };

   return (
      <div className="space-y-4">
         <div className="overflow-auto rounded-xl border border-gray-200 shadow-sm">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead>Título</TableHead>
                     <TableHead>Categoria</TableHead>
                     <TableHead>Valor</TableHead>
                     <TableHead>Moeda</TableHead>
                     <TableHead>Data</TableHead>
                     <TableHead>Tipo</TableHead>
                     <TableHead>Probabilidade</TableHead>
                     <TableHead>Status</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {paginatedData.map((t) => {
                     const dataTransacao = parseISO(t.data);
                     const atrasado = isBefore(dataTransacao, hoje);
                     const statusIcon = t.executado ? (
                        <CheckCircle className="text-green-600" size={20} />
                     ) : atrasado ? (
                        <XCircle className="text-red-600" size={20} />
                     ) : (
                        <AlertTriangle className="text-yellow-500" size={20} />
                     );

                     return (
                        <TableRow key={t.id}>
                           <TableCell>{t.titulo}</TableCell>
                           <TableCell>{t.categoria}</TableCell>
                           <TableCell>{t.valor.toFixed(2)}</TableCell>
                           <TableCell>{t.moeda}</TableCell>
                           <TableCell>{format(dataTransacao, "dd/MM/yyyy")}</TableCell>
                           <TableCell>{t.tipoInput}</TableCell>
                           <TableCell>{t.probabilidade}</TableCell>
                           <TableCell>{statusIcon}</TableCell>
                        </TableRow>
                     );
                  })}
               </TableBody>
            </Table>
         </div>
         <div className="flex items-center justify-between">
            <Select onValueChange={handleItemsPerPageChange} defaultValue="5">
               <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Itens por página" />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="5">5 por página</SelectItem>
                  <SelectItem value="10">10 por página</SelectItem>
                  <SelectItem value="20">20 por página</SelectItem>
               </SelectContent>
            </Select>

            <div className="flex items-center space-x-2">
               <Button variant="outline" size="icon" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
                  <ChevronLeft />
               </Button>
               <span className="text-sm">
                  Página {currentPage} de {totalPages}
               </span>
               <Button variant="outline" size="icon" onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
                  <ChevronRight />
               </Button>
            </div>
         </div>
      </div>
   );
}
