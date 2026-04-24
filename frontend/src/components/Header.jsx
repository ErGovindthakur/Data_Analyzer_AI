import { useNavigate } from "react-router-dom";

export default function Header({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  // ✅ get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h1 className="text-lg font-semibold text-gray-700 dark:text-white">
        Welcome Back {user?.name || "User"} 👋
      </h1>

      <div className="flex gap-3">
        {/* 🌙 Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}