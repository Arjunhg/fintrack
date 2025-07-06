'use client';
import React, { useState } from 'react';
import { useTransactionStore } from '../lib/store';
import { CATEGORIES, Transaction, Budget } from '../lib/types';

function getInsights(transactions: Transaction[], budgets: Budget[], month: string) {
  const monthBudgets = budgets.filter((b: Budget) => b.month === month);
  const monthTransactions = transactions.filter((tx: Transaction) => tx.date.startsWith(month));
  const insights: { category: string; over: boolean; spent: number; budget: number }[] = [];

  CATEGORIES.forEach((category: string) => {
    const budget = monthBudgets.find((b: Budget) => b.category === category)?.amount || 0;
    const spent = monthTransactions
      .filter((tx: Transaction) => tx.category === category)
      .reduce((sum: number, tx: Transaction) => sum + tx.amount, 0);
    if (budget > 0) {
      insights.push({ category, over: spent > budget, spent, budget });
    }
  });
  return insights;
}

export default function BudgetInsights() {
  const transactions = useTransactionStore((s) => s.transactions);
  const budgets = useTransactionStore((s) => s.budgets);
  const [month, setMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });

  const insights = getInsights(transactions, budgets, month);

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded shadow p-4">
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-semibold flex-1">Budget Insights</h2>
        <input
          type="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        />
      </div>
      {insights.length === 0 ? (
        <p className="text-gray-500">No budgets set for this month.</p>
      ) : (
        <ul className="space-y-2">
          {insights.map((insight) => (
            <li key={insight.category} className={insight.over ? "bg-red-100 text-red-700 p-3 rounded" : "bg-green-100 text-green-700 p-3 rounded"}>
              <span className="font-semibold">{insight.category}:</span> 
              {insight.over ? (
                <> Over budget! Spent ₹{insight.spent.toFixed(2)} / Budget ₹{insight.budget.toFixed(2)}</>
              ) : (
                <> Within budget. Spent ₹{insight.spent.toFixed(2)} / Budget ₹{insight.budget.toFixed(2)}</>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 