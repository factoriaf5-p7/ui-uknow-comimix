import { useMutation } from "@tanstack/react-query";
import LoginData from "../interfaces/login.interface";
import { useNavigate } from "react-router-dom";

const loginUser = async (loginData: LoginData) => {
  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify(loginData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Login failed");
  }
 const result = await response.json();

  return result
};
export const useLoginUser = () => {
  const navigate = useNavigate(); 

  return useMutation(loginUser, {
    onSuccess: () => {
      navigate("/home");
    },
  });
};