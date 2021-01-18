import { TextField } from '@material-ui/core';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import './register.scss'

// Custom edit of material ui "TextField" icon

const RegisterForm: React.FC = () => {
  return (
    <div className="register-container">
      <div className="register">
        <div className="whiteTop">
          <h2>Register</h2>
        </div>
        <br></br>
        <form id="register">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder="myusername"
          />
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name="email" 
            id="email"
            placeholder="Email@email.com"
            className="text-input"
          />
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password"
            placeholder="Password"
            className="text-input"
          />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input 
            type="password" 
            name="confirm-password" 
            id="confirm"
            placeholder="Confirm Password"
            className="text-input"
          />
          <button>
            Submit
            <div>
              <FaArrowRight/>
            </div>
          </button>
          
        </form>
      </div>
    </div>
  )
}

export default RegisterForm;
