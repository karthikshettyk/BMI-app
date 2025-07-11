import React from "react";

const UnderweightTips = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-orange-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-yellow-600 mb-6">
           Tips for Underweight BMI Body
        </h1>

        {/* Food Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-3">
            🥗 Food Tips
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Eat calorie-dense, nutrient-rich foods:</strong> whole
              grains, nuts, seeds, eggs, dairy.
            </li>
            <li>
              <strong>Frequent meals:</strong> Eat 5–6 times a day with small
              portions.
            </li>
            <li>
              <strong>Smoothies & shakes:</strong> Add banana, oats, milk,
              peanut butter, honey.
            </li>
            <li>
              <strong>Healthy extras:</strong> Add cheese, nuts, and seeds to
              dishes.
            </li>
            <li>
              <strong>Avoid:</strong> Junk food, excess sugar, and deep-fried
              items.
            </li>
          </ul>
        </section>

        {/* Exercise Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-3">
            💪 Exercise Tips
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Strength training (3–4x/week):</strong> Push-ups, squats,
              dumbbells, pull-ups.
            </li>
            <li>
              <strong>Yoga & Pilates:</strong> Improve strength and stimulate
              appetite.
            </li>
            <li>
              <strong>Avoid excess cardio:</strong> Light walking is okay, but
              don’t overdo running or cycling.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default UnderweightTips;
