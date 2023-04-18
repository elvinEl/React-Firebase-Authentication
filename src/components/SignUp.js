import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import { UserAuth } from "../context/AuthContext";


const  SignUp = ()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate =useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[90%] mx-auto">
      <div>
        <p className="text-2xl font-bold py-2 mt-4">Yeni hesab yaradın</p>
        <p>
          Artıq bir heasabınız var?{" "}
          <Link className="text-blue-600 underline " to="/">
            Daxil ol
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">E-mail</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border-[1px] p-3"
            type="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border-[1px] p-3"
            type="password"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 duration-300 ease-in-out w-full p-4 my-2 text-white font-medium text-[18px]">
          Qeydiyyatdan Keç
        </button>
      </form>
    </div>
  );
}

export default SignUp;
