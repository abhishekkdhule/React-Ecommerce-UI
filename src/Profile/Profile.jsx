import React,{useState} from 'react'
import './profile.css'


function Profile() {
    
    const [onhover, setonhover] = useState("not-allowed")
    const [editable, setEditable] = useState({readonly:"readOnly",disabled:"disabled"})
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    
    const onEdit=()=>{
      setEditable({readonly:"",disabled:""})
      setonhover("")

    }

    return (
        <>
        <div class="container mt-4 ">
        <div class="d-flex main">
            <div class="profile-left  m-2 bg-white">
                <i class="fas fa-user-circle prof-icon mt-4"></i>
                <h4 class="mt-4 mb-0">Abhishek Dhule</h4>
                <p class="">(abhidhule@gmail.com)</p>
            </div>
            <div class="profile-right m-2 bg-white">
                <div class="row mb-4">
                    <div class="col-md-6 ps-4 pe-4 pt-4">
                        <h6 class=" head-deco mb-2">Name</h6>
                          <input type="text" class="form-control input-width" style={{cursor:onhover}} name="name"  value={name} onChange={(e)=>setName(e.target.value)} readOnly={editable.readonly} />
                        <h6 class="mt-4 mb-2 head-deco">Email address</h6>
                          <input type="email" class="form-control input-width" style={{cursor:onhover}} name="email"  value={email} id="" onChange={(e)=>setEmail(e.target.value)} readOnly={editable.readonly} />
                    </div>
                    <div class="col-md-6 ps-4 pe-4 pt-4">
                        <h6 class="mb-2 head-deco">Contact no.</h6>
                        <input type="number" class="form-control input-width mb-4" style={{cursor:onhover}} name="contact"  value={contact} id="" onChange={(e)=>setContact(e.target.value)} readOnly={editable.readonly} />
                        <div class="d-flex justify-content-start">
                            <button class="btn btn-outline-primary mt-4 w-25 rounded-0 edit-btn" onClick={()=>onEdit()}>Edit</button>
                            <button class="btn btn-primary mt-4 w-25 rounded-0" disabled={editable.disabled}>Update</button>
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
                        <div class="accordion-body">
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
            </div>
        </div>
        </>
    )
}

export default Profile
