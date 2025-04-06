# 💸 Financinho

Appzinho em **Next.js** para controle de finanças pessoais.  
Registra receitas e despesas, aplica filtros por período e calcula o saldo com base em regras simples.  
Sem planilhas chatas. 😎

---

## 🚀 Tecnologias

-  **Frontend**: Next.js + TypeScript
-  **Estilização**: Tailwind CSS + Shadcn/UI
-  **Database**: Drizzle ORM
-  **ORM**: Drizzle + SQLite

---

## 🧠 Funcionalidades

-  [x] Registrar receitas e despesas
-  [x] Categorias personalizadas (comida, lazer, etc)
-  [x] Filtrar por período (início e fim)
-  [x] Visualizar saldo com base no filtro
-  [x] Inputs marcados como **inesperado** ou **calculado**
-  [x] Logs de criação, edição e exclusão de inputs
-  [x] Geração automática de inputs fixos na data certa

---

## 🗂️ Estrutura de dados

Cada **Input** possui:

-  Título
-  Descrição
-  Valor
-  Categoria
-  Moeda (BRL, USD, EUR)
-  Banco / Conta
-  Data
-  Tipo: Receita ou Despesa
-  Natureza: Inesperado ou Calculado

---

## 🧱 Arquitetura do Sistema

![Diagrama de Blocos](/Diagrama.png)

---

---

## 📌 To-do

-  [ ] Sistema de autenticação
-  [ ] Multiusuário
-  [ ] Exportar dados para CSV
-  [ ] Gráficos com Recharts

---

## 🧪 Rodando localmente

```bash
git clone https://github.com/seu-usuario/financinho
cd financinho
npm install
npm run dev
```
