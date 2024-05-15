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
        <h2 className="text-3xl my-6">Employee Sign In</h2>
        <form
          className="my-3"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mb-3">
            <label className="mb-1">First Name</label>
            <input type="text" className="w-full px-3 py-2 leading-tight border rounded-md shadow-sm focus:outline-none focus:border-red-400"  />
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1">Last Name</label>
            <input type="text" className="w-full px-3 py-2 leading-tight border rounded-md shadow-sm focus:outline-none focus:border-red-400"  />
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1">Email</label>
            <input type="email" className="w-full px-3 py-2 leading-tight border rounded-md shadow-sm focus:outline-none focus:border-red-400"  />
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1">Password</label>
            <input type="password" className="w-full px-3 py-2 leading-tight border rounded-md shadow-sm focus:outline-none focus:border-red-400" />
          </div>

          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-red-600 my-2 text-white rounded-md hover:bg-red-800 transition-colors duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
