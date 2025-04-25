export interface Transacao {
   id: number;
   titulo: string;
   descricao: string;
   categoria: string;
   valor: number;
   moeda: string;
   data: string;
   conta: string;
   banco: string;
   tipoInput: "Receita" | "Despesa";
   probabilidade: "Inesperado" | "Calculado";
   executado: boolean;
}
