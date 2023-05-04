import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react';
import "./Navbar.scss"

const Navbar = () =>{

    const [active, setActive] = useState(false);
    const[open, setOpen] = useState(false);
    const {pathname} = useLocation();
    
    const isActive = () => {
        window.scrollY>0 ? setActive(true) : setActive(false);
    };

    useEffect (()=>{
        window.addEventListener("scroll", isActive);
        return ()=>{
            window.removeEventListener("scroll", isActive); 
        };
    }, []);

    const currentUser = {
        id: 1,
        username: "Tanu Chahal",
        isSeller: true
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
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAAvVBMVEX+/v4AAAIAAAP+/v/g4OCAgIDV1dX+/vzt7e12dnb29vapqamMjIzw8PD5+flmZmajo6PJycmXl5dSUlJdU0m2trZubm7m5uZ/f3/BwcFgYGFCQkTOzs8iIiTZ2dsyMjQqKipfWVMRERFmWlFxY1l6bGKBeHSLgXyUjYifmJSppJ6yrae+uLPGwbjTy8WOjo5APz1oY16VlY/e2dMnJyhKSkpxaWYwJR4xLSdHQzsRDgq6s6skGxUbFxZ6dHBRqS2mAAAEi0lEQVR4nO3cW1vaQBAG4ByAEDmjEEGsh1brsYqttNXq//9ZDSIKYQaycDEzPN97U/vgxXxkk2x2J3oeAAAAAAAAAAAAAAAAAAAAAAAAAAAAgJNyJe7342ZBuo61lff9dwct6VrWMzj0P8XS1ayjNRMg8P3dHemC8gsn/3zxM/qyZbmYRAiPshH8tnBh+U0iVLIB0rFUEq7MTfS4cBDS00G6KicFIoHvD6TLcrEwjt5UpctyUSQjNKTLcrFLRjB0XfW8YzLCiRdJF5Zb/ZSMsGcoQplMkEawo2Q/wsB+hJ79CB06wlfpuhzQN2dTEdp0hG+GLqpVOsKZoQj0FMlUhH06wrl0XQ5iOsJ36bocdOkIF9J1OdiCCA06wqV0XQ6Yo7AFEa4MXVSZCNfSdTlgLqqWIjC3tmdDA4mZYNwYisBM82xFCAIiwq3+CEkhlSRJjRlIP6QLXKEUL24pZOx2u3G8X6ze3bXb7WalM6hLFz0rYeYUy71Ua9KFf2CWLFY71bJg31w3ga9l04FZsMgpkS7f47Z0ctOwZE9vJuTXkw6wuMPsSn4bkVn3ciDeZrLWHWFORzoCtcXsRnwndNOzWUGbDPOU6aArHWGzG9tYUTpCsnGEpnSEzUeSfItMQj2hOTiQDuBtMNWekJ9geBue0eIn88QGx0H8vjY1ffAkVy6WONbUwVpyuDBNcx5VlLV+ljuXF+dnZ8OTvVw57qstVSsYc6InsubHcpK8LTWN6Vm6IO3QX/uJdF0O2AihdGW51ewfBaYpbAsiDKXrcsBMv0fSdTlgIrx6kZnzmYlw7tm5JDErlEX9mzwfmAgPhgbSFkRgVlkfDA0kJoKlLhKm3/nB0BWJibAFR+HS0LnAHwXrA8lSLw8ZIdiGCOKbOQ6ou3NgKwL1yBMo2FJzwERQsfybE/X4n0bQtPa4CrUIYyxCHREUCF/IDNpb8+bckxHkdwUdUA0BxiLQnSU/pctygQgaENtu6TTPVATq/YVASTtnTsT7C8ameUyEm9lfGa8ElNr9+/tGu5D+L9K2MkB0zgcLz86Fj7vHsOypi3BHXpHm246q/ucWusI3G+ge7ursGszF/BG61bY+Q784P7tpe5H9UNsVl26MeflsuLhe+PBRsFxKiwjgfzwwRORRUjYJZJbzGu8nLfFxoKWzaoprmpyMJHr74Ui45gymCWPyTXeYritlrUmHdJX+Udz9xXykLcLK98MIyvqr1ui+PZauOYP5ozDLaLsxML0wyyj7W2ihNySKXN7/Kd97nkGNJD7CuLtV/IWeLGZlmDfSNlVl353n/K6pe2Lwdv44RVA3jKIo9J4XBs6SgXQrXTHtb/5jMH6qVvf0nI7s8tOq6+iU3uaMQc4ImndC872YoXuFbJzh/UBw72Y86V6mTM+HVed0X9lTwoL0IvP8b0mAU82nwUQURl50RW0evinW9c0qGL0+FaCh7o7MGn/RSSWzCXrQUf4mDOlLrxmPRqPXdqdl5/vfPpEXhu8/GBa9beeYjgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxv0HJTs18vZv4/MAAAAASUVORK5CYII=" alt="profile" />
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
                        <Link to="" className="link">Logout</Link>
                      </div>}
                    </div>)}
                </div>
            </div>

            { (active || pathname !== "/") &&
            <><hr />
            <div className="menu">
                <Link className='link menuLink' to="/">Graphics & Design</Link>
                <Link className='link' to="/">Video & Animation</Link>
                <Link className='link' to="/">Writing & Translation</Link>
                <Link className='link' to="/">AI Services</Link>
                <Link className='link' to="/">Digital Marketing</Link>
                <Link className='link' to="/">Music & Audio</Link>
                
                <Link className='link' to="/">Programming & Tech</Link>
                <Link className='link' to="/">Business</Link>
                <Link className='link' to="/">Lifestyle</Link>
            </div> <hr /> </>
            }
        </div>
    )
}

export default Navbar