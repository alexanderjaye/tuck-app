import React from 'react'
import LoginForm from '../login/login-form/LoginForm'
import './LandingPage.scss'
import tuckLogo from '../../../assets/logo/tuck-logo.svg'
import bgTree from '../../../assets/backgrounds/lemon-tree.svg'

const LandingPage = () => {
  return (
    <div className="hero">
      <div className="advert">
        <img className="lg-bg-tree" src={bgTree} alt="background tree"></img>
        <img className="logo" src={tuckLogo} alt="Tuck Logo"></img>
        <h1>A Community Recipe Book.</h1>
        <h1>For The Community.</h1>
        <h2>For The Planet.</h2> 
        <p>
          Use up the food at the back of the fridge. Search recipes and find the variations that use what you want.
        </p>
      </div>
      <div className="login">
        <LoginForm/>
      </div>
    </div>
  )
}

export default LandingPage
