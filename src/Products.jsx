import React, { useEffect, useReducer, useContext, useState, useRef } from "react";
import Product from "./ProductCard/Product";
import axios from "axios";
import LoadingProductCard from "./ProductCard/LoadingProductCard"
import { tokenContext } from "./App";
import Modal from "./Modal/Modal"

const intialState = {
	isLoading: true,
	currentObj: {},
	currentPath: "http://127.0.0.1:8000/products",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "URL_UPDATE_NEXT":
			console.log("url updated");
			return { ...state, currentPath: state.currentObj.next };
		case "URL_UPDATE_PREV":
			return { ...state, currentPath: state.currentObj.previous };
		case "FETCH_SUCCESS":
			return { ...state, isLoading: false, currentObj: action.payload };
		case "FETCH_FAIL":
			return { ...state, isLoading: true, currentObj: {} };
		default:
			return state;
	}
};


function Products() {
	const [currentState, dispatch] = useReducer(reducer, intialState);
	const [cartState, setCartState] = useState({ isAuth: false, addedToCart: false })
	const modalRef = useRef(null)


	//useEffect for getting access token
	useEffect(() => {
		if (tokenC.authState.initialToken === "unauthorized") {
			const getTokenReq = axios.create({
				baseURL: "http://localhost:8000/", withCredentials: true,
			})
			getTokenReq.get("auth/accesstoken/")
				.then((response) => {
					console.log("token", response.data)
					tokenC.tokenDispatch({ type: "updateToken", newToken: response.data.access_token, isAuth: response.data.isAuth })
					setCartState({ isAuth: true, addedToCart: false })
				})
		}
		const addToCartElement = modalRef.current

	}, [])


	const tokenC = useContext(tokenContext)
	//useEffect for pagination
	useEffect(() => {
		if (currentState.currentPath) {
			axios.get(currentState.currentPath).then((response) => {

				dispatch({
					type: "FETCH_SUCCESS",
					payload: response.data,
				});
			});
		}
	}, [currentState.currentPath]);

	console.log(modalRef, cartState)

	return (
		<>
			{currentState.isLoading ?

				(<div className="container-fluid mt-4 mb-4">
					<div className="row">
						<LoadingProductCard />
						<LoadingProductCard />
						<LoadingProductCard />
					</div>
				</div>
				) : (
					<>
						<div className="container-fluid mt-4 mb-4">
							{
								cartState.addedToCart ? (
								<div className={`d-flex justify-content-center`}>
									<span className={`rounded bg-light custom_toast p-2`}>
										<p className="fw-bold  m-0">Your Order Has Been Placed!</p>
									</span>
								</div>
								) : <p></p>
							}
							<div class="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
								<div class="d-flex">
									<div class="toast-body">
										Hello, world! This is a toast message.
									</div>
									<button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
								</div>
							</div>
							<div className="row">


								{currentState.currentObj.results.map((cval) => {
									return (
										<div className="col " key={cval.id}>
											<Product
												id={cval.id}
												name={cval.prod_name}
												price={cval.original_price}
												imgUrl={cval.images[0].image}
												cartStatus={cartState.addedToCart}
												updateCartStatus={cartState.setaddedToCart}
											/>
										</div>
									);
								})}
							</div>
						</div>

						<div style={{ display: "flex", justifyContent: "center" }}>
							<ul className="pagination text-center">
								<li className="page-item ">
									<button
										className="page-link"
										style={{ cursor: "pointer" }}
										onClick={() => dispatch({ type: "URL_UPDATE_PREV" })}
									>
										◀️
									</button>
								</li>
								<li className="page-item">
									<button
										className="page-link"
										style={{ cursor: "pointer" }}
										onClick={() => dispatch({ type: "URL_UPDATE_NEXT" })}
									>
										▶️
									</button>
								</li>
							</ul>
						</div>
					</>
				)}
		</>
	);
}

export default Products;
