import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import CartItem from './CartItem'
import './Cart.css'
import { tokenContext } from '../App'

const getTokenReq=axios.create({
    baseURL:"http://localhost:8000/",withCredentials: true,
})
function Cart() {
    console.log('in component')
    const [isLoading,setLoading]=useState(true)
    const localAuthState = useContext(tokenContext)
    const[items,setItems]=useState([])
    
    useEffect(()=>{
        getTokenReq.get("auth/accesstoken/")
        .then(response=>{ 
            console.log("this is response",response.data.access_token)
            setLoading(false)
            if(response.data.access_token==='unauthorized'){
                localAuthState.tokenDispatch({type:'updateToken',newToken:response.data.access_token,isAuth:false})
            }
            else{
                localAuthState.tokenDispatch({type:'updateToken',newToken:response.data.access_token,isAuth:true})
                const custAxios=axios.create({
                    baseURL:"http://localhost:8000/",withCredentials: true,
                    headers:{
                        Authorization:`Bearer ${response.data.access_token}`
                
                    }
                }) 
                custAxios.get("order/mycart/")
                .then(response => {
                    setItems([...response.data])
                })
            }
        })

    },[])
    

    console.log(localAuthState)
    return (
       <>
        { isLoading ? (
        <div className="text-center " style={{ marginTop: "250px" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>) :
            (localAuthState.authState.isAuth ?
            (<div className="container bg-light pt-2 pb-2 mt-4">
                <div className="p-3 bg-white">
                    <div className="row">
                        <div className="col-md-6">
                            My Cart
                        </div>
                        <div className="col-md-6">
                            <select className="form-select w-50">
                                <option>Address 1</option>
                                <option>Address 2</option>
                            </select>
                        </div>
                    </div>
                    <hr/>
                    
            {
                    items.map(item=>{
                        return(
                        <CartItem key={item.product.id} cartObjId={item.id} product={item.product} quantity={item.quantity} />
                        )
                    })
            }
            <div className="row text-end">
                        <div>
                            <button className="btn btn-primary w-25">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>)
    : <p style={{marginTop:'150px',textAlign:'center'}}>⚠️ Sign in to view your cart!!!</p>)
    }
    </>

    )
}

export default Cart
