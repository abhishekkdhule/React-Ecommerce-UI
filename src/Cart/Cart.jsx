import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import CartItem from './CartItem'
import './Cart.css'
import { tokenContext } from '../App'

const getTokenReq = axios.create({
    baseURL: "http://localhost:8000/", withCredentials: true,
})
function Cart() {

    const [isLoading, setLoading] = useState(true)
    const localAuthState = useContext(tokenContext)
    const [items, setItems] = useState([])
    const [orderPlaced, setOrderPlaced] = useState('d-none')
    const [addressList, setAddressList] = useState([])

    useEffect(() => {
        getTokenReq.get("auth/accesstoken/")
            .then(response => {
                setLoading(false)
                if (response.data.access_token === 'unauthorized') {
                    localAuthState.tokenDispatch({ type: 'updateToken', newToken: response.data.access_token, isAuth: false })
                }
                else {
                    localAuthState.tokenDispatch({ type: 'updateToken', newToken: response.data.access_token, isAuth: true })
                    const custAxios = axios.create({
                        baseURL: "http://localhost:8000/", withCredentials: true,
                        headers: {
                            Authorization: `Bearer ${response.data.access_token}`

                        }
                    })
                    custAxios.get("order/mycart/")
                        .then(response => {
                            setItems([...response.data])
                            console.log(response.data)
                        })
                    
                    custAxios.get("auth/address/")
                        .then(response => {
                            console.log(response.data)
                            setAddressList(response.data)
                        })
                }
            })

    }, [])

    const placeOrder = () => {
        const custAxios = axios.create({
            baseURL: "http://localhost:8000/", withCredentials: true,
            headers: {
                Authorization: `Bearer ${localAuthState.authState.initialToken}`

            }
        })
        custAxios.post("order/placeorder/", {})
            .then((response) => {
                setItems([])
                setOrderPlaced('d-flex')
                setTimeout(() => setOrderPlaced('d-none'), 2000)
            })
        console.log(localAuthState.authState.initialToken)
    }

    return (
        <>
            <div className={`${orderPlaced} justify-content-center `}>
                <span className={`rounded bg-light custom_toast p-2`}>
                    <p className="fw-bold  m-0">Your Order Has Been Placed!</p>
                </span>
            </div>
            {isLoading ? (
                <div className="text-center " style={{ marginTop: "250px" }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>) :
                (localAuthState.authState.isAuth ?
                    (
                        items.length > 0  ? (<>

                            <div className="container bg-light pt-2 pb-2 mt-4">
                                <div className="p-3 bg-white">
                                    <div className="row">
                                        <div className="col-md-6">
                                            My Cart
                                        </div>
                                        <div className="col-md-6">
                                            <select className="form-select w-50">
                                                {
                                                    addressList.map(item => {
                                                        return (
                                                            <option key={item.id} className=""> {item.addressLine1}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <hr />

                                    {
                                        items.map(item => {
                                            return (
                                                <CartItem key={item.product.id} cartObjId={item.id} product={item.product} quantity={item.quantity} />
                                            )
                                        })
                                    }
                                    <div className="row text-end">
                                        <div>
                                            <button className="btn btn-primary w-25" onClick={placeOrder}>Place Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>) : orderPlaced === 'd-none' && (<p style={{ marginTop: '150px', textAlign: 'center' }}>Your cart is empty!</p>)
                    )
                    : <p style={{ marginTop: '150px', textAlign: 'center' }}>⚠️ Sign in to view your cart!!!</p>)
            }
        </>

    )
}

export default Cart
