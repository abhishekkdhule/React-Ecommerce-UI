import './card.css'

function Product(props){
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
                        <i className="fas fa-shopping-cart icon_b"></i>
                    </div>
                <button className="buy_button">Buy Now</button>
            </div>
        </div>
        </>
    );
}
export default Product;