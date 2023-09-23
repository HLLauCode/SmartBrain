import React from "react";

const SignIn = ({onRouteChange}) => {
    return (
        <div className="center">
            <div className="w-full max-w-xs">
            
            <form className="shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-3xl font-bold mb-1" >Sign in</h1>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                </div>
                <div className="flex items-center justify-between">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                    onClick={() => onRouteChange('home')}
                >
                    Sign In
                </button>
                <button 
                    className="bg-white hover:text-blue-700 text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                    onClick={() => onRouteChange('register')}
                >
                    Register
                </button>
                </div>
            </form>
            </div>
        </div>

    )
}

export default SignIn;