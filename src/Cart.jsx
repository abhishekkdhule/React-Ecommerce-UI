import React from 'react'
import './Cart.css'
function Cart() {
    return (
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
            <div className="row">
                <div className="col-md-3">
                    <div className="img_div">
                        <img className="prod_image" src="https://rukminim1.flixcart.com/image/416/416/k66sh3k0/mobile-display/h/z/g/sm38-sprotech-original-imafd7yycchwbgq3.jpeg?q=70" alt=""/>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <div className="quantity_but">-</div><p className="ms-1 me-1">2</p> <div className="quantity_but">+</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h5>Redmi 5 (Light gray, 32 GB)  (3 GB RAM)  </h5>
                    <p>3 GB RAM | 32 GB ROM | Expandable Upto 128 GB <br/> 12MP Rear Camera | 5MP Front Camera</p>
                    <p className="m-0"><strike>&#8377;6999</strike></p>
                    <p className="fw-bold m-0 mb-2"> &#8377;5999</p>
                    <span className="border bg-light   p-1 fw-bold">Remove</span>
                </div>
                <div className="col-md-3">
                    <h5>Total</h5>
                    <p className="fw-bold">&#8377;11998</p>
                </div>
            </div>
            <hr/>
            <div className="row text-end">
                <div>
                    <button className="btn btn-primary w-25">Place Order</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cart
