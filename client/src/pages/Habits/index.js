import React from "react";
import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";

import "./style.scss";

function Habits() {
  return (
    <div>
      <Navbar />

      <div className="">
        <div className="column is-10 has-text-centered">
          {/* <div className="container is-fluid"> */}
          <div className="level">
            <div className="level-item" />
          </div>
          <BodyWrapper title1="Your" title2="Habits">
            <p className="is-size-3">
              We know it's hard to stick to productive routines, we've been
              there! Best Lyfe helps you stick to your productive routines
              through reminders and habit tracking.
            </p>
            <p className="is-size-3">
              If you're new to Best Lyfe, sign up below and start inputing
              habits you'd like to add to your daily routine.
            </p>
          </BodyWrapper>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Habits;
