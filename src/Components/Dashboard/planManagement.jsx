import React, { useState, useEffect } from 'react';
import { CreditCard, Calendar, CheckCircle, AlertCircle, Download, Clock, Settings, Shield, Star, ChevronRight, RefreshCw, Gift, Coffee ,MessageSquare} from 'lucide-react';

const PlanManagement = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  
  const userPlan = {
    name: 'Professional Plan',
    status: 'active', // 'active', 'expired', 'cancelled'
    startDate: 'January 15, 2025',
    endDate: 'April 15, 2025',
    nextBillingDate: 'April 15, 2025',
    amount: '$49.99',
    billingCycle: 'quarterly',
    features: [
      'Unlimited access to all courses',
      'Priority support',
      'Certificate of completion',
      'Access to community forums'
    ],
    paymentMethod: {
      type: 'Credit Card',
      last4: '4242',
      expiryDate: '05/27'
    },
    invoices: [
      { id: 'INV-2025-001', date: 'January 15, 2025', amount: '$49.99', status: 'paid' },
      { id: 'INV-2024-053', date: 'October 15, 2024', amount: '$49.99', status: 'paid' },
      { id: 'INV-2024-027', date: 'July 15, 2024', amount: '$49.99', status: 'paid' }
    ],
    benefits: [
      { title: 'Cost Savings', description: 'Save 20% compared to monthly billing' },
      { title: 'Uninterrupted Access', description: 'No gaps in your learning journey' },
      { title: 'Future-Proof', description: 'Lock in current pricing for the duration' }
    ]
  };

  const availablePlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '$19.99',
      interval: 'monthly',
      features: [
        'Access to basic courses',
        'Standard support',
        'Digital certificate'
      ],
      recommended: false
    },
    {
      id: 'professional',
      name: 'Professional Plan',
      price: '$49.99',
      interval: 'quarterly',
      features: [
        'Unlimited access to all courses',
        'Priority support',
        'Certificate of completion',
        'Access to community forums'
      ],
      recommended: false,
      current: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      price: '$149.99',
      interval: 'quarterly',
      features: [
        'Everything in Professional Plan',
        'Dedicated account manager',
        'Custom course creation',
        'Team management features',
        'Analytics dashboard'
      ],
      recommended: true
    }
  ];

  const handleUpgrade = (plan) => {
    setSelectedPlan(plan);
    setShowUpgradeModal(true);
  };

  const handlePlanChange = () => {
    // Handle plan change logic here
    setShowUpgradeModal(false);
    // Success message or redirect would go here
  };

  const handleCancelPlan = () => {
    setShowCancelModal(false);
    // Cancellation logic would go here
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim() !== '') {
      setCouponApplied(true);
      // In a real app, you would validate the coupon code with an API call
    }
  };

  // Render plan status badge
  const renderStatusBadge = (status) => {
    if (status === 'active') {
      return (
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
          <CheckCircle size={12} className="mr-1" />
          Active
        </span>
      );
    } else if (status === 'expired') {
      return (
        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full flex items-center">
          <AlertCircle size={12} className="mr-1" />
          Expired
        </span>
      );
    } else if (status === 'cancelled') {
      return (
        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
          <Clock size={12} className="mr-1" />
          Cancelled
        </span>
      );
    }
  };

  // Render upgrade modal
  const renderUpgradeModal = () => {
    if (!showUpgradeModal || !selectedPlan) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Upgrade to {selectedPlan.name}</h2>
          
          <div className="mb-4">
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">{selectedPlan.name}</span>
                <span className="font-bold">{selectedPlan.price}</span>
              </div>
              <p className="text-sm text-gray-600">Billed {selectedPlan.interval}</p>
            </div>
            
            <h3 className="font-medium mb-2">Plan Features:</h3>
            <ul className="mb-4">
              {selectedPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start mb-2">
                  <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Payment Method</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="creditCard" 
                  name="paymentMethod" 
                  className="mr-2"
                  checked={paymentMethod === 'creditCard'}
                  onChange={() => setPaymentMethod('creditCard')}
                />
                <label htmlFor="creditCard" className="flex items-center">
                  <CreditCard size={16} className="mr-1 text-blue-600" />
                  Credit Card (•••• {userPlan.paymentMethod.last4})
                </label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="newCard" 
                  name="paymentMethod" 
                  className="mr-2"
                  checked={paymentMethod === 'newCard'}
                  onChange={() => setPaymentMethod('newCard')}
                />
                <label htmlFor="newCard">Add New Payment Method</label>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <label className="block text-gray-700 flex-grow">Coupon Code</label>
              {couponApplied && (
                <span className="text-xs text-green-600 flex items-center">
                  <CheckCircle size={12} className="mr-1" />
                  Applied
                </span>
              )}
            </div>
            <div className="flex">
              <input 
                type="text" 
                className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                onClick={handleApplyCoupon}
              >
                Apply
              </button>
            </div>
          </div>
          
          <div className="border-t pt-4 mb-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{selectedPlan.price}</span>
            </div>
            {couponApplied && (
              <div className="flex justify-between mb-2 text-green-600">
                <span>Discount (20%)</span>
                <span>-$29.99</span>
              </div>
            )}
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>{couponApplied ? '$119.99' : selectedPlan.price}</span>
            </div>
          </div>
          
          <div className="flex justify-end space-x-2">
            <button 
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
              onClick={() => setShowUpgradeModal(false)}
            >
              Cancel
            </button>
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={handlePlanChange}
            >
              Confirm Upgrade
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Render cancel confirmation modal
  const renderCancelModal = () => {
    if (!showCancelModal) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Cancel Your Plan</h2>
          
          <div className="mb-4">
            <p className="text-gray-700 mb-4">
              Are you sure you want to cancel your {userPlan.name}? You will lose access to:
            </p>
            
            <ul className="mb-4">
              {userPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start mb-2">
                  <AlertCircle size={16} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-sm text-gray-600">
              Your plan will remain active until the end of your current billing period ({userPlan.endDate}).
            </p>
          </div>
          
          <div className="flex justify-end space-x-2">
            <button 
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
              onClick={() => setShowCancelModal(false)}
            >
              Keep My Plan
            </button>
            <button 
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              onClick={handleCancelPlan}
            >
              Cancel Plan
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-5 font-sans bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-5 mb-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Plan Management</h1>
          <div className="flex space-x-2">
            <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm flex items-center">
              <Settings size={16} className="mr-1" />
              Settings
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm flex items-center">
              <Gift size={16} className="mr-1" />
              Refer a Friend
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Column */}
        <div className="w-full md:w-2/3">
          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md mb-4">
            <div className="flex border-b">
              <button 
                onClick={() => setActiveTab('current')} 
                className={`flex-1 py-3 px-4 text-center ${activeTab === 'current' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500'}`}
              >
                Current Plan
              </button>
              <button 
                onClick={() => setActiveTab('invoices')} 
                className={`flex-1 py-3 px-4 text-center ${activeTab === 'invoices' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500'}`}
              >
                Invoices
              </button>
              <button 
                onClick={() => setActiveTab('benefits')} 
                className={`flex-1 py-3 px-4 text-center ${activeTab === 'benefits' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500'}`}
              >
                Plan Benefits
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-5">
              {activeTab === 'current' && (
                <div>
                  <div className="bg-blue-50 rounded-lg p-5 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h2 className="text-xl font-bold text-blue-800">{userPlan.name}</h2>
                        <div className="flex items-center mt-1">
                          {renderStatusBadge(userPlan.status)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{userPlan.amount}</div>
                        <div className="text-sm text-gray-600">Billed {userPlan.billingCycle}</div>
                      </div>
                    </div>
                    
                    <div className="border-t border-blue-100 pt-4 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-blue-600 font-medium">START DATE</div>
                          <div className="text-sm mt-1">{userPlan.startDate}</div>
                        </div>
                        <div>
                          <div className="text-xs text-blue-600 font-medium">NEXT BILLING DATE</div>
                          <div className="text-sm mt-1">{userPlan.nextBillingDate}</div>
                        </div>
                        <div>
                          <div className="text-xs text-blue-600 font-medium">PAYMENT METHOD</div>
                          <div className="text-sm mt-1 flex items-center">
                            <CreditCard size={14} className="mr-1" />
                            {userPlan.paymentMethod.type} (•••• {userPlan.paymentMethod.last4})
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3">Plan Features</h3>
                  <div className="space-y-2 mb-4">
                    {userPlan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2 mt-4">
                    <button 
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center"
                      onClick={() => setShowCancelModal(true)}
                    >
                      Cancel Plan
                    </button>
                    <button 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
                      onClick={() => handleUpgrade(availablePlans[2])}
                    >
                      Upgrade Plan
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'invoices' && (
                <div>
                  <h3 className="font-semibold text-lg mb-3">Billing History</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="p-3 text-left text-sm font-medium text-gray-700">Invoice</th>
                          <th className="p-3 text-left text-sm font-medium text-gray-700">Date</th>
                          <th className="p-3 text-left text-sm font-medium text-gray-700">Amount</th>
                          <th className="p-3 text-left text-sm font-medium text-gray-700">Status</th>
                          <th className="p-3 text-left text-sm font-medium text-gray-700">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userPlan.invoices.map((invoice, index) => (
                          <tr key={index} className="border-t">
                            <td className="p-3 text-sm">{invoice.id}</td>
                            <td className="p-3 text-sm">{invoice.date}</td>
                            <td className="p-3 text-sm">{invoice.amount}</td>
                            <td className="p-3 text-sm">
                              {invoice.status === 'paid' ? (
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Paid</span>
                              ) : (
                                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Pending</span>
                              )}
                            </td>
                            <td className="p-3 text-sm">
                              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                                <Download size={14} className="mr-1" />
                                PDF
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'benefits' && (
                <div>
                  <h3 className="font-semibold text-lg mb-3">Benefits of Your Plan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {userPlan.benefits.map((benefit, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                          {index === 0 ? (
                            <CreditCard size={20} className="text-blue-600" />
                          ) : index === 1 ? (
                            <RefreshCw size={20} className="text-blue-600" />
                          ) : (
                            <Shield size={20} className="text-blue-600" />
                          )}
                        </div>
                        <h4 className="font-medium">{benefit.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-md p-5">
            <h3 className="font-semibold text-lg mb-3">Frequently Asked Questions</h3>
            <div className="space-y-3">
              <div className="border-b pb-3">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-medium">How do I change my payment method?</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </button>
              </div>
              <div className="border-b pb-3">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-medium">Can I upgrade my plan mid-cycle?</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </button>
              </div>
              <div className="border-b pb-3">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-medium">What happens if I cancel my subscription?</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </button>
              </div>
              <div>
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-medium">How do I get a refund?</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3">
          {/* Available Plans */}
          <div className="bg-white rounded-lg shadow-md p-5 mb-4">
            <h3 className="font-semibold text-lg mb-3">Available Plans</h3>
            <div className="space-y-4">
              {availablePlans.map((plan) => (
                <div 
                  key={plan.id} 
                  className={`border rounded-lg p-4 ${plan.recommended ? 'border-blue-500 bg-blue-50' : ''} ${plan.current ? 'border-green-500' : ''}`}
                >
                  {plan.recommended && (
                    <div className="flex justify-end -mt-7 -mr-7">
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg">
                        Recommended
                      </span>
                    </div>
                  )}
                  {plan.current && (
                    <div className="flex justify-end -mt-7 -mr-7">
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg">
                        Current Plan
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{plan.name}</h4>
                    <div className="text-right">
                      <div className="text-lg font-bold">{plan.price}</div>
                      <div className="text-xs text-gray-600">Billed {plan.interval}</div>
                    </div>
                  </div>
                  <ul className="mb-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm mb-1">
                        <CheckCircle size={14} className="text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.current ? (
                    <button 
                      className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
                      disabled
                    >
                      Current Plan
                    </button>
                  ) : (
                    <button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                      onClick={() => handleUpgrade(plan)}
                    >
                      {plan.id === 'basic' ? 'Downgrade' : 'Upgrade'}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Need Help */}
          <div className="bg-white rounded-lg shadow-md p-5">
            <h3 className="font-semibold text-lg mb-3">Need Help?</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <MessageSquare size={20} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium">Contact Support</h4>
                  <p className="text-xs text-gray-500">Get help with your account or billing</p>
                </div>
              </a>
              <a href="#" className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Coffee size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Schedule a Call</h4>
                  <p className="text-xs text-gray-500">Talk to our customer success team</p>
                </div>
              </a>
              <a href="#" className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                  <Star size={20} className="text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-medium">Leave Feedback</h4>
                  <p className="text-xs text-gray-500">Help us improve our service</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {renderUpgradeModal()}
      {renderCancelModal()}
    </div>
  );
};

export default PlanManagement;