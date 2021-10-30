import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__heading">
            grofers
        </div>
        <div className="searchbox">
            <div className="navbar__location">
                <select name="location" id="location-select" placeholder="--location--">
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="alhabad">Alhabad</option>
                    <option value="banglore">Banglore</option>
                </select>
            </div>
            <div className="navbar__search">
                <input type="text" name="search" id="searchbox" placeholder="Search..." autocomplete="off" className='searchbox'/> 
            </div>
        </div>
        
        <div className="navbar__items">
                <div className="navbar__category">
                    Categories
                </div>           
            <div className="navbar__login">
                <div className="line1">My Account</div>
                <div className="line2">Login/SignUp</div>
            </div>
            <div className="navbar__cart">
                Cart
            </div>
        </div>
        </div>
    )
}

export default Navbar
