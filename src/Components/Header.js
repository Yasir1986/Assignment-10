import React, { Component } from 'react'
import headerImg from '../images/Header-img.png';

const Header = function(){
    return (
        <div className="Header-container">
  <div ><img className="Header-img" src={headerImg} /></div>
  <div className ="itemContainer">
  <div className="item1">POWERFULLY SIMPLE WITH A</div>  
  <div className="item2">SQUEEKY CLEAN DESIGN</div> 
  <div className="item3">Find out how you can offer qucik and powerful <p>solutions to your customers now!</p></div>
  <button className="item4">LEARN MORE</button>
    </div>
        </div>
    );
}


export default Header;