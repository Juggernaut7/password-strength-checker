// src/components/Checklist.jsx
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const checks = [
  { label: "At least 8 characters", test: (p) => p.length >= 8 },
  { label: "Uppercase letter", test: (p) => /[A-Z]/.test(p) },
  { label: "Lowercase letter", test: (p) => /[a-z]/.test(p) },
  { label: "Number", test: (p) => /[0-9]/.test(p) },
  { label: "Symbol", test: (p) => /[^A-Za-z0-9]/.test(p) },
];

const Checklist = ({ password }) => {
  return (
    <ul className="text-sm space-y-1">
      {checks.map((item, idx) => {
        const passed = item.test(password);
        return (
          <li key={idx} className={`flex items-center gap-2 ${passed ? "text-green-500" : "text-gray-400"}`}>
            {passed ? <FaCheckCircle /> : <FaTimesCircle />}
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};

export default Checklist;
