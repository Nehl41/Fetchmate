// CSS Imports
import "./App.css";
<<<<<<< HEAD
// Pages Imports
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/Signup";
import AboutUs from "./Pages/AboutUs/AboutUs";
// Other Component Imports
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
=======
import Nav from "./component/Navbar/Nav.js";
import Header from "./component/Header/Header.js";
import PetParent from "./component/PetParent/PetParent.js";
import Login from "./component/LoginSignup/login.js";
import Signup from "./component/LoginSignup/Signup.js";
import Footer from "./component/Footer/footer.js";
import Loader from "./component/Loader/Loader";
>>>>>>> bb32234fbe8cc68b2d27363e7e8f8e4aaecae732
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
<<<<<<< HEAD
      {loading?<Loader/>:(<Routes>
        <Route path="/" element={<HomePage/>}></Route>
=======
      <PetParent/>
      {/* {loading?<Loader/>:(<Routes>
        <Route path="/" element={<Header />}></Route>
>>>>>>> bb32234fbe8cc68b2d27363e7e8f8e4aaecae732
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
      </Routes>)}
      <Footer /> */}
    </>
  );
}

export default App;
