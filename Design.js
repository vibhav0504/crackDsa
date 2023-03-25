import React, { useState } from "react";
import Menucard from "./Menucard";
import Menu from "./Menu";
import "./style.css";
const Design = () => {
  const [menuData,setMenuData]=useState(Menu);
  const [profile,setProfile]=useState("")
  const handleChange=(event)=>{
    event.preventDefault();
    console.log(profile);
   setMenuData( menuData.filter((curElem)=>{
    if(curElem.Job_Profile===profile){
      // setMenuData(curElem);
      return curElem;
    }
  }))
}

  return (
    <>
      <div style={{height:"250px",overflow:"hidden"}}>
      <div className="container">
        <h2 style={{ margin: "4px" }}>Opportunity.com</h2>
        <h1 style={{ paddingTop:"25px", paddingLeft: "70px", color: "black",fontFamily:"cursive" }}>
          Explore Your Dream Internship Here...</h1>
        </div>
        <br />
       
        <form className="example" action="/action_page.php" onSubmit={handleChange} >
          <input type="text" placeholder="Search.." id="myinput"  onChange={(e)=>{setProfile(e.target.value)}} />
          <br />
        </form>
      </div>
        <span className="container1" >
          <strong><h3 style={{fontFamily:"cursive"}}>Top Internship Available Now</h3></strong>
        </span>
        <Menucard menuData={menuData}/>
    </>
  );
};

export default Design;
