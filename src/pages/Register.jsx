import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    register(email, password)
      .then(() => {
        setError("");
        navigate("/");
      })
      .catch(() => setError("Registration failed. Try again."));
  };

  return (
    <div className="bg-gradient-to-r from-[#fdf3f0] via-[#faf0fa] to-[#f5f7fa] min-h-screen flex items-center justify-center px-4">
      <div className="bg-white/80 p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Register at ToyTopia</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input type="email" name="email" placeholder="Email" required className="input input-bordered w-full" />
          <input type="password" name="password" placeholder="Password" required className="input input-bordered w-full" />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="btn bg-pink-500 hover:bg-pink-600 text-white w-full">Register</button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account? <Link to="/login" className="text-pink-600 font-semibold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
