import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {Redirect,useHistory} from "react-router-dom"
import './auth.css'

function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history=useHistory()
    const [errors,setErrors]=useState(null)

    const Login=()=>{
        axios.post('http://127.0.0.1:8000/auth/login/',{"email":email,"password":password})   
        .then(response=>{
            console.log(response.data)
            history.push("/")
            
        })
        .catch(error=>{
            console.log(error)
            setErrors("Invalid Credentials!")
        })
    }

    // useEffect(()=>{
    //     axios.post('http://127.0.0.1:8000/auth/login/',{"email":email,"password":password})   
    //     .then(response=>{
    //         console.log(response)
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
    // })

    console.log(email,password)
    return (<>
        
        <div className="container">
        <div className="row mt-4">
            <div className="col-md-4 mx-auto">
                <div className="border rounded m-1 p-3 shadow">
                    {
                        errors && <div class="alert alert-danger p-2 mt-2 text-center" role="alert">
                        {errors}
                        </div>
                    }
                    <h3 className="text-center">Sign in</h3>
                    
                    <label for="email" className="form-label m-0 mt-2">Email</label>
                    <input type="text" id="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} name="email"/>

                    <label for="password" className="form-label m-0 mt-2">Password</label>
                    <input type="text" id="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} name="password"/>

                    <button className="btn btn-primary w-100 mt-3" onClick={Login}>Sign in</button>
                    <hr/>
                    <div className="d-flex justify-content-evenly">
                        <i className="fab fa-google icon"></i> <i className="fab fa-facebook icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    </>
    )
}

export default Signin
