'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransactionStore } from '../lib/store';
import { CATEGORIES } from '../lib/types';

const budgetSchema = z.object({
  category: z.string().min(1, 'Category is required'),
  month: z.string().min(1, 'Month is required'),
  amount: z.number().min(1, 'Budget must be at least 1'),
});

type BudgetFormValues = z.infer<typeof budgetSchema>;

export default function BudgetForm() {
  const setBudget = useTransactionStore((s) => s.setBudget);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BudgetFormValues>({
    resolver: zodResolver(budgetSchema),
    defaultValues: {
      category: '',
      month: '',
      amount: 0,
    },
  });

  const onSubmit = (data: BudgetFormValues) => {
    setBudget(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-4 rounded shadow max-w-md mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-2">Set Monthly Budget</h2>
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          {...register('category')}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">Select a category</option>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Month</label>
        <input
          type="month"
          {...register('month')}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.month && <p className="text-red-500 text-xs mt-1">{errors.month.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Budget Amount</label>
        <input
          type="number"
          step="0.01"
          {...register('amount', { valueAsNumber: true })}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Set Budget
      </button>
    </form>
  );
} 