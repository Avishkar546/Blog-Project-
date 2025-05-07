import React from "react";
import { logout } from "../../redux/features/authSlice"; // Redux
import authService from "../../appwrite/auth.service"; // Appwrite
import { useDispatch } from "react-redux";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout));
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full"
      onClick={logoutHandler}
    >
      logout
    </button>
  );
};

export default LogoutBtn;
