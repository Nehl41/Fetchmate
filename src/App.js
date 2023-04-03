import './App.css';
import Nav from './component/Navbar/Nav.js';
import Header from './component/Header/Header.js'
import Login from './component/LoginSignup/login.js';
import Signup from './component/LoginSignup/Signup.js'
import Footer from './component/Footer/footer.js'
import { Route, Routes } from 'react-router-dom';

function App() {
  return(
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path="/sign-up" element={<Signup/>}></Route>
        <Route path="/login" element={ <Login/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
 }

export default App;
