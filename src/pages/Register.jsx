import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <div className="form-control">
            <label className="label">Name</label>
            <input type="text" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">Email</label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">Password</label>
            <input type="password" placeholder="password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="text-sm text-center mt-2">
            Already have an account? <Link to="/login" className="text-primary">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;
