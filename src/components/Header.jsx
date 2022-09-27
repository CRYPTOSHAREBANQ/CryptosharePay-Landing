import React from "react";
import Navbar from "./Navbar";

function Header(){
    return(
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1><span>CryptoShare APIs For Developers</span></h1>
                <p className='details'>Find the best APIs from around the world</p>
                <a href='#' className='cv-btn'>Read More</a>
            </div>
        </div>
    )
}

export default Header;