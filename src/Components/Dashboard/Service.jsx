import React, { useState } from 'react';

export const ServicesPage = () => {
    const [activeTab, setActiveTab] = useState('discounts');
    
    const servicesData = {
      discounts: [
        {
          id: 1,
          company: "TechGear",
          category: "Electronics",
          discount: "25% off laptops and accessories",
          code: "STUDENT25",
          expiry: "December 31, 2025",
          popular: true
        },
        {
          id: 2,
          company: "CloudCompute",
          category: "Software",
          discount: "Free tier plus $100 credit",
          code: "ACADCLOUD100",
          expiry: "Ongoing",
          popular: true
        },
        {
          id: 3,
          company: "ResearchPublish",
          category: "Academic",
          discount: "50% off publication fees",
          code: "STUDPUB50",
          expiry: "June 30, 2025",
          popular: false
        },
        {
          id: 4,
          company: "CoffeeWorks",
          category: "Food & Drink",
          discount: "15% off all purchases",
          code: "STUDYBREW",
          expiry: "Ongoing",
          popular: true
        },
        {
          id: 5,
          company: "BookWorld",
          category: "Books",
          discount: "20% off academic titles",
          code: "BOOKWORM20",
          expiry: "September 1, 2025",
          popular: false
        },
        {
          id: 6,
          company: "TransitGo",
          category: "Transportation",
          discount: "50% off monthly passes",
          code: "STUCOMMUTE",
          expiry: "Ongoing",
          popular: true
        }
      ],
      partners: [
        {
          id: 1,
          name: "Research Innovation Lab",
          type: "Research Institution",
          benefits: "Access to specialized equipment and expertise",
          eligibility: "Graduate students and faculty",
          application: "Application required"
        },
        {
          id: 2,
          name: "Industry Connect",
          type: "Industry Network",
          benefits: "Internship opportunities and industry projects",
          eligibility: "All students",
          application: "Open enrollment"
        },
        {
          id: 3,
          name: "Global Academic Exchange",
          type: "Educational Network",
          benefits: "Study abroad opportunities and course transfers",
          eligibility: "Students in good standing",
          application: "Application required"
        }
      ],
      subscriptions: [
        {
          id: 1,
          service: "Academic Journals Bundle",
          provider: "Research Gateway",
          normalPrice: "$299/year",
          studentPrice: "$49/year",
          features: "Access to 5000+ academic journals across disciplines"
        },
        {
          id: 2,
          service: "Professional Software Suite",
          provider: "CreativeTech",
          normalPrice: "$52/month",
          studentPrice: "$15/month",
          features: "Full access to design, development, and data analysis tools"
        },
        {
          id: 3,
          service: "Learning Platform Premium",
          provider: "EduLearn",
          normalPrice: "$199/year",
          studentPrice: "Free",
          features: "Access to 10,000+ courses and certification programs"
        }
      ]
    };
  
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Student Discounts & Partner Services</h1>
        
        <div className="flex mb-6">
          <button 
            className={`px-4 py-2 mr-2 rounded ${activeTab === 'discounts' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('discounts')}
          >
            Student Discounts
          </button>
          <button 
            className={`px-4 py-2 mr-2 rounded ${activeTab === 'subscriptions' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('subscriptions')}
          >
            Discounted Subscriptions
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'partners' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('partners')}
          >
            Partner Services
          </button>
        </div>
        
        {activeTab === 'discounts' && (
          <div>
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Featured Discounts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {servicesData.discounts.filter(d => d.popular).map(discount => (
                  <div key={discount.id} className="border border-
                    gray-200 bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-bold">{discount.company}</h3>
                        <p className="text-gray-600 mt-1">{discount.category}</p>
                        <p className="mt-2">{discount.discount}</p>
                        <p className="mt-2">Code: {discount.code}</p>
                        <p className="mt-2">Expires: {discount.expiry}</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                          Claim Discount
                        </button>
                    </div>
                ))}
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h2 className="text-2xl font-semibold mb-4">All Discounts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {servicesData.discounts.map(discount => (
                    <div key={discount.id} className="border border-gray-200 bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-bold">{discount.company}</h3>
                        <p className="text-gray-600 mt-1">{discount.category}</p>
                        <p className="mt-2">{discount.discount}</p>
                        <p className="mt-2">Code: {discount.code}</p>
                        <p className="mt-2">Expires: {discount.expiry}</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Claim Discount
                        </button>
                    </div>
                    ))}
                </div>
            </div>
            </div>

        )}

        {activeTab === 'subscriptions' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Discounted Subscriptions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {servicesData.subscriptions.map(subscription => (
                <div key={subscription.id} className="bg-white rounded-lg shadow p-6 border border-gray-200">
                  <h3 className="text-xl font-bold">{subscription.service}</h3>
                  <p className="text-gray-600 mt-1">Provider: {subscription.provider}</p>
                  <p className="mt-2">Normal Price: {subscription.normalPrice}</p>
                  <p className="mt-2">Student Price: {subscription.studentPrice}</p>
                  <p className="mt-2">{subscription.features}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Get Subscription
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'partners' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Partner Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {servicesData.partners.map(partner => (
                <div key={partner.id} className="bg-white rounded-lg shadow p-6 border border-gray-200">
                  <h3 className="text-xl font-bold">{partner.name}</h3>
                  <p className="text-gray-600 mt-1">Type: {partner.type}</p>
                  <p className="mt-2">Benefits: {partner.benefits}</p>
                  <p className="mt-2">Eligibility: {partner.eligibility}</p>
                  <p className="mt-2">Application: {partner.application}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}




        </div>
    );

}

