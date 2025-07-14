// src/App.jsx
import Header from "./components/Header";
import PasswordInput from "./components/PasswordInput";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors flex flex-col">
      <Header />
      <main className="flex-grow max-w-md mx-auto px-4 py-8">
        <PasswordInput />
      </main>
      <Footer />
    </div>
  );
}

export default App;
