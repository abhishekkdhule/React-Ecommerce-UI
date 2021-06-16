import React from 'react'
import './auth.css'
function Signup() {
    return (
        <div className="container">
        <div className="row mt-4">
            <div className="col-md-4 mx-auto">
                <div className="border rounded m-1 p-3 shadow">
                <h3 className="text-center">Sign up</h3>
                <label for="username" className="form-label m-0 mt-2">Username</label>
                <input type="text" id="username" className="form-control"  name="name"/>

                <label for="email" className="form-label m-0 mt-2">Email</label>
                <input type="text" id="email" className="form-control"  name="email"/>

                <label for="password" className="form-label m-0 mt-2">Password</label>
                <input type="text" id="password" className="form-control"  name="password"/>

                <label for="confirmpassword" className="form-label m-0 mt-2">Confirm Password</label>
                <input type="text" id="confirmpassword" className="form-control"  name="confirmpassword"/>

                <button className="btn btn-primary w-100 mt-3">Sign up</button>
                
                <hr/>
                <div className="d-flex justify-content-evenly">
                    <i className="fab fa-google icon"></i> <i className="fab fa-facebook-f icon"></i>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Signup
