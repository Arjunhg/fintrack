'use client';
import React from 'react';
import { useTransactionStore } from '../lib/store';
import { Transaction } from '../lib/types';

export default function Dashboard() {
  const transactions = useTransactionStore((s) => s.transactions);

  const totalExpenses = transactions.reduce((sum: number, tx: Transaction) => sum + tx.amount, 0);
  const recentTransactions = transactions.slice(-3).reverse(); // Last 3 transactions

  const categoryBreakdown = transactions.reduce((acc: Record<string, number>, tx: Transaction) => { //total amt in each category
    acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
    return acc;
  }, {} as Record<string, number>);

  const topCategory = Object.entries(categoryBreakdown).sort(([,a], [,b]) => b - a)[0];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Expenses Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Expenses</h3>
          <p className="text-3xl font-bold text-blue-600">₹{totalExpenses.toFixed(2)}</p>
          <p className="text-sm text-gray-500 mt-1">{transactions.length} transactions</p>
        </div>

        {/* Top Category Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Top Category</h3>
          {topCategory ? (
            <>
              <p className="text-2xl font-bold text-green-600">{topCategory[0]}</p>
              <p className="text-sm text-gray-500 mt-1">₹{topCategory[1].toFixed(2)}</p>
            </>
          ) : (
            <p className="text-gray-500">No transactions yet</p>
          )}
        </div>

        {/* Categories Count Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Categories Used</h3>
          <p className="text-3xl font-bold text-purple-600">{Object.keys(categoryBreakdown).length}</p>
          <p className="text-sm text-gray-500 mt-1">different categories</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Transactions</h3>
        {recentTransactions.length > 0 ? (
          <div className="space-y-3">
            {recentTransactions.map((tx: Transaction) => (
              <div key={tx.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <div>
                  <p className="font-medium">{tx.description}</p>
                  <p className="text-sm text-gray-500">{tx.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹{tx.amount.toFixed(2)}</p>
                  <p className="text-xs text-gray-500">{new Date(tx.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No transactions yet</p>
        )}
      </div>
    </div>
  );
} 