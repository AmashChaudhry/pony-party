import React from "react";

export default function LoginToAccount() {
    return(
        <div className="login-form">
            <form>
                <div className="input-group">
                    <label >Email address (as your login)</label><br />
                    <input type="email" required />
                </div>
                <div className="input-group">
                    <label >Password</label><br />
                    <input type="password" required />
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit">Login</button>
                <div className="links">
                    <a href="/forgot-password" className="forgot-password">Forgot password?</a><br /><br />
                    <p className="inline-text">Don’t have an account? <a href="/register" className="register-link">Register now</a></p>
                </div>
            </form>
        </div>
    );
}