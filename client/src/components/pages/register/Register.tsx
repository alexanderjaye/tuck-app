import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import * as apiclient from '../../../services/Apiservice';
import './register.scss'

interface Details {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const details: Details = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const RegisterForm = (props: any) => {
  const [isRegistered, setIsRegistered] = useState(false)
  const [registerDetails, setRegisterDetails] = useState(details);

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLInputElement>): any => {
    e.preventDefault();
    const { username, email, password, confirmPassword  } = registerDetails;
    if (password !== confirmPassword) {
      alert(`Password does not match confirmation`);
      return;
    }
    const user = { email, password, username };
    const res: any = apiclient.register(user);
    if (res.error) {
      alert(`${res.message}`);
      setRegisterDetails(details);
    } else {
      setIsRegistered(true);
      setTimeout(() => {
        props.history.push('/login');
      }, 2000)
    }
  }

  const validateForm = () => {
    return (
      !registerDetails.email || !registerDetails.username || !registerDetails.password || !registerDetails.confirmPassword
    );
  };

  //Component
  return (
    <div className="register-container">
      { isRegistered ? <h2>Successful!</h2> :
        <div className="register">
          <div className="whiteTop">
            <h2>Register</h2>
          </div>
          <br></br>
          <form id="register" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={registerDetails.username}
              name="username" 
              id="username" 
              placeholder="myusername"
              onChange={handleRegisterChange}
            />
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              name="email" 
              id="email"
              value={registerDetails.email}
              onChange={handleRegisterChange}
              placeholder="Email@email.com"
              className="text-input"
            />
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password"
              onChange={handleRegisterChange}
              value={registerDetails.password}
              placeholder="Password"
              className="text-input"
            />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              id="confirm"
              onChange={handleRegisterChange}
              value={registerDetails.confirmPassword}
              placeholder="Confirm Password"
              className="text-input"
            />
            <div>
              <button className="form-submit" type="submit" disabled={validateForm()}>
                &nbsp;Register&nbsp;
                <FaArrowRight/>
              </button>
              
            </div>
          </form>
        </div>
      }
    </div>
  )
}

export default RegisterForm;
