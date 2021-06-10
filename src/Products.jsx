import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom'
import Product from './Product'
import axios from 'axios'

function Products(){
    const [prod, setProds] = useState([]);
    const [loading,setLoading]=useState(true);
    const [currObj,setcurrObj]=useState({});
    const [url,setUrl]=useState('http://127.0.0.1:8000/products')

    const fetchData = (urlpara)=>{
        setLoading(true)
        console.log("fetch  data called",urlpara)
        console.log(currObj)
        if(urlpara){
            console.log("in the if")
            axios.get(urlpara)
            .then(response =>{
                setLoading(false)
                console.log(response.data)
                setProds([...response.data.results])
                setcurrObj(response.data)
            }) 
            }
        };
    
    useEffect(() => {
        fetchData(url);
    }, [])

    
    return (
    <>  {   loading ? (
            <div className="text-center " style={{marginTop:'250px'}}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> 
    ) : 
        (   <>
            <div className="container-fluid mt-4 mb-4">
            <div className="row" >
            {
                prod.map((cval)=>{
                    return (
                        <div className="col-md-3 " key={cval.id}>
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
                <li className="page-item">
                <a className="page-link" style={{cursor:"pointer"}} onClick={()=>fetchData(currObj.next)}>	 ▶️</a>
                </li>
            </ul>
        </div>        
        </>        
        )
        }
    </>
    );
}

export default Products;