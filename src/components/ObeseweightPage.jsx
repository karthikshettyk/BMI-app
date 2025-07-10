import React from 'react';

const ObeseBMITips = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-rose-200 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-red-700">Tips for Obese BMI Body</h1>

        {/* Food Tips */}
        <div>
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">🥗 Food Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Focus on whole foods: fruits, vegetables, lean proteins, and whole grains.</li>
            <li>Avoid ultra-processed foods and sugary drinks.</li>
            <li>Practice portion control and mindful eating.</li>
            <li>Eat high-fiber foods like oats, lentils, and leafy greens.</li>
            <li>Include protein in every meal to preserve muscle.</li>
            <li>Drink 8–10 glasses of water daily.</li>
            <li>Limit refined carbs like white bread and sweets.</li>
            <li>Plan meals in advance to avoid impulsive eating.</li>
          </ul>
        </div>

        {/* Exercise Tips */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">🏃‍♂️ Exercise Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Start with low-impact activities like walking or swimming.</li>
            <li>Exercise consistently—30 minutes a day, 5 days a week.</li>
            <li>Add light strength training twice a week.</li>
            <li>Try chair exercises if mobility is limited.</li>
            <li>Stay active throughout the day with small movements.</li>
            <li>Track your progress using an app or journal.</li>
            <li>Include stretching, yoga, or pilates to improve flexibility.</li>
            <li>Get support from a friend or trainer.</li>
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default ObeseBMITips;
