// import { useState } from "react"

// function Auth() {
//   const [isLogin, setIsLogin] = useState(true)

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">

//       {/* CARD */}
//       <div className="bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-md">

//         {/* TITLE */}
//         <h2 className="text-3xl font-serif font-bold text-center text-gray-800">
//           {isLogin ? "Welcome Back 💖" : "Create Account ✨"}
//         </h2>

//         <p className="text-center text-gray-500 mt-2">
//           {isLogin ? "Login to continue shopping" : "Join Miss Elegance today"}
//         </p>

//         {/* FORM */}
//         <form className="mt-6 space-y-4">

//           {!isLogin && (
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-300"
//             />
//           )}

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-300"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-300"
//           />

//           {!isLogin && (
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-300"
//             />
//           )}

//           {/* BUTTON */}
//           <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
//             {isLogin ? "Login" : "Sign Up"}
//           </button>

//         </form>

//         {/* TOGGLE */}
//         <p className="text-center text-gray-600 mt-4 text-sm">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}
//           <span
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-pink-500 font-semibold ml-1 cursor-pointer"
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </span>
//         </p>

//       </div>

//     </div>
//   )
// }

// export default Auth
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../services/authService";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // for redirect

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isLogin && password !== confirmPassword) {
        setMessage("Passwords do not match!");
        return;
      }

      if (isLogin) {
        await login(email, password);
        setMessage("Login successful!");

        // Redirect to home page after login
        navigate("/"); 
      } else {
        await register(email, password);
        setMessage("Registration successful! Please login.");
        setIsLogin(true);
      }
    } catch (err) {
      const errorData = err.response?.data;
      if (errorData) {
        if (errorData.detail) {
          setMessage(errorData.detail);
        } else if (typeof errorData === "object") {
          setMessage(Object.values(errorData).flat().join(" "));
        } else {
          setMessage("Something went wrong!");
        }
      } else {
        setMessage(err.message || "Network Error: Is the backend running?");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <div className="bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-serif font-bold text-center text-gray-800">
          {isLogin ? "Welcome Back 💖" : "Create Account ✨"}
        </h2>
        <p className="text-center text-gray-500 mt-2">
          {isLogin ? "Login to continue shopping" : "Join Miss Elegance today"}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          )}

          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {message && <p className="text-center mt-2 text-red-500">{message}</p>}

        <p className="text-center text-gray-600 mt-4 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-pink-500 font-semibold ml-1 cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;

