import TransacaoTable from "@/components/TransacaoTable";
import { Transacao } from "@/models/Transacao";

export default async function DashboardPage() {
   const transacoes: Transacao[] = [
      {
         id: 1,
         titulo: "Curso Online",
         descricao: "Venda curso",
         categoria: "Educação",
         valor: 300,
         moeda: "BRL",
         data: "2025-04-23",
         conta: "Inter",
         banco: "Inter",
         tipoInput: "Receita",
         probabilidade: "Calculado",
         executado: false,
      },
      {
         id: 2,
         titulo: "Assinatura Netflix",
         descricao: "Despesa mensal",
         categoria: "Entretenimento",
         valor: 55,
         moeda: "BRL",
         data: "2025-04-25",
         conta: "Nubank",
         banco: "Nubank",
         tipoInput: "Despesa",
         probabilidade: "Inesperado",
         executado: true,
      },
      {
         id: 3,
         titulo: "Curso Culinaria",
         descricao: "Venda curso",
         categoria: "Educação",
         valor: 300,
         moeda: "BRL",
         data: "2025-08-23",
         conta: "Inter",
         banco: "Inter",
         tipoInput: "Receita",
         probabilidade: "Calculado",
         executado: false,
      },
   ];
   return (
      <div className="p-4">
         <h2 className="text-2xl font-bold mb-4">Minhas Transações</h2>
         <TransacaoTable data={transacoes} />
      </div>
   );
}
