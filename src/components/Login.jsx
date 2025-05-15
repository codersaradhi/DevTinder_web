import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../Utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("Chaitanyanaidu@gmail.com");
  const [password, setpassword] = useState("Tony@123");
  const navagite = useNavigate();
  const handlelogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL+"/captains/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(res.data)
      dispatch(addUser(res.data))
    } catch (err) {
      console.log(err);
    }
    return navagite("/profile") // it will redirects the page to home (usenavigate hook)
  };

  return (
    <div className="card bg-base-100 w-96 pt-10 shadow-xl ml-auto mr-auto">
      <div className="card-body ">
        <h2 className="card-title">Login</h2>
        <div className="flex flex-col">
          <label className="form-control w-full max-w-xs ">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Your email"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={handlelogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
