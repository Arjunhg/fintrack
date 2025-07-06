# Personal Finance Tracker

A modern, responsive web application for tracking personal finances with budgeting features and insightful visualizations.

## 🌐 Live Demo

**[View Live Application](https://fintrack-sand-six.vercel.app/)**

## 📁 Repository

**[GitHub Repository](https://github.com/Arjunhg/fintrack)**

## ✨ Features

### Phase 1: Basic Transaction Tracking
- ✅ Add, edit, and delete transactions
- ✅ Transaction list with category badges
- ✅ Monthly expenses bar chart
- ✅ Form validation with react-hook-form and zod

### Phase 2: Categories & Dashboard
- ✅ Predefined categories (Food & Dining, Transportation, etc.)
- ✅ Category-wise pie chart visualization
- ✅ Dashboard with summary cards:
  - Total expenses and transaction count
  - Top spending category
  - Number of categories used
  - Recent transactions list

### Phase 3: Budgeting & Insights
- ✅ Set monthly budgets per category
- ✅ Budget vs actual comparison chart
- ✅ Spending insights and alerts
- ✅ Month-based budget tracking

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **UI Components**: shadcn/ui
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/Arjunhg/fintrack.git
cd fintrack
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Features Overview

### Navigation
- **Dashboard**: Overview with summary cards
- **Budgeting**: Set budgets and view insights
- **Charts**: Analytics and visualizations
- **Transactions**: Complete transaction list

### Key Functionality
- **Transaction Management**: Add transactions with amount, date, description, and category
- **Budget Planning**: Set monthly budgets for each category
- **Visual Analytics**: Bar charts for monthly expenses and pie charts for category breakdown
- **Budget Tracking**: Compare actual spending vs budgeted amounts
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🏗️ Project Structure

```
fintrack/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── TransactionForm.tsx
│   ├── TransactionList.tsx
│   ├── Dashboard.tsx
│   ├── BudgetForm.tsx
│   ├── BudgetVsActualChart.tsx
│   ├── BudgetInsights.tsx
│   ├── MonthlyExpensesChart.tsx
│   └── CategoryPieChart.tsx
├── lib/                   # Utilities and types
│   ├── store.ts          # Zustand store
│   └── types.ts          # TypeScript types
└── public/               # Static assets
```

## 🎯 Usage

1. **Add Transactions**: Use the form at the top to add new transactions
2. **Set Budgets**: Navigate to the Budgeting section to set monthly category budgets
3. **View Analytics**: Check the Charts section for spending visualizations
4. **Track Progress**: Monitor budget vs actual spending in the Budgeting section

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Proper component organization


**Happy Budgeting! 💰**
