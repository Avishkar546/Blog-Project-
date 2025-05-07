import React, { useEffect } from "react";
import { Footer, Header, Homepage, Register } from "./component";
import { useDispatch, useSelector } from "react-redux";
import authService from "./appwrite/auth.service";
import { login } from "./redux/features/authSlice";

const App = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((user) => dispatch(login({user})))
  }, [])
  return (
    <>
      <Header />
      {auth.isLoggedin ? <Homepage /> : <Register />}
      <Footer />
    </>
  );
};

export default App;
