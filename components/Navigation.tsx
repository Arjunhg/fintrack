'use client';
import React, { useState } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold text-gray-800">Personal Finance Tracker</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => scrollToSection('dashboard')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                activeSection === 'dashboard'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => scrollToSection('budgeting')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                activeSection === 'budgeting'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Budgeting
            </button>
            <button
              onClick={() => scrollToSection('charts')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                activeSection === 'charts'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Charts
            </button>
            <button
              onClick={() => scrollToSection('transactions')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                activeSection === 'transactions'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Transactions
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 