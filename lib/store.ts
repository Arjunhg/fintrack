import { create } from 'zustand';
import { Transaction } from './types';

interface TransactionState {
  transactions: Transaction[];
  addTransaction: (tx: Omit<Transaction, 'id'>) => void;
  editTransaction: (id: string, tx: Omit<Transaction, 'id'>) => void;
  deleteTransaction: (id: string) => void;
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
})); 