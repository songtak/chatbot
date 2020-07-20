import React, { useState } from "react";
import { connect } from "react-redux";
import { MDBBtn, MDBInput } from 'mdbreact'


//Commands   리듀서와 액션을 연결
const signUpConstants = {
    SIGNUP_REQUEST: 'USER_SIGNUP_REQUEST',
    SIGNUP_SUCCESS: 'USER_SIGNUP_SUCCESS',
    SIGNUP_FAILURE: 'USER_SIGNUP_FAILURE'
}
//Reducers
function signUpReducer(payload, userActions) {
    switch (userActions) {
        case signUpConstants.SIGNUP_REQUEST:
            return {
                signUp: true,
                user: userActions.user
            }
        case signUpConstants.SIGNUP_SUCCESS:
            return{
                signUp: true,
                user: userActions.user
            }
        case signUpConstants.SIGNUP_FAILURE:
            return{
                signUp: true,
                user: userActions.user
            }

}
//Actions
const signUpActions = {

    }
function signUp(e) {
        return dispatch => {

    }
}

//Thunk
function signUpService() {
        const userid = ''
        const password = ''
        const name = ''
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({userid,password})
    }
    return fetch(``)
        .then()
}
//Component


const SignUp = () => {
    const [ userid, setUserid ] = useState()
    const [ password, setPassword ] = useState()
    const [ name, setName ] = useState()
    return (
        <form name="form" onSubmit={ this.handleSubmit }>
    <div className="container">
        <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="userid" onChange={this.handleChange}/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} />

    <label htmlFor="psw-repeat"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" onChange={this.handleChange}/>

    <label>
    <input type="checkbox" name="remember" style={temp}/>
    </label>

    <p>By creating an account you agree to our <a href="#" style={temp}>Terms
        & Privacy</a>.</p>

    <div className="clearfix">
        <MDBBtn onClick={signUp} className={"button3"}>Cancel</MDBBtn>
        <MDBBtn onClick={signUp} className={"button3"}>Sign Up</MDBBtn>
    </div>
    </div>
    </form>
)
}
};

export default SignUp;