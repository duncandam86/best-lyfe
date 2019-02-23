import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";

import axios from "axios";
import RoutineList from "../../components/RoutineList";

class UserProfile extends Component {
    state = {
        userInfo: [],
        routine: []
    };

    componentDidMount() {

        axios.get("/api/user_data")
            .then(res => {
                //   console.log(res.data);
                this.setState({
                    userInfo: res.data
                });

            });

        axios.get("/api/habits")
            .then(res => {
                this.setState({
                    routine: res.data
                })
            })
    }

    handleEdit = () => {
        
    }

    render() {

        // console.log(longestStreak)
        const userInfo = this.state.userInfo;
        const routine = this.state.routine;

        return (
            <>

                <Navbar />

                {/*  this button console.logs the streak
        <button onClick={this.getHabitStreak}>CHECK ME</button> */}

                <div className="container">
                    <BodyWrapper title1="Your" title2="Profile">
                        <div id="user-info">
                            <img src={userInfo.photo} />
                            <h2>{userInfo.firstName} {userInfo.lastName}</h2>
                            {userInfo.email} <br />
                            {userInfo.phone} <hr />

                            <h2>Routine</h2>

                            {routine.map(habit => {
                                return (
                                    <RoutineList
                                        habit = {habit}
                                    />
                                )
                            })}

                        </div>
                        <button><a className="navbar-item is-right" href="/editprofile">
                    Edit Profile
                  </a></button>

                    </BodyWrapper>
                </div>
            </>
        );
    }
}

export default UserProfile;
