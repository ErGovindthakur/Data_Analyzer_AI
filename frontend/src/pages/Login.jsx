import { useState } from "react";
import API from "../utils/axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#8153FB] to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center mb-2">
          Data-Analyzer.AI
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Login to your account
        </p>

        <input
          name="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#8153FB]"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#8153FB]"
          onChange={handleChange}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-[#8153FB] text-white py-2 rounded-lg hover:opacity-90 transition"
        >
          Login
        </button>

        <p className="text-center text-sm mt-4">
          New here?{" "}
          <Link to="/register" className="text-[#8153FB] font-medium">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}