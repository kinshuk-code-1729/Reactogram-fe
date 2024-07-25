import React from 'react'
import './Card.css'
import moreAction from '../Images/more-action.png'

const Card = () => {
    return (
        <div>
            <div className="card shadow-sm">
                <div className="card-body px-2">
                    <div className="row">
                        <div className="col-6 d-flex">
                            <img className="p-2 profile-pic" alt="profile" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D" />
                            <div className="mt-2">
                                <p className="fs-6 fw-bold">Title</p>
                                <p className="location">Description</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <img className="float-end fs-3 p-2 mt-2" alt="more action" src={moreAction} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <img style={{ borderRadius: '15px' }} className="p-2 img-fluid" alt="post" src="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ludGVyfGVufDB8fDB8fHww" />
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-6 d-flex">
                            <i class="fa-regular fa-heart fs-4 ps-2"></i>
                            <i class="fa-regular fa-comment fs-4 ps-3"></i>
                            <i class="fa-solid fa-location-arrow fs-4 ps-3"></i>
                        </div>
                        <div className="col-6">
                            <span className='pe-2 fs-6 fw-bold float-end'>100 likes</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <span className="p-2 text-muted">2 Hours Ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card