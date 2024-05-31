import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="text-yellow-100 flex justify-center bg-red-400 gap-4">
      <h2>hello</h2>
      <NavLink
        to="/home/test"
        className={({ isActive }) => {
          `${isActive && "text-green-300"}`;
        }}
      >
        test
      </NavLink>
    </div>
  );
}

export default Home;
