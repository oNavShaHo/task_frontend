import React, { useState,useContext } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { ProductDataContext } from "../context/context";
function Signup() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setUserId } = useContext(ProductDataContext);
  async function Go() {
    try {
      if (!username || !email || !password) {
        setError("Please fill in all fields.");
        return;
      }

     

      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password
        })
      });

      const data = await response.json();
      console.log('User added successfully:', data);
      setError(null); 
      setUserId(data.id);
      navigate('/Home'); 
    } catch (error) {
      console.error('Error adding user:', error);
      setError("An error occurred. Please try again.");
    }
  }

  return (
    <div className="h-[91.2vh]">
      <Navbar />
      <div className="flex justify-center items-center h-full bg-blue-200">
        <box className="bg-white w-2/4 flex flex-col gap-3 p-8">
          <h1 className="text-[2rem] font-medium">Sign Up</h1>
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-200 border-2 rounded-xl px-3 py-1"
          />
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
            <Link to="/Login">
              <p>Already a user? Login</p>
            </Link>
            <button onClick={Go} className="bg-blue-600 text-white border-3 rounded px-4 py-2">
              Sign up
            </button>
          </div>
        </box>
      </div>
    </div>
  );
}

export default Signup;
