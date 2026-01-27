import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // later: call login() from AuthContext
  };

  return (
    <div className="relative min-h-screen">
      {/* Page background split */}
      <div className="absolute inset-0 -z-10 flex">
        <div className="w-[50%] bg-zinc-900" />
        <div className="w-[50%] bg-purple-400" />
      </div>

      <div className="min-h-screen flex justify-center items-center px-4 py-10">
        <div className="flex border border-t-0 rounded-2xl overflow-hidden shadow-neutral-800 shadow-xl w-full max-w-5xl h-[88vh] z-50 ">
        
      {/* LEFT SIDE – LOGIN FORM */}
      <div className="w-[50%] bg-zinc-900 flex items-center justify-center">
        <div className="w-full max-w-sm px-10">
          <h2 className="text-white text-3xl font-semibold mb-2">
            Login
          </h2>
          <p className="text-gray-400 mb-8">
            Enter your account details
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-6">
              <label className="text-gray-400 text-sm block mb-2">
                Username
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 text-white py-2 focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* Password */}
            <div className="mb-10">
              <label className="text-gray-400 text-sm block mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 text-white py-2 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 transition text-white py-3 rounded-lg font-medium"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE – WELCOME PANEL */}
      <div className="w-[50%] bg-purple-400" />
        
      </div>
    </div>

    </div>
  );
};

export default Login;
