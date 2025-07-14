// src/components/StrengthBar.jsx
const getStrengthLabel = (score) => {
  return ["Too Weak", "Weak", "Fair", "Good", "Strong"][score];
};

const StrengthBar = ({ score }) => {
  const colors = [
    "bg-red-500",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-blue-400",
    "bg-green-500",
  ];

  return (
    <div>
      <div className="flex gap-1 h-2 mb-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`flex-1 rounded ${i <= score - 1 ? colors[score] : "bg-gray-200 dark:bg-gray-700"}`}
          />
        ))}
      </div>
      <p className="text-sm text-center font-medium text-gray-600 dark:text-gray-300">
        {getStrengthLabel(score)}
      </p>
    </div>
  );
};

export default StrengthBar;
