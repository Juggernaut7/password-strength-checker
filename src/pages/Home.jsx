// src/pages/Home.jsx
import PasswordInput from "../components/PasswordInput";

const Home = () => {
  return (
    <section className="max-w-md mx-auto bg-white dark:bg-gray-900 shadow-xl p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center"> Password Strength Checker</h2>
      <PasswordInput />
    </section>
    
  );
};

export default Home;
