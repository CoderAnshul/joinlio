import React, { useState } from 'react';

export const PeerAccountPage = () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    const accountData = {
      balance: 2450,
      points: 3750,
      recentTransactions: [
        { id: 1, date: "Mar 18, 2025", description: "Library Resources", amount: -75, type: "debit" },
        { id: 2, date: "Mar 15, 2025", description: "Research Grant Deposit", amount: 500, type: "credit" },
        { id: 3, date: "Mar 10, 2025", description: "Lab Equipment Access", amount: -120, type: "debit" },
        { id: 4, date: "Mar 5, 2025", description: "Teaching Assistance", amount: 350, type: "credit" },
        { id: 5, date: "Mar 1, 2025", description: "Monthly Stipend", amount: 1500, type: "credit" }
      ],
      availableServices: [
        { id: 1, name: "Computing Resources", pointCost: 200, description: "Access to high-performance computing cluster" },
        { id: 2, name: "Research Equipment", pointCost: 350, description: "Laboratory and specialized research equipment" },
        { id: 3, name: "Publication Support", pointCost: 500, description: "Assistance with journal publication fees" },
        { id: 4, name: "Conference Registration", pointCost: 750, description: "Support for academic conference fees" }
      ]
    };
  
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Peer Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-3">Account Balance</h2>
            <p className="text-3xl font-bold text-blue-600">${accountData.balance}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full">
              Add Funds
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-3">Reward Points</h2>
            <p className="text-3xl font-bold text-green-600">{accountData.points} pts</p>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full">
              Redeem Points
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-3">Quick Actions</h2>
            <div className="space-y-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full">
                Transfer Funds
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full">
                Request Payment
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full">
                View Statement
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex mb-6">
          <button 
            className={`px-4 py-2 mr-2 rounded ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('overview')}
          >
            Account Overview
          </button>
          <button 
            className={`px-4 py-2 mr-2 rounded ${activeTab === 'transactions' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('transactions')}
          >
            Recent Transactions
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'services' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('services')}
          >
            Available Services
          </button>
        </div>
        
        {activeTab === 'overview' && (
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Account Overview</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Account Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Account Number</p>
                    <p className="font-medium">PEER-25689-A</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Account Type</p>
                    <p className="font-medium">Research Scholar</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Date Opened</p>
                    <p className="font-medium">September 1, 2024</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Status</p>
                    <p className="font-medium text-green-600">Active</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Account Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Current Balance</p>
                    <p className="font-medium">${accountData.balance}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Reward Points</p>
                    <p className="font-medium">{accountData.points} pts</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Pending Transactions</p>
                    <p className="font-medium">2</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Last Statement</p>
                    <p className="font-medium">March 1, 2025</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Account Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <button className="text-blue-600 hover:underline">Change Password</button>
                  </div>
                  <div>
                    <button className="text-blue-600 hover:underline">Update Contact Information</button>
                  </div>
                  <div>
                    <button className="text-blue-600 hover:underline">Manage Notifications</button>
                  </div>
                  <div>
                    <button className="text-blue-600 hover:underline">Privacy Settings</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'transactions' && (
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {accountData.recentTransactions.map(transaction => (
                    <tr key={transaction.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                      <td className="px-6 py-4">{transaction.description}</td>
                      <td className={`px-6 py-4 text-right ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.type === 'credit' ? '+' : '-'}${Math.abs(transaction.amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-between">
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                View All Transactions
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Next
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'services' && (
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Available Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {accountData.availableServices.map(service => (
                <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                      {service.pointCost} pts
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full">
                    Reserve Service
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };