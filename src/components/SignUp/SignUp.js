import React from 'react'
import './SignUp.css'

export default function SignUp() {
  return (
    <div>
        <div className="register-container">
            <h2>Create an Account!</h2>
            <form>
                <div className="first_last">
                    <div>
                        <label for="firstName">First Name</label>
                        <input type="text" name="firstName" placeholder="FirstName..." />
                    </div>
                    <div>
                        <label for="lastName">Last Name</label>
                        <input type="text" name="lastName" placeholder="LastName..." />
                    </div>
                </div>
                <div className="email">
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="Your Email..." />
                </div>
                <div className="pass">
                    <div>
                        <label for="password1">Password</label>
                        <input type="password" name="password1" placeholder="Password..." className="password1" />
                    </div>
                    <div>
                        <label for="password2">Confirm Password</label>
                        <input type="password" name="password2" placeholder="Confirm Password..." className="password2" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Register Account</button>
                <div className="email">
                    <p className="have-account">Already have an account? <a href="/login" >Login</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}
