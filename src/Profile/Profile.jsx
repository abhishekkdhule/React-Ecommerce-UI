import React, { useState, useContext, useEffect } from 'react'
import './profile.css'
import { tokenContext } from '../App'
import axios from 'axios'

const getTokenReq = axios.create({
	baseURL: "http://localhost:8000/", withCredentials: true,
})

function Profile() {
	const currentAuthState = useContext(tokenContext);
	const [onhover, setonhover] = useState("not-allowed")
	const [editable, setEditable] = useState({ readonly: "readOnly", disabled: "disabled" })
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [contact, setContact] = useState("")
	const [isLoading, setisLoading] = useState(true)
	const [updateStatus, setUpdateStatus] = useState(false)
	const [currentTab, setCurrentTab] = useState("profile")
	const [wishlistedProducts, setWishlistedProducts] = useState([])

	const onEdit = () => {
		setEditable({ readonly: "", disabled: "" })
		setonhover("")
	}


	useEffect(() => {
		getTokenReq.get("auth/accesstoken/")
			.then(response => {
				setisLoading(false)
				if (response.data.access_token === "unauthorized") {
					currentAuthState.tokenDispatch({ type: "updateToken", newToken: response.data.access_token, "isAuth": false })
				}
				else {
					currentAuthState.tokenDispatch({ type: "updateToken", newToken: response.data.access_token, "isAuth": true })
					const getUserReq = axios.create({
						baseURL: "http://localhost:8000/", withCredentials: true,
						headers: {
							Authorization: `Bearer ${response.data.access_token}`
						}
					})
					getUserReq.get("auth/profile/")
						.then(response => {
							setContact(response.data.phoneNo)
							setName(response.data.user.name)
							setEmail(response.data.user.email)
						})
					getUserReq.get("order/history")
						.then(response => {
							let orderHistoryEle = document.getElementById('orderHistory')
						})

				}
			})
	}, [])

	const updateData = () => {
		const updateReq = axios.create({
			baseURL: "http://localhost:8000/", withCredentials: true,
			headers: {
				Authorization: `Bearer ${currentAuthState.authState.initialToken}`
			}
		})
		updateReq.put("auth/profile/", { "name": name, "email": email, "phoneNo": contact, "is_active": true })
			.then(response => {
				console.log(response.data)
				setUpdateStatus(true)
				setonhover("not-allowed")
				setEditable({ readonly: "readOnly", disabled: "disabled" })
			})
	}

	const loadWishlistedProducts = () => {
		const customReq = axios.create({
			baseURL: "http://localhost:8000/", withCredentials: true,
			headers: {
				Authorization: `Bearer ${currentAuthState.authState.initialToken}`
			}
		})
		customReq.get("order/wishlist/")
			.then(response => {
				console.log(response.data)
				setCurrentTab('wishlist')
				setWishlistedProducts(response.data)
			})
	}

	return (
		<>
			{isLoading ? (
				<div className="text-center " style={{ marginTop: "250px" }}>
					<div className="spinner-border text-primary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>) :
				currentAuthState.authState.isAuth ?
					(
						<div class="container mt-4 ">
							<div class="d-flex main">
								<div class="profile-left  m-2 bg-white p-2">
									<i class="fas fa-user-circle prof-icon mt-4"></i>
									<h4 class="mt-4 mb-0">Abhishek Dhule</h4>
									<p class="">(abhidhule@gmail.com)</p>
									<hr />
									<p onClick={() => loadWishlistedProducts()}>Wishlist</p>
									<hr />
									<p>Order History</p>

								</div>
								{currentTab === 'profile' &&
									<div class="profile-right m-2 bg-white">
										{
											updateStatus ? (
												<div class="alert alert-success alert-dismissible d-flex align-items-center m-2" style={{ height: '45px' }} role="alert">
													<i class="fas fa-check-circle me-2" style={{ fontSize: '24px' }}></i>
													<div>
														Profile updated successfully!!!
													</div>
													<button type="button" class="btn-close p-2 m-1" data-bs-dismiss="alert" aria-label="Close"></button>
												</div>
											) : <p></p>
										}
										<div class="row mb-4">
											<div class="col-md-6 ps-4 pe-4 pt-4">
												<h6 class=" head-deco mb-2">Name</h6>
												<input type="text" class="form-control input-width" style={{ cursor: onhover }} name="name" value={name} onChange={(e) => setName(e.target.value)} readOnly={editable.readonly} />
												<h6 class="mt-4 mb-2 head-deco">Email address</h6>
												<input type="email" class="form-control input-width" style={{ cursor: onhover }} name="email" value={email} id="" onChange={(e) => setEmail(e.target.value)} readOnly={editable.readonly} />
											</div>
											<div class="col-md-6 ps-4 pe-4 pt-4">
												<h6 class="mb-2 head-deco">Contact no.</h6>
												<input type="number" class="form-control input-width mb-4" style={{ cursor: onhover }} name="contact" value={contact} id="" onChange={(e) => setContact(e.target.value)} readOnly={editable.readonly} />
												<div class="d-flex justify-content-start">
													<button class="btn btn-outline-primary mt-4 w-25 rounded-0 edit-btn" onClick={() => onEdit()}>Edit</button>
													<button class="btn btn-primary mt-4 w-25 rounded-0" disabled={editable.disabled} onClick={() => updateData()}>Update</button>
												</div>
											</div>
										</div>
										<div class="accordion" id="accordionExample">
											<div class="accordion-item">
												<h2 class="accordion-header" id="headingOne">
													<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
														Manage Addresses
													</button>
												</h2>
												<div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
													<div class="accordion-body">

														<button class="btn btn-primary">+ Add New Address</button>
														<div class="border p-2 ps-3 pe-3 mt-2">
															<div class="d-flex justify-content-between">
																<span class="add-type ps-1 pe-1"><i class="fas fa-home"></i> Home</span>
																<i class="fas fa-trash-alt mt-2"></i>
															</div>
															<p class="m-0 mt-1">A-604 Agarwal Chai Center, Yk Nagar New Viva College Road, Virar West.</p>
														</div>
													</div>
												</div>
											</div>
											<div class="accordion-item">
												<h2 class="accordion-header" id="headingTwo">
													<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
														My Orders
													</button>
												</h2>
												<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
													<div class="accordion-body" id="orderHistory">
														<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
													</div>
												</div>
											</div>
											<div class="accordion-item">
												<h2 class="accordion-header" id="headingThree">
													<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
														My Wishlist
													</button>
												</h2>
												<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
													<div class="accordion-body">
														<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
													</div>
												</div>
											</div>
										</div>
									</div>
								}
								{
									currentTab === "wishlist" &&
									<div class="profile-right m-2 bg-white">
										{wishlistedProducts.map(item => {
											return (<>
												<div className="row mt-4">
													<div className="col-md-4">
														<div className="img_div" style={{ maxWidth: '140px', height: '140px' }}>
															<img className="prod_image" src={`https://res.cloudinary.com/djzhnqsaw/${item.product.images[0].image}`} alt="" />
														</div>
													</div>
													<div className="col-md-8">
														<h5>{item.product.prod_name} (Light gray, 32 GB)  (3 GB RAM)  </h5>
														<p>3 GB RAM | 32 GB ROM | Expandable Upto 128 GB <br /> 12MP Rear Camera | 5MP Front Camera</p>
														<p className="m-0"><strike>&#8377;{item.product.original_price}</strike> <span className="text-success fw-bold">{item.product.discount}%Off</span></p>
														<p className="fw-bold m-0 mb-2"> &#8377;{item.product.original_price - (item.product.original_price * item.product.discount / 100)}</p>
													</div>
												</div>
												<hr />
											</>
											)
										})
										}
									</div>
								}
								{
									currentTab === "orderhistory" &&
									<div class="profile-right m-2 bg-white">

									</div>
								}
							</div>
						</div>
					) : <p style={{ marginTop: '150px', textAlign: 'center' }}>⚠️ Sign in to view your Profile!!!</p>
			}
		</>
	)
}

export default Profile
