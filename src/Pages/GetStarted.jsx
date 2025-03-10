import React, { useState } from "react";
import { ChevronDown, Bird, User } from "lucide-react";
import emailjs from "@emailjs/browser";
import j from "../assets/images/bigJTwo.png";

const GetStarted = () => {
  const [userCategory, setUserCategory] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }
    setIsSubmitting(true);

    // Prepare template parameters
    const templateParams = {
      user_category: userCategory || "",
      first_name: firstName || "N/A",
      last_name: lastName || "N/A",
      institution_name: institutionName || "N/A",
      business_name: businessName || "N/A",
      email: email || "N/A",
      query: query || "N/A",
    };

    try {
      await emailjs.send(
        'service_kewk8yr',
        'template_ymwsydf',
        templateParams,
        "o_l0zTlSddslcQg_o"
      );

      // Reset form
      setUserCategory("");
      setFirstName("");
      setLastName("");
      setInstitutionName("");
      setBusinessName("");
      setEmail("");
      setQuery("");

      alert(
        "Thank you for signing up! Once Joinlio goes live, you will be notified at your registered email address. Stay tuned!"
      );
    } catch (error) {
      console.error("Error sending email:", error.message);
      alert("There was an error sending your registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderDynamicFields = () => {
    switch (userCategory) {
      case "students":
      case "alumni":
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Institution Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your institution's name"
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mail Id<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="yourname@123.con"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </>
        );
      case "businesses":
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="your.name@business.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </>
        );
      case "institutions":
        return (
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your institution's name"
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mail Id<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="enter your mail ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-fit p-6 flex items-center justify-center">
      <div>
        <img className="max-h-[500px] hidden lg:block mr-10" src={j} alt="" />
      </div>
      <div className="w-full h-full lg:ml-5 max-w-full grid md:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute inset-0  rounded-3xl opacity-20" />
            <div className="relative p-8">
              <h1 className="text-3xl font-bold mb-6">Sign Up Early!</h1>
              <p className="text-gray-700 mb-8">
                As Joinlio prepares to launch, we're offering early sign-up
                opportunities so you can be among the first to experience all
                the benefits our platform has to offer once we go live.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                  <Bird className="text-blue-600 w-5 h-5" />
                  <p className="text-sm">
                    Joinlio provides free access to all users!
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                  <User className="text-green-600 w-5 h-5" />
                  <p className="text-sm">
                    Sign up early to stay updated and receive notifications when
                    Joinlio goes live.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="font-semibold mb-4">Joinlio users include:</h2>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-medium min-w-6">1.</span>
                    <span>
                      <strong>Students/Alumni: </strong>For those in
                      universities, colleges, and institutions looking to
                      connect, collaborate, and grow.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium min-w-6">2.</span>
                    <span>
                      <strong>Businesses with Student Discounts: </strong>Ideal
                      for businesses offering discounts to students, enhancing
                      visibility and customer base.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium min-w-6">3.</span>
                    <span>
                      <strong>Educational Institutions: </strong>For
                      universities and colleges interested in tools that boost
                      student development and wish to partner with us.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User Category<span className="text-red-600">*</span>
              </label>
              <div
                className="relative"
                onClick={() => document.getElementById("userCategory").focus()}
              >
                <select
                  id="userCategory"
                  className="w-full p-3 border border-gray-300 rounded-lg appearance-none pr-10 cursor-pointer"
                  value={userCategory}
                  onChange={(e) => setUserCategory(e.target.value)}
                  required
                >
                  <option value="">Select category</option>
                  <option value="students">Students</option>
                  <option value="alumni">Alumni</option>
                  <option value="businesses">Businesses</option>
                  <option value="institutions">
                    Universities/Institutions/Colleges
                  </option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer pointer-events-none" />
              </div>
            </div>

            {renderDynamicFields()}

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Please enter your queries below
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg h-24"
                placeholder="Enter your query here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a
                    href="/privacy-policy"
                    className="text-[#00abff] hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="/terms-and-condition"
                    className="text-[#00abff] hover:underline"
                  >
                    Terms & Conditions
                  </a>
                  *
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F7C28A] text-Black py-3 px-6 rounded-lg hover:bg-[#c59057] transition-colors disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing up..." : "Sign up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
