import React from "react";
import LargeLogo from "../../components/LargeLogo";
import BodyWrapper from "../../components/Bodywrapper";
import Button from "../../components/ButtonLink";
import "./style.scss";

function Home() {
  return (
    <div>
      <div className="container is-fluid">
        <div className="columns is-mobile is-centered">
          <div className="column is-10">
            <div className="level is-marginless">
              <div className="level-item">
                <LargeLogo />
              </div>
            </div>
            <BodyWrapper
              txtAlign="centered"
              title1="Live your"
              title2="Best Lyfe"
            >
              <p className="is-size-3 is-size-5-mobile">
                We know it's hard to stick to productive routines, we've been
                there! Best Lyfe helps you stick to your productive routines
                through reminders and habit tracking.
              </p>
              <p className="is-size-3 is-size-5-mobile bottom">
                If you're new to Best Lyfe, sign up below and start inputing
                habits you'd like to add to your daily routine.
              </p>
              <div className="level">
                <div className="buttons level-item">
                  <Button name="Sign Up" page="/signup" />
                  <Button name="Login" page="/login" />
                </div>
              </div>
            </BodyWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
