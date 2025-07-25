// src/utils/generatePassword.js
const generatePassword = (length = 12) => {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
};

export default generatePassword;

