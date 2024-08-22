import "aos/dist/aos.css"
import "../css/style.css"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar } from "../component/navbar"
import { useState } from "react"
import { Footer } from "../component/footer"
import { faArrowRight, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"

export const Contact = () =>{
  const [contactName, setContactName] = useState("")
  const[contactEmail, setContactEmail] = useState("")
  const[message, setMessage] = useState("")
  const location = useLocation();
  const isActive = (path) =>{
    return location.pathname === path

  }

  return(
    <div>
      <div className='position-sticky1'>
        <Navbar/>
      </div>
        <section className=" padding-sections">
          <div id="heading" className="light-background2">
            <div className="container-lg">
              <div className="d-md-flex d-inline justify-content-between">
                <div>
                  <h1 className="ml-text fw-bold dark-font">Contact <span className="primary1-text"> Us</span></h1>
                </div>

                <div className="d-lg-flex justify-content-between font-bold">
                  <Link to='/' className="px-4 client-link">Home</Link>
                  <FontAwesomeIcon className=' d-none d-md-block pt-1' icon={faArrowRight}/>
                  <p className="primary1-text px-4 d-none d-md-block">Contact</p>           
                </div>
              </div>      
            </div>

          </div> 
        </section>
 

      <section id="message" className="py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <h2 className="ml-text fw-bold text-center">Send <span className="blue-text"> Us A</span> Message</h2>
              <p className="text-secondary1 text-center">Feel free to message us with any of your complain. We will get back to you as soon as possible</p>
            </div>

          </div>
         
        
         
          <div className="row g-3">
            <div className="col-lg-8 col-md-7">
              <form action="" className=" g-3">
                <div className="">
                  <label for="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="e.g John Smith" value={contactName} onChange={(e) => setContactName(e.target.value)}/>
                </div>

                <div className="">
                  <label for="email" className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="e.g @johnsmith.gmail.com" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)}/>
                </div>

                <div className="mb-3">
                  <label for="diabilityYes" className="form-label">Message</label>
                  <textarea className="form-control" name="message" id="message" rows="9" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-lg primary1-btn">MESSAGE US</button>
                </div>
              </form>
            </div>

            <div className="col-lg-4 col-md-5">
              <div className="pb-4 pt-4">
                <div className="card pb-5">
                  <div className="card-body text-center">
                    <FontAwesomeIcon className="lg-text text-muted" icon={faLocationDot}/>
                    <h4 className="card-title m-text fw-bold my-3 pb-3">Location</h4>
                    <hr />
                    <p className="card-text  d-lg-block text-muted">710, James, Garber Crescent, Dawaki, FCT Abuja</p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="card pb-4">
                  <div className="card-body text-center py-4">
                  <FontAwesomeIcon className="lg-text text-muted" icon={faPhoneVolume}/>
                    <h4 className="card-title m-text fw-bold my-3 pb-3">Phone & Email</h4>
                    <hr />
                    <p className="card-text  d-lg-block text-muted ">(+234) 813 920 1678</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  

      <Footer />          
    </div>  
      
  )
}