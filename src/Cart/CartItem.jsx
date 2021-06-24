import React,{useContext} from 'react'
import axios from 'axios'
import { tokenContext } from '../App'
import { useState, useEffect} from 'react'

function CartItem({cartObjId,product,quantity}) {
    const[quant,setQuant]=useState(parseInt(quantity))
    const tokenC = useContext(tokenContext)
    const updateQuantReq=axios.create({
        baseURL:"http://localhost:8000/",withCredentials: true,
        headers:{
            Authorization:`Bearer ${tokenC.tokenState}`
            
        }
    })

    const manageQunatity=()=>{
        updateQuantReq.put(`order/cartitem/${cartObjId}`,{'quantity':quant+1})
        setQuant(quant+1)
    }
    
    return (
        <>
            <div className="row mt-4">
                <div className="col-md-3">
                    <div className="img_div">
                        <img className="prod_image" src={`https://res.cloudinary.com/djzhnqsaw/${product.images[0].image}`} alt=""/>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <div className="quantity_but">-</div><p className="ms-2 me-2 mt-1">{quant}</p> <div className="quantity_but" onClick={()=>manageQunatity()}>+</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h5>{product.prod_name} (Light gray, 32 GB)  (3 GB RAM)  </h5>
                    <p>3 GB RAM | 32 GB ROM | Expandable Upto 128 GB <br/> 12MP Rear Camera | 5MP Front Camera</p>
                    <p className="m-0"><strike>&#8377;{product.original_price}</strike></p>
                    <p className="fw-bold m-0 mb-2"> &#8377;5999</p>
                    <span className="border bg-light   p-1 fw-bold">Remove</span>
                </div>
                <div className="col-md-3">
                    <h5>Total</h5>
                    <p className="fw-bold">&#8377;11998</p>
                </div>
            </div>
            <hr/>
            </>
    )
}

export default CartItem
