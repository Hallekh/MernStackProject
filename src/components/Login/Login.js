import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div>
        <div className="container login-container">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" name="email" placeholder="Your Email..." required />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password1" placeholder="Your Password..." required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <div className="email">
                    <p className="havent-account">Don't have an account? <a href="/signup" >Signup</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}
