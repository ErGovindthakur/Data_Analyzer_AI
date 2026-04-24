import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkStyle =
    "block px-3 py-2 rounded-lg transition";

  const activeStyle =
    "bg-white text-[#8153FB] font-semibold";

  const inactiveStyle =
    "text-white/80 hover:bg-white/20";

  return (
    <div className="w-60 bg-[#8153FB] dark:bg-gray-800 text-white min-h-screen p-5">
      <h2 className="text-xl font-bold mb-6">AI Dashboard</h2>

      <ul className="space-y-3">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            📊 Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            ✅ Tasks
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            📈 Analytics
          </NavLink>
        </li>
      </ul>
    </div>
  );
}