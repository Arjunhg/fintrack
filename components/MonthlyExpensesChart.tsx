'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useTransactionStore } from '../lib/store';

function getMonthlyData(transactions: { amount: number; date: string }[]) {
  const monthly: Record<string, number> = {};
  transactions.forEach((tx) => {
    const month = new Date(tx.date).toLocaleString('default', { month: 'short', year: 'numeric' });
    monthly[month] = (monthly[month] || 0) + tx.amount;
  });
  return Object.entries(monthly).map(([month, total]) => ({ month, total }));
}

export default function MonthlyExpensesChart() {
  const transactions = useTransactionStore((s) => s.transactions);
  const data = getMonthlyData(transactions);

  if (data.length === 0) {
    return <div className="text-center text-gray-500 mt-8">No data to display.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#2563eb" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 