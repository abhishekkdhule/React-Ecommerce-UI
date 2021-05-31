import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom'
import Product from './Product'
import {Container,Row,Col} from 'react-bootstrap'

function Products(){
    const [prod, setProds] = useState([]);
    const [loading,setLoading]=useState(true);
    const [currObj,setcurrObj]=useState({});
    const [url,setUrl]=useState('http://127.0.0.1:8000/products')

    const fetchData = (urlpara)=>{
        fetch(urlpara)
        .then(response => response.json())
        .then((data) => {
            console.log(urlpara);
            setProds(()=>{
                console.log(data.results);
                return [...data.results];
            });
            setcurrObj(data); 
        }
        )};
    
    useEffect(() => {
        fetchData(url);
        console.log("prods"+prod);
        
    }, [])
    
    console.log(currObj.next);
    
    return (
    <>
        <div className="container-fluid">
            <div className="row" >
            {
                prod.map((cval,prod)=>{
                    return (
                        <div className="col p-1">
                        <Product key={cval.id} name={cval.prod_name} price={cval.original_price} imgUrl={cval.images[0].image}/>
                        </div>
                    );
                })
            }
            {/* <button onClick={fetchprod} >Product</button> */}
            </div>
        </div>

        <div style={{paddingLeft:"40%"}}>
            <ul class="pagination">
                <li class="page-item disabled">
                <span class="page-link">Previous</span>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
                <span class="page-link">2</span>
                </li>
                <li class="page-item"><a class="page-link" >3</a></li>
                <li class="page-item">
                <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </div>
    </>
    );
}

export default Products;