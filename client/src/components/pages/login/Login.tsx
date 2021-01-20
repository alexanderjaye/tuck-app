import React from 'react'
import LoginForm from './login-form/LoginForm';
import "./Login.scss";

export default function Login(props: any) {
  return (
    <div className="login">
      <LoginForm history={props.history}/>
    </div>
  )
}
