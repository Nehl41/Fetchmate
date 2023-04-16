// CSS Imports
import "./App.css";

// Pages Imports
import HomePage from "./Pages/HomePage/HomePage";
import Signup from './Pages/SignUp/Signup'
import Login from './Pages/Login/Login'
import AboutUs from './Pages/AboutUs/AboutUs'
import PetParent from './Pages/PetParent/Parent'
import PetLover from './Pages/PetLover/petlover'

//Other Component Imports
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import OurGoal from "./components/ourGoal/OurGoal";
import Faqs from './components/Faqs/Faqs'
import Developers from "./components/developers/Developers";

// Libraries and Package Imports
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
      <div className="main-content-app">
      {loading?<Loader/>:(<Routes>
        <Route path="/" element={<><HomePage/><Footer /> </>}></Route>
        <Route path="/parent" element={<PetParent />}></Route>
        <Route path="/petlover" element={<PetLover />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about-us" element={<AboutUs/>}>
          <Route path="def" element={<OurGoal/>} />
          <Route path="faqs" element={<Faqs/>} />
          <Route path="developers" element={<Developers/>} />
        </Route>
      </Routes>)}
      </div>
    </>
  );
}

export default App;
