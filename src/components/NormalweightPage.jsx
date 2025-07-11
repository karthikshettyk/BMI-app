import React from "react";

const NormalBMITips = () => {
  return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-10 px-6 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700">
            Tips for Normal BMI Body
          </h1>

          {/* Food Tips Section */}
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              ✅ Food Tips
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Follow the 80-20 Rule:</strong> Eat clean 80% of the
                time and enjoy small indulgences 20% of the time.
              </li>
              <li>
                <strong>Stay Hydrated:</strong> Drink 2–3 liters of water daily.
                Try lemon or mint-infused water.
              </li>
              <li>
                <strong>Balance Macronutrients:</strong> Include protein,
                healthy fats, and complex carbs in every meal.
              </li>
              <li>
                <strong>Never Skip Breakfast:</strong> Choose high-protein
                breakfasts like eggs or smoothies.
              </li>
              <li>
                <strong>Watch Portion Sizes:</strong> Use smaller plates and eat
                until you're 80% full.
              </li>
              <li>
                <strong>Mindful Eating:</strong> Avoid screens while eating and
                chew thoroughly.
              </li>
              <li>
                <strong>Limit Sugar & Processed Foods:</strong> Reduce snacks,
                sweets, and sugary drinks.
              </li>
              <li>
                <strong>Regular Meal Timings:</strong> Eat at the same times
                daily to control appetite.
              </li>
            </ul>
          </div>

          {/* Exercise Tips Section */}
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              🏃‍♂️ Exercise Tips
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Follow a 4:3 Routine:</strong> 4 days of workouts, 3
                days of stretching or light activity.
              </li>
              <li>
                <strong>Include Strength Training:</strong> 2–3 times a week
                using bodyweight or light weights.
              </li>
              <li>
                <strong>Do Cardiovascular Activities:</strong> Jog, cycle, or
                dance 3x/week for 30–45 mins.
              </li>
              <li>
                <strong>Stretch Daily:</strong> Helps improve flexibility and
                prevent injuries.
              </li>
              <li>
                <strong>Walk More:</strong> Target 7,000–10,000 steps per day.
              </li>
              <li>
                <strong>Try Fun Fitness:</strong> Zumba, yoga, hiking, or sports
                with friends.
              </li>
              <li>
                <strong>Track Your Progress:</strong> Use apps or journals to
                stay consistent (but don’t obsess).
              </li>
              <li>
              <strong>Prioritize Rest:</strong> Get 7–8 hours of sleep and take rest days.
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default NormalBMITips;
