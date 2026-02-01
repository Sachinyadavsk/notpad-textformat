import React from "react";

function Login() {
    return (
        <div className="container py-5">

            {/* Page Header */}
            <div className="text-center mb-5">
                <h1 className="fw-bold">Login</h1>
                <p className="text-muted">
                    Welcome back! Please sign in to your account
                </p>
            </div>

            {/* Login Form */}
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-12">

                    <form>
                        {/* Email */}
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Remember Me */}
                        <div className="form-check mb-4">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="rememberMe"
                            />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember me
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="d-grid mb-3">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>

                        {/* Extra Links */}
                        <div className="text-center">
                            <p className="mb-1">
                                Don’t have an account? <a href="/register">Register</a>
                            </p>
                            <p className="mb-0">
                                <a href="/forgot-password">Forgot Password?</a>
                            </p>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    );
}

export default Login;
