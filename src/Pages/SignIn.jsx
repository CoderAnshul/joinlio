import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Bird, User } from "lucide-react";
import { submitSignInForm } from "../store/slices/signinSlice";
import j from "../assets/images/bigJTwo.png";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.signin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      await dispatch(submitSignInForm(formData)).unwrap();
      navigate("/dashboard");
    } catch (err) {
      console.error("Error signing in:", err);
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
            <div className="absolute inset-0 rounded-3xl opacity-20" />
            <div className="relative p-8">
              <h1 className="text-3xl font-bold mb-6">Sign In to Joinlio!</h1>
              <p className="text-gray-700 mb-8">
                Log in to your Joinlio account to connect, collaborate, and access exclusive benefits as a student, alumni, business, or institution.
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
                    Sign in to stay connected and explore opportunities on our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="yourname@123.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="mb-4 text-red-600 text-sm">
                Error: {error.message || "Invalid email or password. Please try again."}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#F7C28A] text-black py-3 px-6 rounded-lg hover:bg-[#c59057] transition-colors disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;