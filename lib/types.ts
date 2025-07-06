export type Transaction = {
  id: string;
  amount: number;
  date: string; // ISO string
  description: string;
  category: string;
};

export const CATEGORIES = [
  'Food & Dining',
  'Transportation',
  'Entertainment',
  'Shopping',
  'Healthcare',
  'Utilities',
  'Education',
  'Other'
] as const;

// export type Category = typeof CATEGORIES[number]; 