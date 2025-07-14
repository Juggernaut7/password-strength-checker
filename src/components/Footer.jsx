// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 border-t pt-4 pb-6 text-center text-sm text-gray-600 dark:text-gray-400">
      <p>© {new Date().getFullYear()} Juggernaut Codes — All rights reserved.</p>
      <div className="flex justify-center mt-2 gap-4 text-xl">
        <a
          href="https://github.com/Juggernaut7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/abdulkabir"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/Kaybee77770"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition"
        >
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
