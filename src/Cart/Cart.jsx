import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import CartItem from './CartItem'
import './Cart.css'
import { tokenContext } from '../App'

const getTokenReq=axios.create({
    baseURL:"http://localhost:8000/",withCredentials: true,
})
function Cart() {
    const tokenC = useContext(tokenContext)
    const custAxios=axios.create({
        baseURL:"http://localhost:8000/",withCredentials: true,
        headers:{
            Authorization:`Bearer ${tokenC.tokenState}`
    
        }
    }) 
    const[items,setItems]=useState([])

    useEffect(()=>{
        getTokenReq.get("auth/accesstoken/")
        .then(response=>{ console.log(response.data)
        tokenC.tokenDispatch({type:'updateToken',newToken:response.data.access_token})
        })

    },[])

    useEffect(()=>{
            custAxios.get("order/mycart/")
            .then(response => {
                setItems([...response.data])
            })
            .catch(error => console.log(tokenC.tokenState))
    },[tokenC.tokenState])
    
    console.log(items)
    return (
       <>
       <div className="container bg-light pt-2 pb-2 mt-4">
        
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
                <CartItem key={item.product.id} product={item.product} quantity={item.quantity} />
                )
            })
       }
       <div className="row text-end">
                <div>
                    <button className="btn btn-primary w-25">Place Order</button>
                </div>
            </div>
        </div>
    </div>
       </>
    )
}

export default Cart
