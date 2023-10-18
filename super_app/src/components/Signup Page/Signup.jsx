import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className="container">
        <div className="sign_up_page_img">
            <p>Discover new things on <br />Superapp</p>
        </div>
        <div className="signup-form">
            <div className="header">
                <h1>Super app</h1>
                <p>Create your new account</p>
            </div>

            {/* Getting User data */}
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder='Name' />
                </div>
                <div className="input">
                    <input type="text" placeholder='UserName' />
                </div>
                <div className="input">
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input">
                    <input type="Number" placeholder='Mobile' />

                </div>
            </div>

            <div className="inner-container">
                <div className="check-box">
                    <input type="checkbox" name="checkin" id="register" />
                    <label htmlFor="register">Share my registration data with Superapp</label>
            </div>

            <div className="Signup">SIGN UP</div>

            <div className="terms">
                <p>By clicking on Sign up. you agree to Superapp <p className='highlight'>Terms and Conditions of Use</p></p>
                <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <p className='highlight'>Privacy Policy</p></p>
            </div>
            </div>
            
           
        </div>
    </div>
  )
}

export default Signup