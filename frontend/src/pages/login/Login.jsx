import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();


    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-white my-5'>
                    Login
                    <span className='text-blue-500'> ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to="/signup" className='text-sm hover:underline hover:text-blue-500 mt-5 inline-block'>
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-5 text-blue-500 hover:text-white hover:bg-blue-500 border-blue-500' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>


            </div>

            {/* <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-white'>
                    Login
                    <span className='text-blue-500'> ChatApp</span>
                </h1>
                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
                    </div>
                </form>
                <a href="#" className='text-sm hover:underline hover:text-blue-500 mt-5 inline-block'>
                    {"Don't"} have an account?
                </a>

                <div>
                    <button className='btn btn-block btn-sm mt-5'>Login</button>
                </div>

            </div>



        </div> */}



        </div>
    )
}

export default Login