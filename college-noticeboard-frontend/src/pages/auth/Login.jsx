import { useNavigate } from "react-router-dom";
import { useState } from "react";
import img from "../../components/images/login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  // New state to track specific admin type
  const [adminType, setAdminType] = useState("Admin"); 

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    if (role === "STUDENT") {
      navigate("/dashboard/student");
    } else {
      // You can now use the adminType state here if your backend needs it
      console.log("Logging in as:", adminType);
      navigate("/dashboard/admin");
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 flex">
        <div className="w-[50%] bg-zinc-900" />
        <div className="w-[50%] bg-purple-400" />
      </div>

      <div className="min-h-screen flex justify-center items-center px-4 py-10">
        <div className="flex border border-t-0 rounded-2xl overflow-hidden shadow-neutral-800 shadow-xl w-full max-w-5xl h-[88vh] z-50">
          <div className="w-[50%] bg-zinc-900 flex items-center justify-center">
            <div className="w-full max-w-sm px-10">
              <h2 className="text-white text-3xl font-semibold mb-2">Login</h2>
              <p className="text-gray-400 mb-8">Enter your account details</p>

              {/* Main Role Selection */}
              <div className="flex gap-4 mb-4">
                <button
                  type="button"
                  onClick={() => setRole("STUDENT")}
                  className={`flex-1 py-2 rounded-lg border transition ${
                    role === "STUDENT" ? "bg-purple-500 text-white" : "border-white/30 text-white"
                  }`}
                >
                  Student
                </button>

                <button
                  type="button"
                  onClick={() => setRole("ADMIN")}
                  className={`flex-1 py-2 rounded-lg border transition ${
                    role === "ADMIN" ? "bg-purple-500 text-white" : "border-white/30 text-white"
                  }`}
                >
                  Admin
                </button>
              </div>

              {/* Specific Admin Type Selection (Only shows if Admin is selected) */}
              {role === "ADMIN" && (
                <div className="flex gap-2 mb-8 animate-in fade-in duration-300">
                  {["Admin", "Faculty", "Club"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setAdminType(type)}
                      className={`flex-1 py-1 text-xs rounded-md border transition ${
                        adminType === type ? "bg-purple-400 text-white" : "border-white/20 text-gray-400"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="text-gray-400 text-sm block mb-2">Username</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-600 text-white py-2 focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div className="mb-10">
                  <label className="text-gray-400 text-sm block mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-600 text-white py-2 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-500 hover:bg-purple-600 transition text-white py-3 rounded-lg font-medium"
                >
                  Login
                </button>
              </form>
            </div>
          </div>

          <div className="w-[50%] bg-purple-400 flex items-center justify-center">
            <img src={img} alt="Login Illustration" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;