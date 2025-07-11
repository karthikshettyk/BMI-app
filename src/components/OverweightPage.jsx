import React from "react";

const OverweightTips = () => {
  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 flex items-center justify-center px-4 py-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl w-full space-y-6">
          <h1 className="text-3xl font-bold text-center text-orange-800">
            Tips for Overweight BMI Body
          </h1>

          <section>
            <h2 className="text-2xl font-semibold text-orange-700 mb-4">
              🥗 Food Tips
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-gray-800">
              <li>
                <strong>Portion Control:</strong> Use smaller plates; follow 50%
                veggies, 25% protein, 25% carbs.
              </li>
              <li>
                <strong>High-Fiber Foods:</strong> Oats, whole grains, lentils,
                vegetables, fruits.
              </li>
              <li>
                <strong>Lean Proteins:</strong> Eggs, chicken, tofu, fish, Greek
                yogurt.
              </li>
              <li>
                <strong>Healthy Fats Only:</strong> Nuts, seeds, avocado, olive
                oil. Avoid trans fats.
              </li>
              <li>
                <strong>Hydration:</strong> Drink 2.5–3L water daily. Skip
                sugary drinks.
              </li>
              <li>
                <strong>Limit Refined Sugars & Carbs:</strong> Avoid white bread
                and sweets. Choose whole grains.
              </li>
              <li>
                <strong>Meal Timing:</strong> Small meals every 3–4 hrs. No
                late-night eating.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-orange-700 mb-4">
              🏃‍♂️ Exercise Tips
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-gray-800">
              <li>
                <strong>Low-Impact Cardio:</strong> Brisk walking, swimming, or
                cycling (30–45 mins/day).
              </li>
              <li>
                <strong>Strength Training:</strong> Bodyweight exercises or
                resistance bands 3x/week.
              </li>
              <li>
                <strong>Stretching:</strong> Do yoga or flexibility exercises
                daily to prevent injuries.
              </li>
              <li>
                <strong>HIIT (later stages):</strong> Short bursts of intense
                workouts when stamina improves.
              </li>
              <li>
                <strong>Step Goals:</strong> Aim for 8,000–10,000 steps per day.
              </li>
              <li>
                <strong>Consistency:</strong> Be regular and listen to your body
                to avoid injury.
              </li>
            </ul>
          </section>
        </div>
      </div>
  );
};

export default OverweightTips;
