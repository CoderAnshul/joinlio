import React, { useState } from 'react';

const Rewards = () => {
  const [userPoints, setUserPoints] = useState(75); // Example starting points
  const [onboardingComplete, setOnboardingComplete] = useState(true); // For demo purposes
  
  const rewards = [
    { 
      id: 1, 
      name: 'Free Coffee Voucher', 
      points: 50, 
      description: 'Redeem at any partner campus café',
      category: 'Campus Perks'
    },
    { 
      id: 2, 
      name: 'Exclusive Workshop Access', 
      points: 100, 
      description: '15% off on career development workshops',
      category: 'Learning'
    },
    { 
      id: 3, 
      name: 'Alumni Mentor Session', 
      points: 200, 
      description: '30-minute virtual meeting with an industry professional',
      category: 'Networking'
    },
    { 
      id: 4, 
      name: 'Premium Topic Hub Access', 
      points: 150, 
      description: 'One month access to all premium topic resources',
      category: 'Learning'
    },
  ];

  // Group rewards by category
  const groupedRewards = rewards.reduce((acc, reward) => {
    if (!acc[reward.category]) {
      acc[reward.category] = [];
    }
    acc[reward.category].push(reward);
    return acc;
  }, {});

  const handleRedeem = (rewardId, points) => {
    if (userPoints >= points) {
      setUserPoints(prevPoints => prevPoints - points);
      alert(`Successfully redeemed! You now have ${userPoints - points} Peer Score Points.`);
    } else {
      alert('Not enough Peer Score Points to redeem this reward.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow">
      {onboardingComplete && (
        <div className="mb-6 bg-green-100 p-4 rounded-lg border border-green-200">
          <h2 className="text-lg font-semibold text-green-800">Onboarding Complete!</h2>
          <p className="text-green-700">You've earned 75 Peer Score Points as your welcome bonus.</p>
        </div>
      )}

      <header className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-700">My Rewards</h1>
            <p className="text-gray-600">Redeem your Peer Score Points for exclusive benefits</p>
          </div>
          <div className="bg-blue-700 text-white px-4 py-2 rounded-lg text-center">
            <p className="text-sm">Your Balance</p>
            <p className="text-2xl font-bold">{userPoints}</p>
            <p className="text-xs">Peer Score Points</p>
          </div>
        </div>
      </header>

      {Object.entries(groupedRewards).map(([category, categoryRewards]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">{category}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categoryRewards.map((reward) => (
              <li
                key={reward.id}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{reward.name}</h3>
                    <p className="text-gray-600 text-sm">{reward.description}</p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="inline-block bg-blue-100 text-blue-800 font-medium py-1 px-3 rounded-full text-sm">
                      {reward.points} points
                    </span>
                    <button 
                      className={`px-4 py-2 rounded text-sm font-medium ${
                        userPoints >= reward.points 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                      onClick={() => handleRedeem(reward.id, reward.points)}
                      disabled={userPoints < reward.points}
                      aria-label={`Redeem ${reward.name}`}
                    >
                      Redeem
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-8 pt-4 border-t border-gray-200">
        <h2 className="text-lg font-semibold mb-2">How to Earn More Points</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { activity: 'Complete your profile', points: 25 },
            { activity: 'Join a Topic Hub', points: 10 },
            { activity: 'Create a project', points: 50 },
            { activity: 'Collaborate with peers', points: 30 },
            { activity: 'Attend an event', points: 20 },
            { activity: 'Share feedback', points: 15 }
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded flex justify-between items-center">
              <span className="text-gray-700">{item.activity}</span>
              <span className="text-blue-600 font-bold">+{item.points}</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rewards;