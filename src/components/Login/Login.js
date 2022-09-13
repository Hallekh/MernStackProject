import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div>
        <div class="container login-container">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" name="email" placeholder="Your Email..." required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name="password1" placeholder="Your Password..." required />
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
                <div class="email">
                    <p class="havent-account">Don't have an account? <a href="/signup" >Signup</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}
