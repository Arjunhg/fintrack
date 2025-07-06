import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import MonthlyExpensesChart from './MonthlyExpensesChart';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Personal Finance Tracker</h1>
      <TransactionForm />
      <TransactionList />
      <MonthlyExpensesChart />
    </main>
  );
}
