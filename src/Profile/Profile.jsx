import React from 'react'
import './profile.css'

function Profile() {
    return (
        <>
            <div className="container mt-4 ">
        <div className="d-flex main">
            <div className="profile-left  m-2 bg-white">
                <i className="fas fa-user-circle prof-icon mt-4"></i>
                <h4 className="mt-4 mb-0">Abhishek Dhule</h4>
                <p className="">(abhidhule@gmail.com)</p>
            </div>
            <div className="profile-right m-2 bg-white">
                <div className="row mb-4">
                    <div className="col-md-6 ps-4 pe-4 pt-4">
                        <h6 className=" head-deco mb-2">Name</h6>
                        <input type="text" className="form-control input-width" name="name" placeholder="Abhishek Dhule" value="Abhishek Dhule" readOnly />
                        <h6 className="mt-4 mb-2 head-deco">Email address</h6>
                        <input type="email" className="form-control input-width" name="email" placeholder="abhi@gmail.com" value="abhi@gmail.com" id="" readOnly />
                        
                    </div>
                    <div className="col-md-6 ps-4 pe-4 pt-4">
                        <h6 className="mb-2 head-deco">Contact no.</h6>
                        <input type="number" className="form-control input-width mb-4" name="contact" placeholder="9137545714" value="9137545714" id="" readOnly/>
                        <div className="d-flex justify-content-start">
                            <button className="btn btn-outline-primary mt-4 w-25 rounded-0 edit-btn">Edit</button>
                            <button className="btn btn-primary mt-4 w-25 rounded-0 disabled">Update</button>
                        </div>
                    </div>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Manage Address
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                          </div>
                        </div>
                      </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          My Orders
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          My Wishlist
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Profile
