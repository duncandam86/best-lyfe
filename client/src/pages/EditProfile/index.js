import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
import UserForm from "../../components/UserForm";
import SubmitButton from "../../components/ButtonSubmit";

import axios from "axios";


class EditProfile extends Component {
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

    }


    handleChange(event) {
        // console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {

    }

    render() {

        // console.log(longestStreak)
        const userInfo = this.state.userInfo;
        const routine = this.state.routine;

        console.log(userInfo);

        return (
            <>

                <Navbar />

                <div className="container">
                    <BodyWrapper title1="Edit" title2="Profile">
                        <div className="columns is-mobile is-centered">
                            <div className="column is-half-tablet is-three-quarters-mobile">

                                {/* EMAIL */}
                                <div className="field">
                                    <label className="label is-size-4 is-size-5-mobile">E-Mail</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="you@where.what"
                                            name="userEmail"
                                            value={userInfo.email}
                                            onChange={this.state.handleChange}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user" />
                                        </span>
                                        <div id="email-err" className="err-text"></div>
                                    </div>
                                </div>

                                {/* First Name */}
                                <div className="field">
                                    <label className="label is-size-4 is-size-5-mobile">First Name</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Jamie"
                                            name="userFirstName"
                                            value={userInfo.firstName}
                                            onChange={this.state.handleChange}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user" />
                                        </span>
                                        <div id="fn-err" className="err-text"></div>
                                    </div>
                                </div>

                                {/* Last Name */}
                                <div className="field">
                                    <label className="label is-size-4 is-size-5-mobile">Last Name</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Smith"
                                            name="userLastName"
                                            value={userInfo.lastName}
                                            onChange={this.state.handleChange}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user" />
                                        </span>
                                        <div id="ln-err" className="err-text"></div>
                                    </div>
                                </div>

                                {/* PHONE NUMBER */}
                                <div className="field">
                                    <label className="label is-size-4 is-size-5-mobile">Phone Number (no spaces or dashes)</label>
                                    <div className="control has-icons-left">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="XXX-XXX-XXXX"
                                            name="userPhone"
                                            value={userInfo.phone}
                                            onChange={this.state.handleChange}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-lock" />
                                        </span>
                                        <div id="phone-err" className="err-text"></div>
                                    </div>
                                </div>

                                {/* PICTURE */}
                                <div className="field">
                                    <label className="label is-size-4 is-size-5-mobile">Photo (link)</label>
                                    <div className="control has-icons-left">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="https://someplace.com/yourface.png"
                                            name="userPhone"
                                            value={userInfo.photo}
                                            onChange={this.state.handleChange}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-lock" />
                                        </span>
                                        <div id="photo-err" className="err-text"></div>
                                    </div>
                                </div>

                                <SubmitButton onClick={this.handleSubmit} text={"Submit Edits"} />
                                {this.state.children}

                                <div id="disclaimer">Best Lyfe will only use your contact info for notifications, we have no interest in contacting you for any other reason and promise to not share your contact information with any third party sources, except the FBI.  We're not going to court or jail for you.</div>
                                {/* wrapper ends  */}
                            </div>
                        </div>

                    </BodyWrapper>
                </div>
            </>
        );
    }
}

export default EditProfile;
