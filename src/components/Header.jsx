import DarkModeToggle from "./DarkModeToggle";

const Header = () => (
  <header className="flex justify-between items-center py-4 px-6 bg-indigo-600 text-white shadow">
    <h1 className="text-xl font-bold">Password Pro </h1>
    <DarkModeToggle />
  </header>
);

export default Header;
