import './card.css'
import {useContext,useEffect} from 'react';
import { tokenContext } from '../App';
import axios from 'axios';

function Product(props){

    const tokenC=useContext(tokenContext)
   
    const addToCart=()=>{
        const addToCartReq=axios.create({
            baseURL:"http://localhost:8000/",withCredentials: true,
            headers:{
                Authorization:`Bearer ${tokenC.authState.initialToken}`
        
            }
        })

        addToCartReq.post("order/addtocart/",{"product":props.id})
        .then(()=>{
            //display a popup to with message saying product added to cart
        })
        .catch(error=>{
            //display a pop up to ask user to log in
        })
    }
    
    return(
        <>
        <div className="product_card">
            <div className="product_image">
                <div className="product_discount">
                <p className="discount_text">10%</p>
                </div>
                <img className="product_img" src={`https://res.cloudinary.com/djzhnqsaw/${props.imgUrl}`} alt=""/>
            </div>
            <div className="product_details">
                <h5 className="product_heading">{props.name}</h5>
                <h6 className="product_heading">&#8377;{props.price}</h6>
                <p className="product_desc">{props.desc}</p>
                    <div className="icon_div">
                        <i className="fas fa-heart icon_a"></i>
                        <i onClick={()=>addToCart()} className="fas fa-shopping-cart icon_b"></i>
                    </div>
                <button className="buy_button">Buy Now</button>
            </div>
        </div>
        </>
    );
}
export default Product;