import { useState } from "react";
import UnderweightTips from "./UnderweightPage";
import OverWeightTips from "./OverweightPage";
import NormalweightTips from "./NormalweightPage";
import ObeseweightTips from "./ObeseweightPage"

const chipData = {
  UnderWeight: {
    comp: <UnderweightTips></UnderweightTips>,
    color: "bg-yellow-400",
  },
  Normal: {
    comp: <NormalweightTips></NormalweightTips>,
    color: "bg-green-400",
  },
  OverWeight: {
    comp: <OverWeightTips></OverWeightTips>,
    color: "bg-orange-400",
  },
  Obese: {
    comp:<ObeseweightTips></ObeseweightTips>,
    color: "bg-red-500",
  },
};

const WeightChips = () => {
  const [selectedChip, setSelectedChip] = useState(null);

  return (
    <div className="pb-2 flex flex-col items-center bg-gradient-to-r from-blue-400 to-purple-500 ">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Choose your BMI result
      </h1>

      <div className="flex flex-wrap gap-4 mb-8">
        {Object.entries(chipData).map(([chip, data]) => (
          <button
            key={chip}
            className={`px-5 py-2 rounded-full text-white font-medium shadow-md transition-all transform 
              ${data.color} 
              ${
                selectedChip === chip
                  ? "scale-105 ring-2 ring-white"
                  : "opacity-90 hover:opacity-100"
              }`}
            onClick={() => setSelectedChip(chip)}
          >
            {chip}
          </button>
        ))}
      </div>

      {selectedChip && (
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2 text-gray-800">
            {selectedChip}
          </h2>
          {chipData[selectedChip].comp}
        </div>
      )}
    </div>
  );
};

export default WeightChips;
