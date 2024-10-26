// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./HomeNavbar.css";
import { NavLink } from "react-router-dom";
// import admin from '../../assets/avatar-icon.png'

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const {user,role,token} = useContext(authContext);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  // const user = JSON.parse(localStorage.getItem("user"));
  // const token = localStorage.getItem("token");
  // const toast = useToast();
  // const navigate = useNavigate();

  // console.log(token)

  // const handleLogout = async () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("student-courses");
  //   toast({
  //     title: "Logged Out ",
  //     status: "success",
  //     duration: 9000,
  //     isClosable: true,
  //   });
  //   navigate("/login");
  // };

  return (
    <nav className="navbar z-50 border-b-slate-300 border-b-2 !bg-transparent">
      <div className="navCon">
        <div className="Navlogo anta-regular">TrendWiz</div>

        <div className={`navlinks  ${isOpen ? "open" : ""}`}>
          <NavLink to="/" className="links">
            Home
          </NavLink>
          {/* {user && <NavLink to={user.role === "doctor" ? "/home/main" : "/home/patientDB"} className="links normal-text">
            Dashboard
          </NavLink>} */}
          
          <NavLink to="/dashboard" className="links normal-text">
            Dashboard
          </NavLink>
          <NavLink to="/customer" className="links normal-text">
            Market Analysis
          </NavLink>

          <button className="btn1 drawerbtn normal-text">Sign Up</button>
        </div>

        {/* { token && user ? (
          <NavLink to={`${role === 'investor' ? '/investors/profile/me' : role === 'fundraiser' ? '/fundraisers/profile/me' : '/interns/profile/me'}`} className="userImg" >
          <img src={user?.photo}   alt="" />     
        </NavLink> 
        
     ) :(<div className="btns">
          <NavLink to="/register"  className="btn1">Sign Up</NavLink>
        </div>)} */}
        {/* <NavLink to="/home" className="userImg">
          <img src="" alt="" />
        </NavLink> */}

        {/* {token ? ( */}
          {/* <div className="btns" >
            <NavLink to="/" className="btn">
              LogOut
            </NavLink>
          </div> */}
        {/* ) : ( */}
          {/* <> */}
            <div className="btns">
              <NavLink to="/register" className="btn">
                Sign Up
              </NavLink>
            </div>
            {/* <div className="btns">
          <NavLink to="/login" className="btn">
            Login
          </NavLink>
          </div> */}
          {/* </> */}
        {/* )} */}

        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleNavbar}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
