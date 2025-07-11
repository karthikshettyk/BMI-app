import React, { useState } from "react";
import {
  FaHeartbeat,
  FaSmile,
  FaFrown,
  FaExclamationTriangle,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import WeightChips from "./WeightChips";

export default function Home() {
  const [weight, setWeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  //const [darkMode, setDarkMode] = useState(false);

  const calculateBMI = () => {
    if (!weight || !heightFt || heightIn === "") {
      alert("Please enter valid weight and height");
      return;
    }

    const totalInches = parseInt(heightFt) * 12 + parseFloat(heightIn);
    const heightInMeters = totalInches * 0.0254;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);
    setStatus(getBMIStatus(bmiValue));
  };

  const getBMIStatus = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    else if (bmi < 24.9) return "Normal";
    else if (bmi < 29.9) return "Overweight";
    else return "Obese";
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Underweight":
        return <FaExclamationTriangle className="text-yellow-300 mr-2" />;
      case "Normal":
        return <FaSmile className="text-green-300 mr-2" />;
      case "Overweight":
        return <FaFrown className="text-orange-300 mr-2" />;
      case "Obese":
        return <FaHeartbeat className="text-red-400 mr-2" />;
      default:
        return null;
    }
  };

  const getBMIColor = (status) => {
    switch (status) {
      case "Underweight":
        return "text-yellow-400";
      case "Normal":
        return "text-green-400";
      case "Overweight":
        return "text-orange-400";
      case "Obese":
        return "text-red-500";
      default:
        return "text-white";
    }
  };

  const getHealthTip = (status) => {
    switch (status) {
      case "Underweight":
        return "underweighttips";
      case "Normal":
        return "normalweighttips";
      case "Overweight":
        return "overweighttips";
      case "Obese":
        return "obeseweighttips";
      default:
        return "";
    }
  };

  const bmiRanges = [
    { label: "Underweight", color: "bg-yellow-400", range: [0, 18.5] },
    { label: "Normal", color: "bg-green-400", range: [18.5, 24.9] },
    { label: "Overweight", color: "bg-orange-400", range: [25, 29.9] },
    { label: "Obese", color: "bg-red-500", range: [30, 40] },
  ];

  const resetForm = () => {
    setWeight("");
    setHeightFt("");
    setHeightIn("");
    setBmi(null);
    setStatus("");
  };

  return (
    <div>
      <Header></Header>
      <div className="top-ad-code"></div>

      <div className="mt-16 min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center px-4">
        <div className="mt-3 max-w-3xl bg-white rounded-2xl shadow-lg p-8 text-gray-800">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Welcome to KS BMI App – Your Personalized Health Companion 💪
          </h1>

          <p className="text-lg mb-6 text-center">
            Take control of your health with our smart and easy-to-use Body Mass
            Index (BMI) calculator. Whether you're on a fitness journey,
            tracking your wellness goals, or just curious about your health
            status — our app provides instant BMI insights based on your height
            and weight.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-600">
              ✨ Why Use KS BMI App?
            </h2>
            <ul className="list-disc pl-6 text-base">
              <li>✅ Quick & Accurate BMI calculation</li>
              <li>✅ Clean & User-Friendly Interface</li>
              <li>✅ Tailored for All Age Groups</li>
              <li>✅ Free to Use, Anytime Anywhere</li>
              <li>✅ No Signup Required</li>
            </ul>
          </div>

          <div className="mt-6 space-y-4">
            <h2 className="text-2xl font-semibold text-purple-600">
              🚀 How It Works:
            </h2>
            <ol className="list-decimal pl-6 text-base">
              <li>
                Enter your <strong>weight</strong> in kilograms.
              </li>
              <li>
                Add your <strong>height</strong> in feet and inches.
              </li>
              <li>
                Click <strong>Calculate</strong> to get your BMI and see which
                category you fall into:
                <ul className="list-disc pl-6 mt-2">
                  <li>Underweight</li>
                  <li>Normal</li>
                  <li>Overweight</li>
                  <li>Obese</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 rounded-md">
            💡 <strong>Tip:</strong> Knowing your BMI can be your first step
            toward a healthier life.
          </div>
        </div>
      </div>

      <div
        className={`pt-4 pb-4 flex  justify-center  transition-all duration-300 ${"bg-gradient-to-r from-blue-400 to-purple-500 text-white"}`}
      >
        <div className="relative w-full max-w-md">
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative z-10">
            <div className="mb-4">
              <label className="block text-sm mb-1 font-bold">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g 50"
                className="w-full p-3 rounded-xl text-gray-900 bg-white focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-1 font-bold">Height</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                  placeholder="ft"
                  className="w-1/2 p-3 rounded-xl text-gray-900 bg-white focus:outline-none"
                />
                <input
                  type="number"
                  value={heightIn}
                  onChange={(e) => setHeightIn(e.target.value)}
                  placeholder="in"
                  className="w-1/2 p-3 rounded-xl text-gray-900 bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={calculateBMI}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white py-3 rounded-xl font-semibold text-lg shadow-lg"
              >
                Calculate
              </button>
              <button
                onClick={resetForm}
                className="flex-1 bg-red-500 hover:bg-red-600 transition-colors text-white py-3 rounded-xl font-semibold text-lg shadow-lg"
              >
                Reset
              </button>
            </div>

            {bmi && (
              <>
                <div className="mt-6 text-center">
                  <p className="text-xl font-semibold">Your BMI is</p>
                  <p className={`text-4xl font-bold ${getBMIColor(status)}`}>
                    {bmi}
                  </p>
                  <div className="flex justify-center items-center mt-2 text-lg">
                    {getStatusIcon(status)}
                    <span>{status}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="font-semibold text-center mb-2">
                    BMI Classification
                  </p>
                  <div className="flex w-full h-6 rounded-lg overflow-hidden">
                    {bmiRanges.map((item, idx) => {
                      const [min, max] = item.range;
                      const isActive = bmi >= min && bmi < max;
                      return (
                        <div
                          key={idx}
                          className={`${item.color} flex-1 relative`}
                        >
                          {isActive && (
                            <div className="absolute top-[-16px] left-1/2 transform -translate-x-1/2 text-xs font-bold">
                              ▲
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between text-xs mt-1 px-1">
                    {bmiRanges.map((item, idx) => (
                      <span key={idx}>{item.label}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 bg-white/30 backdrop-blur-sm p-4 rounded-xl text-sm text-center">
                  <Link to={`/${getHealthTip(status)}`} className="font-bold text-black">Click me to get Food and Exercise Tips</Link>

                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="bottom-ad-code"></div>

      <WeightChips></WeightChips>
      <Footer></Footer>
    </div>
  );
}
