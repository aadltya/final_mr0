import React from "react";
import { useNavigate } from "react-router-dom";
import { WavyBackground } from "../components/ui/wavy-background";
import "../pages/home.css"; // Import the CSS file

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div>
      <div className="absolute top-4 right-4 flex space-x-4 z-10">
          <button
            onClick={handleLogin}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-800"
          >
            Login
          </button>
          <button
            onClick={handleSignUp}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-800"
          >
            Register
          </button>
        </div>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        
        <p className="text-2xl md:text-4xl lg:text-6xl text-white font-bold inter-var text-center">
          Welcome to Movie Review 
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Review, Share and Rate
        </p>
      </WavyBackground>
    </div>
  );
};

export default Home;
