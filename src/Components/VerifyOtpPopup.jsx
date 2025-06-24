import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp, resetSignupState } from "../store/slices/signupSlice";
import { useNavigate } from "react-router-dom";

const VerifyOtpPopup = ({ isOpen, onClose, email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, otpSuccess } = useSelector((state) => state.signup);
  const [otp, setOtp] = useState("");

  // Debug: Log when popup is rendered
  console.log("VerifyOtpPopup rendered with isOpen:", isOpen, "email:", email);

  useEffect(() => {
    console.log("VerifyOtpPopup useEffect - Redux state:", { loading, error, otpSuccess });
    if (otpSuccess) {
      console.log("OTP verification successful, closing popup and navigating" ,otpSuccess);
      dispatch(resetSignupState());
      onClose();
      navigate("/get-started-thank-you");
    }
  }, [otpSuccess, onClose, navigate, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting OTP:", { email, otp });
    try {
      await dispatch(verifyOtp({ email, otp })).unwrap();

    const { token } = await dispatch(verifyOtp({ email, otp })).unwrap();
    console.log("OTP verification response:", { token });
    if (token) {
        localStorage.setItem("accessToken", token);
    }
    } catch (err) {
      console.error("OTP verification failed:", err);
    }
  };

  if (!isOpen) {
    console.log("VerifyOtpPopup not rendered due to isOpen: false");
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
        <p className="text-gray-600 mb-6">
          Enter the OTP sent to <span className="font-semibold">{email}</span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              OTP <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          {error && (
            <div className="mb-4 text-red-600 text-sm">
              Error: {JSON.stringify(error) || "Invalid OTP. Please try again."}
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => {
                console.log("Cancel button clicked");
                onClose();
              }}
              className="w-full bg-gray-300 text-black py-3 px-6 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full bg-[#F7C28A] text-black py-3 px-6 rounded-lg hover:bg-[#c59057] transition-colors disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtpPopup;