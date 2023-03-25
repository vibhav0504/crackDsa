import React from "react";
const Menucard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
         
          return (
            <>
              <div className="card-cointainer">
                
                <div className="card">
                  <div
                    className="d-flex"
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      borderRadius: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      style={{ borderRadius: "50%",display:"block",margin:" auto",padding:"5px"}}
                      src="pizza.jpg"
                      alt=""
                      width="100px"
                    />
                    <p className="card-author "><strong> Company : <em>{curElem.Company_Name}</em></strong></p>
                  </div>
                    <div className="subtle ">
                      <span>Job-Profile : {curElem.Job_Profile}</span>
                    </div>
                  
                    <div className="subtle ">
                      <span> Duration : {curElem.Duration}</span>
                    </div>
                    <div className="subtle ">
                      <span>Location : {curElem.Location}</span>
                    </div>
                    <div className="subtle ">
                      <span>Last_Date : {curElem.Last_Date}</span>
                    </div>
                  
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Menucard;
