import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import newRequest from "../../utils/newRequest.js";
import "./Navbar.scss"

const Navbar = () =>{

    const [active, setActive] = useState(false);
    const[open, setOpen] = useState(false);
    const {pathname} = useLocation();
    const navigate = useNavigate();
    
    const isActive = () => {
        window.scrollY>0 ? setActive(true) : setActive(false);
    };

    useEffect (()=>{
        window.addEventListener("scroll", isActive);
        return ()=>{
            window.removeEventListener("scroll", isActive); 
        };
    }, []);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const handleLogout = async () =>{
        try {
           await newRequest.post("/auth/logout") 
           localStorage.setItem("currentUser", null);
           navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={active || pathname !== "/" ? "Navbar active" : "Navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className='link'>
                        <span className="text">fiverr</span>
                    </Link>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>English</span>
                    <span>Explore</span>
                    {!currentUser && <Link to="/login" className='link'>Sign in</Link>}
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <Link to="/register" className={active || pathname !== "/" ? "joinBtn link active" : "joinBtn link"}>Join</Link>}
                    {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                      <img src={currentUser.img || "/img/profile.png"} alt="profile" />
                      <span>{currentUser?.username}</span>
                      {open && <div className="options">
                        {
                            currentUser?.isSeller && (
                                <>
                                <Link to="/mygigs" className="link">Gigs</Link>
                                <Link to="/add" className="link">Add New Gig</Link>
                                </>
                        )}
                        <Link to="/orders" className="link">Orders</Link>
                        <Link to="/messages" className="link">Messages</Link>
                        <Link onClick={handleLogout} className="link">Logout</Link>
                      </div>}
                    </div>)}
                </div>
            </div>

            { (active || pathname !== "/") &&
            <><hr />
            <div className="menu">
                <Link className='link menuLink' to="/gigs?cat=design" reloadDocument>Graphics & Design</Link>
                <Link className='link' to="/gigs?cat=video" reloadDocument>Video & Animation</Link>
                <Link className='link' to="/gigs?cat=writing" reloadDocument>Writing & Translation</Link>
                <Link className='link' to="/gigs?cat=ai" reloadDocument>AI Services</Link>
                <Link className='link' to="/gigs?cat=social media" reloadDocument>Digital Marketing</Link>
                <Link className='link' to="/gigs?cat=audio" reloadDocument>Music & Audio</Link>
                <Link className='link' to="/gigs?cat=tech" reloadDocument>Programming & Tech</Link>
                <Link className='link' to="/gigs?cat=business" reloadDocument>Business</Link>
                <Link className='link' to="/gigs?cat=lifestyle" reloadDocument>Lifestyle</Link>
            </div> <hr /> </>
            }
        </div>
    )
}

export default Navbar