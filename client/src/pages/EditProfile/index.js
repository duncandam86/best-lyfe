import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
import UserForm from "../../components/UserForm";
import SubmitButton from "../../components/ButtonSubmit";
import Input from "../../components/Input";

import axios from "axios";


class EditProfile extends Component {
    state = {
        id: "",
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        photo: ""
    };

    componentDidMount() {

        axios.get("/api/user_data")
            .then(res => {
                if (!res.data.id) {
                    console.log("log in motherfucker")
                    this.props.history.push("/login")
                } else {
                    console.log("Logged in")
                    this.setState({
                        id: res.data.id,
                        email: res.data.email,
                        photo: res.data.photo,
                        phone: res.data.phone,
                        firstName: res.data.firstName,
                        lastName: res.data.lastName
                    });
                }

            });

    }

    checkUser = () => {
        axios.get("/api/user_data")
            .then(res => {


                //   console.log(res.data);
            });
    }

    handleChange = event => {
        // console.log(event.target.name);
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
        });

        // const { name, value } = event.target;
        // this.setState({
        //     [name]: value
        // });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.put("/api/user_data", {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            photo: this.state.photo,
            id: this.state.id
        })
            .then(res => {
                console.log("User Updated")
                this.props.history.push('/userprofile')
            })
            .catch(err => console.log(err))
    }

    render() {

        // console.log(longestStreak)
        const userData = this.state.userInfo;
        const routine = this.state.routine;

        // console.log("User Data: ", userData);
        // console.log("E-Mail: ", this.state.email)

        return (
            <>

                <Navbar />

                <div className="container">
                    <BodyWrapper title1="Edit" title2="Profile">
                        <div className="columns is-mobile is-centered">
                            <div className="column is-half-tablet is-three-quarters-mobile">
                                <h2>Changes will update on next login!</h2>
                                <Input
                                    field="First Name"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                />

                                <Input
                                    field="Last Name"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                />

                                <Input
                                    field="Phone Number"
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                />

                                <Input
                                    field="Photo"
                                    name="photo"
                                    value={this.state.photo}
                                    onChange={this.handleChange}
                                />

                                <SubmitButton onClick={this.handleSubmit} text={"Submit Edits"} />
                                {/* {this.state.children} */}

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
