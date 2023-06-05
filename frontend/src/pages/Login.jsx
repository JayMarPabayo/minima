import React from "react";
import PixelButton from "../components/PixelButton";

const Login = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-zinc-900 h-96 w-80 border-zinc-700 border-2 px-3 py-2">
      <section>
        <PixelButton onClick={() => console.log("Clicked!")}>Login</PixelButton>
      </section>
    </div>
  );
};

export default Login;
