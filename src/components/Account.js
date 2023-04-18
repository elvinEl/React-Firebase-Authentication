import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Account() {
  const { user, logout } = UserAuth();
  const navigate =useNavigate()

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="max-w-[90%] mx-auto">
      <p className="text-xl font-medium py-4">Hesab</p>
      <p>İstifadəçi emaili:{user && user.email}</p>
      <button onClick={handleLogout} className="border px-6 py-2 my-4">
        Çıxış et
      </button>
    </div>
  );
}

export default Account;
