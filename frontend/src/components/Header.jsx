import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")); // ✅ get user

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // ✅ clear user also
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
      <h1 className="text-lg font-semibold">
        Hello, {user?.name || "User"} 👋
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}