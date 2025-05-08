import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);

  useEffect(() => {
    if (authentication && isLoggedin !== authentication) navigate("/login");
    else if (!authentication && isLoggedin !== authentication);
    navigate("/login");

    setLoader(false);
  }, [isLoggedin, authentication, navigate]);
  return loader ? <h1>Loading....</h1> : <>{children}</>;
};
