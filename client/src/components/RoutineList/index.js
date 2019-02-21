import React, { Component } from "react";
// import Navbar from "../../components/Navbar";
// import BodyWrapper from "../../components/Bodywrapper";

import axios from "axios";


function RoutineList(props) {
    return (
        <>
            <div>
                - {props.habit.title}
            </div>
        </>
    );

}

export default RoutineList;
