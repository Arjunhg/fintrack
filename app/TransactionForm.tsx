'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransactionStore } from '../lib/store';

const transactionSchema = z.object({
  amount: z.number().min(0.01, 'Amount must be greater than 0'),
  date: z.string().min(1, 'Date is required'),
  description: z.string().min(1, 'Description is required'),
});

type TransactionFormValues = z.infer<typeof transactionSchema>;

export default function TransactionForm() {
  const addTransaction = useTransactionStore((s) => s.addTransaction); //subscribe to only the addTransaction function
//   const {addTransaction} = useTransactionStore(); //subscribe to all the functions causing unnecessary re-renders
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      amount: 0,
      date: '',
      description: '',
    },
  });

  const onSubmit = (data: TransactionFormValues) => {
    addTransaction(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-4 rounded shadow max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium mb-1">Amount</label>
        <input
          type="number"
          step="0.01"
          {...register('amount', { valueAsNumber: true })}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          {...register('date')}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <input
          type="text"
          {...register('description')}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add Transaction
      </button>
    </form>
  );
} 