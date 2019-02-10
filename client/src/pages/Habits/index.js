import React from "react";
// import LargeLogo from "../../components/LargeLogo";
import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
import HabitsComponent from "../../components/HabitsComponent"
//import "../../styles/shared.scss";
import "./style.scss";

function Habits() {
  return (
    <div>
       <Navbar />
     
      <div className="">
          <div className="column is-10 has-text-centered">
          {/* <div className="container is-fluid"> */}
            <div className="level">
              <div className="level-item">
               
              </div>
            </div>
            <BodyWrapper title1="Your" title2="Habits">
             
              <HabitsComponent />
          
            </BodyWrapper>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Habits;