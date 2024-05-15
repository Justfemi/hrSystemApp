import { Link } from "react-router-dom";
import test from "../assets/test2.jpg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <section className="w-full flex items-center h-[100vh]">
      <div className="hidden md:block w-[40%] h-full">
        <img className="w-full h-full object-cover" src={test} alt="test" />
      </div>
      <div className="w-full md:w-[60%] sm:px-20 px-10">
        <h2 className="text-2xl my-6">Sign In</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="mb-1">Email</label>
            <input type="email" className="w-full px-3 py-2 leading-tight border rounded-md shadow-sm focus:outline-none focus:border-red-400"  />
          </div>
          <div className="flex flex-col my-3">
            <label className="mb-1">Password</label>
            <input type="password" className="w-full px-3 py-2 leading-tight border rounded-md shadow-sm focus:outline-none focus:border-red-400" />
          </div>

          <p>
            Don&apos; t have an account?
            <Link to="/signup" className="text-red-600 ml-1">
              Sign up
            </Link>
          </p>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-red-600 my-3 text-white rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
