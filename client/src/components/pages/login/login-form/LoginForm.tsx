import React, { useContext, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/Auth';
import * as apiService from '../../../../services/Apiservice'

interface Login {
  email: string;
  password: string;
}

const initLogin: Login = {
  email: '',
  password: ''
}

export default function LoginForm(props: any) {
  const [loginDetails, setLoginDetails] = useState(initLogin);
  const { changeAuthStatus, changeUserID } = useContext(AuthContext);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = loginDetails;
    const user = { email, password };
    const res: any = apiService.login(user);
    if (res.error) {
      alert(`${res.message}`);
      setLoginDetails(initLogin);
    } else {
      changeAuthStatus(true);
      
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const validateForm = () => {
    return !loginDetails.email || !loginDetails.password;
  };
  
  return (
    <div className="form-container">
      <div className="card">
        <h2>Log In</h2>

          <form onSubmit={handleSubmit}>
            <input
              name="email" 
              type="text" 
              value={loginDetails.email}
              onChange={handleChange}
              placeholder="Email@example.com"
            />
            <input
              name="password"
              type="password"
              value={loginDetails.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <button className="form-submit" type="submit" disabled={validateForm()}>
              &nbsp;Login&nbsp;
              <FaArrowRight/>
            </button>
          </form>

        <br></br>
        <Link to="/register">
          <h4>Sign Up Here</h4>
        </Link>
        <Link to="/register">
          <h4>Recover Password</h4>
        </Link>
      </div>
    </div>
  )
}
