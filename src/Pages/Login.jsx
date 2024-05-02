import { Link } from 'react-router-dom';
import test from '../assets/test2.jpg';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  }

  return (
    <section className='w-full flex items-center h-[100vh]'>
      <div className='w-[45%] h-full'>
        <img className="w-full h-full object-cover" src={test} alt="test" />
      </div>
      <div className='w-[55%] px-20'>
        <h2 className='text-2xl my-6'>Sign In</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label className='mb-1'>Email</label>
            <input type="email" className='border'/>
            {/* error */}
          </div>
          <div className='flex flex-col my-3'>
            <label className='mb-1'>Password</label>
            <input type="password" className='border' />
            {/* error */}
          </div>

          <p>Don&apos;
            t have an account? 
            <Link to="/signup" className='text-red-600 ml-1'>Sign up</Link> 
          </p>

          <button 
            onClick={handleSubmit}
            className='px-5 py-2 bg-red-600 my-3 text-white'
          >
            Login
          </button>
        </form>
      </div>
    </section>
  )
}

export default Login