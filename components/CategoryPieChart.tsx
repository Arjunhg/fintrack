'use client';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useTransactionStore } from '../lib/store';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF6B6B'];

function getCategoryData(transactions: { amount: number; category: string }[]) {
  const categoryTotals: Record<string, number> = {};
  transactions.forEach((tx) => {
    categoryTotals[tx.category] = (categoryTotals[tx.category] || 0) + tx.amount;
  });
  return Object.entries(categoryTotals).map(([name, value]) => ({ name, value }));
}

export default function CategoryPieChart() {
  const transactions = useTransactionStore((s) => s.transactions);
  const data = getCategoryData(transactions);

  if (data.length === 0) {
    return <div className="text-center text-gray-500 mt-8">No data to display.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Expenses by Category</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
} 