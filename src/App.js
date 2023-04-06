// CSS Imports
import "./App.css";
// Pages Imports
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/Signup";
import AboutUs from "./Pages/AboutUs/AboutUs";
// Other Component Imports
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
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
      {loading?<Loader/>:(<Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
      </Routes>)}
      <Footer />
    </>
  );
}

export default App;
