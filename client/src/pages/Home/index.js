import React, { Component } from "react";
import { Link } from "react-router-dom";
import LargeLogo from "../../components/LargeLogo";
import BodyWrapper from "../../components/Bodywrapper";
import Button from "../../components/Button";
import "./style.scss";

function Home() {
  return (
    <div>
      <div className="container is-fluid">
        <div className="columns is-mobile is-centered">
          <div className="column is-10 has-text-centered">
            <div className="level">
              <div className="level-item">
                <LargeLogo />
              </div>
            </div>
            <BodyWrapper title1="Live your" title2="Best Lyfe">
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
                  <Button name="Sign In" page="/signup" />
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
