import { useState, useEffect } from "react";
import zxcvbn from "zxcvbn";
import StrengthBar from "./StrengthBar";
import Checklist from "./Checklist";
import { toast } from "react-toastify";
import { FaClipboard, FaRandom } from "react-icons/fa";
import generatePassword from "../utils/generatePassword";

let warned = false;

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const result = zxcvbn(password);
    setScore(result.score);
    if (password.length > 0 && result.score < 2 && !warned) {
      toast.warn("Try a stronger password!", { autoClose: 1500 });
      warned = true;
    } else if (result.score >= 2) {
      warned = false;
    }
  }, [password]);

  const handleCopy = () => {
    if (!password) return toast.error("Nothing to copy");
    navigator.clipboard.writeText(password);
    toast.success("Password copied!");
  };

  const handleGenerate = () => {
    const newPass = generatePassword();
    setPassword(newPass);
    toast.success("Generated new password!");
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter or generate password"
          className="flex-1 px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800"
        />
        <button onClick={handleCopy} className="text-indigo-600 dark:text-indigo-300 text-xl">
          <FaClipboard />
        </button>
        <button onClick={handleGenerate} className="text-green-600 dark:text-green-300 text-xl">
          <FaRandom />
        </button>
      </div>
      <StrengthBar score={score} />
      <Checklist password={password} />
    </div>
  );
};

export default PasswordInput;
