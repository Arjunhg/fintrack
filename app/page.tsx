import Navigation from '../components/Navigation';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import MonthlyExpensesChart from '../components/MonthlyExpensesChart';
import CategoryPieChart from '../components/CategoryPieChart';
import Dashboard from '../components/Dashboard';
import BudgetForm from '../components/BudgetForm';
import BudgetVsActualChart from '../components/BudgetVsActualChart';
import BudgetInsights from '../components/BudgetInsights';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="py-8">
        {/* Form Section */}
        <div className="mb-8">
          <TransactionForm />
        </div>

        {/* Dashboard Section */}
        <section id="dashboard" className="mb-12">
          <Dashboard />
        </section>

        {/* Budgeting Section */}
        <section id="budgeting" className="mb-12">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8">Budgeting</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BudgetForm />
              <BudgetVsActualChart />
            </div>
            <div className="mt-8">
              <BudgetInsights />
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section id="charts" className="mb-12">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8">Analytics & Charts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MonthlyExpensesChart />
              <CategoryPieChart />
            </div>
          </div>
        </section>

        {/* Transactions List */}
        <section id="transactions" className="mb-12">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8">All Transactions</h2>
            <TransactionList />
          </div>
        </section>
      </main>
    </div>
  );
}
