import React from "react";

const Signup = () => {
  return (
    <div className="absolute inset-0 h-full w-full">
      <a
        href="/"
        className="ml-3 mt-3 text-[#5b5d4c] font-yomogi tracking-widest font-bold"
      >
        <span className="text-black font-extrabold text-2xl">m</span>inima
        <span className="text-black font-extrabold text-2xl animate-pulse">
          .
        </span>
      </a>
      <main className="border border-stone-500 border-opacity-60 w-[27rem] mx-auto mt-12 pt-20 pb-16">
        <h1 className="text-6xl tracking-widest font-bold text-center">
          SIGN UP!
        </h1>
        <form className="w-80 mt-12 mx-auto flex flex-col items-center justify-between tracking-wider text-lg gap-10">
          <div className="flex items-center gap-2">
            <label htmlFor="username" className="">
              Username •
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="outline-none px-2 text-2xl font-medium border-b-2 border-black border-opacity-40 bg-white bg-opacity-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="password" className="">
              Password •
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="outline-none px-2 text-2xl font-medium border-b-2 border-black border-opacity-40 bg-white bg-opacity-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="password" className="">
              Confirm •
            </label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              className="outline-none px-2 text-2xl font-medium border-b-2 border-black border-opacity-40 bg-white bg-opacity-0"
            />
          </div>
          <section className="w-full h-12 text-center">
            <input
              type="button"
              value="Sign up"
              className="px-7 py-1 text-2xl text-white bg-[#676b52]  border-t-2 border-l-2  rounded-sm outline outline-4 outline-black cursor-pointer hover:scale-[98%] active:scale-95 active:outline-[3px] active:border-0"
            />
          </section>
        </form>
        <p className="text-center text-stone-800 tracking-wide mt-3">
          Already a user?{" "}
          <a
            href="login"
            className="font-semibold hover:text-black transition-all duration-300"
          >
            Login here.
          </a>
        </p>
      </main>
    </div>
  );
};

export default Signup;
