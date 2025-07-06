'use client';
import React from 'react';
import { useTransactionStore } from '../lib/store';

export default function TransactionList() {
  const transactions = useTransactionStore((s) => s.transactions);
  const deleteTransaction = useTransactionStore((s) => s.deleteTransaction);

  if (transactions.length === 0) {
    return <div className="text-center text-gray-500 mt-8">No transactions yet.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-6 bg-white rounded shadow divide-y">
      {transactions.map((tx) => (
        <div key={tx.id} className="flex items-center justify-between px-4 py-3">
          <div className="flex-1">
            <div className="font-semibold">₹{tx.amount.toFixed(2)}</div>
            <div className="text-xs text-gray-500">{new Date(tx.date).toLocaleDateString()}</div>
            <div className="text-sm text-gray-700">{tx.description}</div>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-1">
              {tx.category}
            </span>
          </div>
          <button
            onClick={() => deleteTransaction(tx.id)}
            className="ml-4 text-red-500 hover:text-red-700 text-xs border border-red-200 rounded px-2 py-1 transition"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
} 