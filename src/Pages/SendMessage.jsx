import React from "react";

const SendMessage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-[80vh]  max-w-full justify-around mx-auto p-6">
      {/* Left Side: Form */}
      <div className="md:w-2/3 w-full max-w-xl">
        <h4 className="text-sm font-semibold text-purple-600 uppercase">Contact Us</h4>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Get in touch</h1>

        <form className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-gray-100 rounded-md outline-none text-gray-700"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-100 rounded-md outline-none text-gray-700"
            />
          </div>

          <textarea
            placeholder="How can we help you?"
            rows="5"
            className="w-full p-3 bg-gray-100 rounded-md outline-none text-gray-700"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-md font-semibold hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Side: Info */}
      <div className="md:w-1/3 w-full mt-10 md:mt-0">
        <h2 className="text-xl font-bold text-gray-900">Get in touch</h2>
        <p className="text-gray-600 mt-2">
          We’re always here to help. Contact us if you need any help with Swarm
          or have any questions.
        </p>
        <a href="#" className="text-purple-600 font-semibold mt-3 inline-flex items-center">
          See a demo →
        </a>
      </div>
    </div>
  );
};

export default SendMessage;
