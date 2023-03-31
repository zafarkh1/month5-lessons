import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from '../firebase'

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

	const handelRegister = async (e) => {
		e.preventDefault()

		if(!setEmail || !setPassword || !setConfirmPassword) {
			setError("Please fii out all fields")
			return
		}

		if(confirmPassword !== password) {
			setError("Password does not match")
			return
		}

		try {
			await firebase.auth().createUserWithEmailAndPassword(email, password)
		} catch (error) {
			setError(error)
		}
	}

  return (
    <div>
      <h2>Register</h2>
      {error}
      <form onSubmit={handelRegister}>
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm Password:{" "}
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
				<button type="submit">Register</button>
      </form>
			<span>Already have account?</span>
			<Link to='/login'>Log in</Link>
    </div>
  );
};

export default Register;
