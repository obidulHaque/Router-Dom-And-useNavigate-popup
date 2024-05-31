import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const handeleNavigate = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
    }
  };
  return (
    <div>
      <div className="flex justify-between text-black bg-slate-500 p-5 mt-2 h-[2vw] items-center rounded-md">
        <h1>Navbar</h1>
        <nav className="flex gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-red-300" : "text-yellow-200"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${isActive ? "text-red-300" : "text-yellow-200"}`
            }
          >
            login
          </NavLink>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              `${isActive ? "text-red-300" : "text-yellow-200"}`
            }
          >
            signup
          </NavLink>
          <NavLink
            to="/dashbord"
            className={({ isActive }) =>
              `${isActive ? "text-red-300" : "text-yellow-200"}`
            }
          >
            dashbord
          </NavLink>
          <select
            name=""
            id=""
            className="text-yellow-200 bg-slate-400"
            onClick={handeleNavigate}
          >
            <option value="/">Home</option>
            <option value="/login">Login</option>
            <option value="/signin">signup</option>
          </select>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
