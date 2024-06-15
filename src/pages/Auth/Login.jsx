import React from "react";
import logo from "../../assets/logo.png";
import "./auth.css";

const Login = () => {
  return (
    <main className="flex justify-center items-center h-screen gap-10">
      <section>
        <div className="flex">
          <img src={logo} alt="logo" className="w-20" />
          <h1 className="text-6xl font-bold company">Benix Space</h1>
        </div>

        <p className=" text-center ms-20 font-semibold ">
          Explore the idea throughout the world
        </p>
      </section>

      <section className="bg-white w-[500px] py-8 rounded-xl px-3 shadow-2xl">
        <h2 className=" text-center font-bold">Sign In</h2>

        <section className="mt-10">
          <form>
            <div className="my-3">
              <input
                type="text"
                placeholder="Username"
                className=" bg-gray-200 h-16 w-full px-3 rounded-xl outline-none"
              />
            </div>

            <div className="flex items-center gap-5">
              <input
                type="password"
                placeholder="Password"
                className=" bg-gray-200 h-16 w-full px-3 rounded-xl outline-none"
              />
            </div>

            <button className="btn mt-3 w-full py-3">Sign in</button>
          </form>
        </section>

        <div className="flex justify-center mt-7 gap-3 items-center">
          <a href="#">Don't have an account?</a>{" "}
          <a href="#" className="btn px-4 py-1">
            Sign up
          </a>
        </div>
      </section>
    </main>
  );
};

export default Login;
