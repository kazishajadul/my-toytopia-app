import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <div className="form-control">
            <label className="label">Email</label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">Password</label>
            <input type="password" placeholder="password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-sm text-center mt-2">
            Don’t have an account? <Link to="/register" className="text-primary">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
