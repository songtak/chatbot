import React, {useState} from "react";
import 'member.css'
import {connect} from "react-redux";
/*Commands*/
const signinActions = {
    REQUEST: 'signin/REQUEST',
    SUCCESS: 'signin/SUCCESS',
    FAILURE: 'signin/FAILURE'
}
export function request(member) {return {type: signinActions.REQUEST, member}}
export function success(member) {return {type: signinActions.SUCCESS, member}}
export function failure(error) {return {type: signinActions.FAILURE, error}}


const initialiser() {

}


/*Reducers*/
function signinReducer(payload, userActions) {
    switch (userActions) {
        case loginConstants.LOGIN_REQUEST:
            return {
                logginIn: true,
                user: userActions.user
            }
        case loginConstants.LOGIN_SUCCESS:
            return {
                logginIn: true,
                user: userActions.user
            }
        case loginConstants.LOGIN_FAILURE:
            return {
                logginIn: true,
                user: userActions.user
            }
    }
    const action = (type, user) => {
        switch(type){
            case loginConstants.LOGIN_REQUEST:
                return { type: type, user}
            case loginConstants.LOGIN_SUCCESS:
                return { type: type, user}
            case loginConstants.LOGIN_FAILURE:
                return { type: type, user}
        }
    }
}
/*Actions*/
const loginActions = {
    handleResponse, login: signin, logout
}
function handleResponse(response) {
    return response.text()
        .then(text =>{
            const data = text && JSON.parse(text)
            if(!response.ok){
                if(response.status === 401){
                    window.location.reload()
                }
                const error = (data && data.message) ||
                    response.statusText
                return Promise.reject(error)
            }
            return data
        })
}
function signin(userid, password){
    return dispatch => {
        dispatch(request({userid}))
        loginService(userid, password)
            .then(
                user =>{
                    dispatch(success(user))
                },
                error =>{
                    dispatch(failure(error.toString()))
                }
            )
    }
    function request(user) {return {type: loginConstants.LOGIN_REQUEST, user}}
    function success(user) {return {type: loginConstants.LOGIN_SUCCESS, user}}
    function failure(error) {return {type: loginConstants.LOGIN_FAILURE, error}}
}
function logout(){}
/* MiddleWare ( thunk, saga )*/
function loginService(userid, password) {
    alert(` loginService 진입 `)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userid,password})
    }
    return fetch(`https://facebook.github.io/react-native/movies.json`, requestOptions)
        .then(handleResponse)
        .then(user => {
            alert(` json 읽기 성공 `)
            localStorage.setItem('user', JSON.stringify(user))
        })
}
/* Component */
const Login = () => {
    const [userid, setUserid] = useState()
    const [password, setPassword] = useState()
    return (<div>
            <h2>Login Form</h2>
            <form name="form" >
                <div className="imgcontainer">
                    <img id={"avatar"} src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar"/>
                </div>
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username"
                           name="userid"
                    />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password"
                           name="password"
                    />
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked={true} name="remember"/> Remember me
                    </label>
                </div>
                <div className="container">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    )
}


function mapStateToProps(state) {
    const { loggingIn } = state.userReducers
    return { loggingIn}
}

const connectedLoginPage = connect(mapStateToProps, {login: signin})(Login)
export { connectedLoginPage as Login }

