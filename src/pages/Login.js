import React, { useState,useContext } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { ProductDataContext } from "../context/context";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { setUserId } = useContext(ProductDataContext);
  
  async function Go() {
    try {
      if (!email || !password) {
        setError("Please fill in both email and password.");
        return;
      }

      const response = await fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });

      const users = await response.json();
      const foundUser = users.find((user) => user.email === email && user.password === password);

      if (foundUser) {
        console.log('User logged in successfully:', foundUser);
        setError(null); // Clear any previous errors
        setUserId(foundUser.id);
        navigate('/Home'); // Redirect to home after successful login
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      console.error('Error checking user:', error);
      setError("An error occurred. Please try again.");
    }
  }

  return (
    <div className="h-[91.2vh]">
      <Navbar />
      <div className="flex justify-center items-center h-full bg-blue-200">
        <box className="bg-white w-2/4 flex flex-col gap-3 p-8">
          <h1 className="text-[2rem] font-medium">Login</h1>
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 border-2 rounded-xl px-3 py-1"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-200 border-2 rounded-xl px-3 py-1"
          />

          <div className="flex justify-between text-blue-500 mt-3">
            <Link to="/Signup">
              <p>New User? Create an account</p>
            </Link>
            <button onClick={Go} className="bg-blue-600 text-white border-3 rounded px-4 py-2">
              Login
            </button>
          </div>
        </box>
      </div>
    </div>
  );
}

export default Login;
