 'use client';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTransactionStore } from '../lib/store';
import { CATEGORIES, Transaction, Budget } from '../lib/types';

function getBudgetVsActualData(
  transactions: Transaction[],
  budgets: Budget[],
  month: string
) {
  // Filter budgets and transactions for the selected month
  const monthBudgets = budgets.filter((b: Budget) => b.month === month);
  const monthTransactions = transactions.filter((tx: Transaction) => tx.date.startsWith(month));

  return CATEGORIES.map((category: string) => {
    const budget = monthBudgets.find((b: Budget) => b.category === category)?.amount || 0;
    const actual = monthTransactions
      .filter((tx: Transaction) => tx.category === category)
      .reduce((sum: number, tx: Transaction) => sum + tx.amount, 0);
    return { category, budget, actual };
  });
}

export default function BudgetVsActualChart() {
  const transactions = useTransactionStore((s) => s.transactions);
  const budgets = useTransactionStore((s) => s.budgets);
  const [month, setMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });

  const data = getBudgetVsActualData(transactions, budgets, month);

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded shadow p-4">
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-semibold flex-1">Budget vs Actual</h2>
        <input
          type="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <XAxis dataKey="category" tick={{ fontSize: 12 }} interval={0} angle={-20} textAnchor="end" height={60} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="budget" fill="#22c55e" name="Budget" radius={[4, 4, 0, 0]} />
          <Bar dataKey="actual" fill="#2563eb" name="Actual" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 