import React from 'react'
import './auth.css'

function Signin() {
    return (
        <div class="container">
        <div class="row mt-4">
            <div class="col-md-4 mx-auto">
                <div className="border rounded m-1 p-3 shadow">
                    <h3 class="text-center">Sign in</h3>
                    
                    <label for="email" class="form-label m-0 mt-2">Email</label>
                    <input type="text" id="email" class="form-control"  name="email"/>

                    <label for="password" class="form-label m-0 mt-2">Password</label>
                    <input type="text" id="password" class="form-control"  name="password"/>

                    <button class="btn btn-primary w-100 mt-3">Sign in</button>
                    
                    <hr/>
                    <div class="d-flex justify-content-evenly">
                        <i class="fab fa-google icon"></i> <i class="fab fa-facebook-f icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Signin
