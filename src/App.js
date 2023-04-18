import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

// Pages
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <>
      <p className="flex justify-center items-center text-xl font-medium">Firebase Auth</p>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
