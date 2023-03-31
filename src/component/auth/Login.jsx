import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShhowPassword] = useState(false);
  const [error, setError] = useState("");

  const handellogin = async (e) => {
    e.preventDefault();

    if (!setEmail || !setPassword) {
      setError("Please fii out all fields");
      return;
    } else {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        if(error.code === "auth/user-not-found") {
					setError("User not found")
				} else if (error.code === "auth/wrong-password") {
					setError("Wrong password try again")
				} else {
					setError(error.message)
				}
      }
    }
  };

	const toggleShowPassword = () => {
		setShhowPassword(!showPassword)
	}

  return (
    <div>
      <h2>Login</h2>
      {error}
      <form onSubmit={handellogin}>
        <label>
          Email:{" "}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={toggleShowPassword}>{showPassword ? "Hide" : "Show Password"}</button>
				<span>Don't have an account?</span>
				<Link to='/register'>Register</Link>
        <button type="submit">Login</button>
				<span>Forget password</span>
				<Link to='/forgot'>Forgot</Link>
      </form>
    </div>
  );
};

export default Login;
