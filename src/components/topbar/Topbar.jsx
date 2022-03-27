import React from 'react'
import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons";

function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className = {"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
               <a href="#intro" className = "logo">welcome.</a>
               <div className="itemContainer">
                 <Person className="icons"/>
                 <span>+ 85 82 699 395</span>
               </div>
               <div className="itemContainer">
                 <Mail className="icons"/>
                 <span>evgeniiabaranova@yahoo.com</span>
               </div>
        </div>
        <div className="right">
              <div className="hamburger" onClick = {() => setMenuOpen(!menuOpen)}>
                <span className = "line1"></span>
                <span className = "line2"></span>
                <span className = "line3"></span>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar