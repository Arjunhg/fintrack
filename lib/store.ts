import { create } from 'zustand';
import { Transaction, Budget } from './types';

interface TransactionState {
  transactions: Transaction[];
  addTransaction: (tx: Omit<Transaction, 'id'>) => void;
  editTransaction: (id: string, tx: Omit<Transaction, 'id'>) => void;
  deleteTransaction: (id: string) => void;
  budgets: Budget[];
  setBudget: (budget: Omit<Budget, 'id'>) => void;
  editBudget: (id: string, budget: Omit<Budget, 'id'>) => void;
  deleteBudget: (id: string) => void;
}

export const useTransactionStore = create<TransactionState>((set: any) => ({
  transactions: [],
  addTransaction: (tx: Omit<Transaction, 'id'>) =>
    set((state: TransactionState) => ({
      transactions: [
        ...state.transactions,
        { ...tx, id: crypto.randomUUID() },
      ],
    })),
  editTransaction: (id: string, tx: Omit<Transaction, 'id'>) =>
    set((state: TransactionState) => ({
      transactions: state.transactions.map((t: Transaction) =>
        t.id === id ? { ...tx, id } : t
      ),
    })),
  deleteTransaction: (id: string) =>
    set((state: TransactionState) => ({
      transactions: state.transactions.filter((t: Transaction) => t.id !== id),
    })),
  budgets: [],
  setBudget: (budget: Omit<Budget, 'id'>) =>
    set((state: TransactionState) => {
      // Only one budget per category per month
      const month = budget.month;
      const category = budget.category;
      const filtered = state.budgets.filter(
        (b) => !(b.month === month && b.category === category)
      );
      return {
        budgets: [
          ...filtered,
          { ...budget, id: crypto.randomUUID() },
        ],
      };
    }),
  editBudget: (id: string, budget: Omit<Budget, 'id'>) =>
    set((state: TransactionState) => ({
      budgets: state.budgets.map((b: Budget) =>
        b.id === id ? { ...budget, id } : b
      ),
    })),
  deleteBudget: (id: string) =>
    set((state: TransactionState) => ({
      budgets: state.budgets.filter((b: Budget) => b.id !== id),
    })),
})); 