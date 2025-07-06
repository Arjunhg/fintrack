import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import MonthlyExpensesChart from './MonthlyExpensesChart';
import CategoryPieChart from './CategoryPieChart';
import Dashboard from './Dashboard';
import BudgetForm from './BudgetForm';
import BudgetVsActualChart from './BudgetVsActualChart';
import BudgetInsights from './BudgetInsights';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Personal Finance Tracker</h1>
      
      {/* Form Section */}
      <div className="mb-8">
        <TransactionForm />
      </div>

      {/* Dashboard Section */}
      <Dashboard />

      {/* Budgeting Section */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-6">
        <BudgetForm />
        <BudgetVsActualChart />
      </div>
      <div className="max-w-4xl mx-auto mt-8 px-6">
        <BudgetInsights />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6 mt-8">
        <MonthlyExpensesChart />
        <CategoryPieChart />
      </div>

      {/* Transactions List */}
      <div className="mt-8">
        <TransactionList />
      </div>
    </main>
  );
}
