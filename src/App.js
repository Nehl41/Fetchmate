import "./App.css";
import Nav from "./component/Navbar/Nav.js";
import Header from "./component/Header/Header.js";
import Login from "./component/LoginSignup/login.js";
import Signup from "./component/LoginSignup/Signup.js";
import Footer from "./component/Footer/footer.js";
import Loader from "./component/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import { useState,useEffect } from "react";

function App() {

  const [loading,setLoading]=useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Nav />
      P{loading?<Loader/>:(<Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>)}
      <Footer />
    </>
  );
}

export default App;
