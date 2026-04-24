import { useState } from "react";
import API from "../utils/axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await API.post("/auth/register", form);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#8153FB] to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center mb-2">
          Create Account
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Join Data-Analyzer.AI
        </p>

        <input
          name="name"
          placeholder="Full Name"
          className="w-full mb-3 p-2 border rounded focus:ring-2 focus:ring-[#8153FB]"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded focus:ring-2 focus:ring-[#8153FB]"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-[#8153FB]"
          onChange={handleChange}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-[#8153FB] text-white py-2 rounded-lg hover:opacity-90 transition"
        >
          Register
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-[#8153FB] font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}