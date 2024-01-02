import React from 'react'
import './Login.css'
import socialDesktop from '../Images/social-desktop.png'
import socialMobile from '../Images/social-mobile.png'

const SignUp = () => {
  return (
    <div className="container login-container">
    <div className="row">
        <div className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
            <img className='socialDesktop' style={{height : '85%'}} src={socialDesktop} alt="social desktop"/>
            <img className='socialMobile' src={socialMobile} alt="social Mobile" />
        </div>
        <div className="col-md-5 col-sm-12">
            <div className="card shadow">
                <div className="card-body px-5">
                    <h4 className="card-title text-center mt-3 fw-bold"><b>Sign Up</b></h4>
                    <form>
                        <input type="text" className="p-2 form-control input-bg mt-4 mb-2" placeholder="Phone" />
                        <input type="email" className="p-2 form-control input-bg mt-4 mb-2" placeholder="Email" />
                        <input type="password" className="p-2 form-control input-bg mb-2" placeholder="Password" />
                        <div className="d-grid mt-3">
                            <button className="custom-btn custom-btn-blue">Sign Up</button>
                        </div>
                        <div className="my-4">
                            <hr className="text-muted"/>
                            <h5 className="text-muted text-center">OR</h5>
                            <hr className="text-muted"/>
                        </div>
                        <div className="mt-3 mb-5 d-grid">
                        <button className="custom-btn custom-btn-white">
                            <span className="text-muted fs-6">Already have an account ? </span>
                            <span className="ms-1 text-info fw-bold">Log In</span>
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default SignUp