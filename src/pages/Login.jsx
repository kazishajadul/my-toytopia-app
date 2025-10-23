import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => navigate(from, { replace: true }))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50">
      <div className="bg-white p-8 shadow-lg rounded-2xl w-80 text-center">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-3">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button className="btn bg-pink-500 text-white w-full hover:bg-pink-600">
            Login
          </button>
        </form>

        <div className="mt-3">
          <button onClick={handleGoogle} className="btn btn-outline w-full">
            Continue with Google
          </button>
        </div>

        <p className="mt-3 text-sm">
          New here?{" "}
          <Link to="/register" className="text-pink-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

