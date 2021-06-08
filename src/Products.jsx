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
        console.log("fetch  data called",urlpara)
        console.log(currObj)
        if(urlpara){
            console.log("in the if")
            fetch(urlpara)
            .then(response => response.json())
            .then((data) => {
                console.log("data",data);
                setProds(()=>{
                    return [...data.results];
                });
                setcurrObj(data); 

            }

        )
    }};
    
    useEffect(() => {
        fetchData(url);
    }, [])

    
    return (
    <>
        <div className="container-fluid">
            <div className="row" >
            {
                prod.map((cval)=>{
                    return (
                        <div className="col p-1" key={cval.id}>
                        <Product name={cval.prod_name} price={cval.original_price}  imgUrl={cval.images[0].image}/>
                        </div>
                    );
                })
            }
            </div>
        </div>
                
        <div style={{display:"flex" , justifyContent:"center" }}>
            <ul className="pagination text-center">
                <li className="page-item ">
                <a className="page-link" style={{cursor:"pointer"}} onClick={()=>fetchData(currObj.previous)}>◀️</a>
                </li>
                {/* <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active" aria-current="page">
                <span className="page-link">2</span>
                </li>
                <li className="page-item"><a className="page-link" >3</a></li> */}
                <li className="page-item">
                <a className="page-link" style={{cursor:"pointer"}} onClick={()=>fetchData(currObj.next)}>	 ▶️</a>
                </li>
            </ul>
        </div>
    </>
    );
}

export default Products;