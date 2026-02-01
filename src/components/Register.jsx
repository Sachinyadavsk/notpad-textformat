import React from "react";

function Register() {
    return (
        <div className="container py-5">

            {/* Page Header */}
            <div className="text-center mb-5">
                <h1 className="fw-bold">Create an Account</h1>
                <p className="text-muted">
                    Register to access all features and start your journey
                </p>
            </div>

            {/* Register Form */}
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-12">

                    <form>
                        {/* Full Name */}
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your full name"
                            />
                        </div>

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
                                placeholder="Create a password"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm your password"
                            />
                        </div>

                        {/* Terms */}
                        <div className="form-check mb-4">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="terms"
                            />
                            <label className="form-check-label" htmlFor="terms">
                                I agree to the Terms & Conditions
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
}

export default Register;
