import React,{useContext} from 'react'
import axios from 'axios'
import { tokenContext } from '../App'
import { useState, useEffect} from 'react'
import './Cart.css'

function CartItem({cartObjId,product,quantity}) {
    const[quant,setQuant]=useState(parseInt(quantity))
    const tokenC = useContext(tokenContext)
    const cutomReq=axios.create({
        baseURL:"http://localhost:8000/",withCredentials: true,
        headers:{
            Authorization:`Bearer ${tokenC.authState.initialToken}`
            
        }
    })

    // To increase and decrease the quantity
    const manageQunatity=(type)=>{
        if(type==='inc'){
            cutomReq.put(`order/cartitem/${cartObjId}`,{'quantity':quant+1})
            .then((response) => {
                setQuant(quant+1)
            })
            .catch((error) => {})
        }
        else{
            cutomReq.put(`order/cartitem/${cartObjId}`,{'quantity':quant-1})
            .then((response) => {
                setQuant(quant-1)
                if(quant-1 == 0)
                    window.location.reload()
            })
            .catch((error) => console.log(error.responseText))
        }
    }

    // To remove the item from cart
    const removeItem = () => {
        cutomReq.delete(`order/cartitem/${cartObjId}`)
        .then((response) => {
            window.location.reload()
        })
        .catch((error) => {
            
        })
    }
    
    return (
        <>{ quant > 0 && 
            <>
            <div className="row mt-4">
                <div className="col-md-3">
                    <div className="img_div" style={{maxWidth:'140px',height:'140px'}}>
                        <img className="prod_image" src={`https://res.cloudinary.com/djzhnqsaw/${product.images[0].image}`} alt=""/>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <div className="quantity_but" onClick={()=>manageQunatity('dec')}>-</div><p className="ms-2 me-2 mt-1">{quant}</p> <div className="quantity_but" onClick={()=>manageQunatity('inc')}>+</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h5>{product.prod_name} (Light gray, 32 GB)  (3 GB RAM)  </h5>
                    <p>3 GB RAM | 32 GB ROM | Expandable Upto 128 GB <br/> 12MP Rear Camera | 5MP Front Camera</p>
                    <p className="m-0"><strike>&#8377;{product.original_price}</strike> <span className="text-success fw-bold">{product.discount}%Off</span></p>
                    <p className="fw-bold m-0 mb-2"> &#8377;{product.original_price-(product.original_price *product.discount/ 100)}</p>
                    <span className="border bg-light   p-1 fw-bold" onClick={()=>removeItem()}>Remove</span>
                </div>
                <div className="col-md-3">
                    <h5>Total</h5>
                    <p className="fw-bold m-0">&#8377;<strike>{product.original_price*quant}</strike></p>
                    <p className="fw-bold">&#8377;{(product.original_price-(product.original_price *product.discount/ 100))*quant}</p>
                </div>
            </div>
            <hr/>
            </>
        }
    </>
    )
}

export default CartItem
