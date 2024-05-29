import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Loginform = ({onClose}) => {
    const LoginformRef = useRef();
    const navigate = useNavigate();
    
    const closeLoginform = (e)=>{
      if(LoginformRef.current === e.target){
        onClose();
      }
    }


  return (
    <div ref={LoginformRef}  onClick={closeLoginform} className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-20 bg-white">
      <div class=" fixed bg-white z-10 w-full max-w-md p-4 bg-white rounded-lg shadow-md  md:right-96 md:top-16 mt-12  ">
        <div class="text-end mb-8 " >
          <button class="text-2xl font-bold text-gray-800 "onClick={() => onClose()}><i class="fa-regular fa-x text-red-700"></i></button>
        </div>
        <form class="space-y-4 ">
          <div class="flex items-center">
            <button
              type="button"
              class="flex items-center justify-center px-4 py-2 mr-2 text-sm font-medium text-center text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              <i class="fab fa-google"></i>
              <span class="ml-2">Log in with Google</span>
            </button>
            <button
              type="button"
              class="flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              <i class="fab fa-apple"></i>
              <span class="ml-2">Log in with Apple</span>
            </button>
          </div>
          <div class="flex flex-col space-y-2">
            <label for="email" class="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div class="flex flex-col space-y-2">
            <label for="password" class="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              class="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label for="remember" class="text-sm ml-2 text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" class="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
          <button onClick={navigate("/Admineditcategory")}
            type="submit"
            class="w-full px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Sign in to your account
          </button>
        </form>
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-500">
            Don't have an account yet?{" "}
            <a href="#" class="text-sm text-blue-600 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
