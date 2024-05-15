import test from "../assets/test2.jpg";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <section className="w-full flex items-center h-[100vh]">
      <div className="w-[45%] h-full">
        <img className="w-full h-full object-cover" src={test} alt="test" />
      </div>
      <div className="w-[55%] px-20">
        <h2 className="text-2xl my-6">Employee Sign In</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="flex flex-col my-3">
            <label className="mb-1">First Name</label>
            <input type="text" className="w-full px-3 py-2 leading-tight border rounded-md shadow-sm focus:outline-none focus:border-red-400" />
          </div>
          <div className="flex flex-col my-3">
            <label className="mb-1">Last Name</label>
            <input type="text" className="w-full px-3 py-2 leading-tight border rounded-md shadow-sm focus:outline-none focus:border-red-400" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Email</label>
            <input type="email" className="w-full px-3 py-2 leading-tight border rounded-md shadow-sm focus:outline-none focus:border-red-400" />
          </div>
          <div className="flex flex-col my-3">
            <label className="mb-1">Password</label>
            <input type="password" className="w-full px-3 py-2 leading-tight border rounded-md shadow-sm focus:outline-none focus:border-red-400" />
          </div>
          {/* <p>
            Already have an account?
            <Link to="/" className="text-red-600 ml-1">
              Log In
            </Link>
          </p> */}

          <button
            onClick={handleSubmit}
            className="px-7 py-2 bg-red-600 my-3 text-white rounded-md"
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
