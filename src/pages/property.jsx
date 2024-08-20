import "aos/dist/aos.css"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar } from "../component/navbar"
import { Footer } from "../component/footer"
import { faAngleRight, faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import property1 from '../img/property1.JPG'
import property2 from '../img/property2.JPG'
import property3 from "../img/property3.JPG"
import property4 from "../img/property4.JPG"
import property5 from "../img/property5.JPG"
import property6 from "../img/property6.jpg"
import property7 from "../img/property7.JPG"

export const Property = () =>{
  return(
    <div>
      <div className='position-sticky1'>
        <Navbar/>
      </div>
      <section className="">
        <div id="heading" className="light-background2">
          <div className="container-lg">
            <div className="d-md-flex d-inline justify-content-between">
              <div>
                <h1 className="ml-text fw-bold dark-font">Our<span className="primary1-text"> Property</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between font-bold">
                <Link to='/' className="px-4 client-link">Home</Link>
                <FontAwesomeIcon className=' d-none d-md-block pt-1' icon={faArrowRight}/>
                <p className="primary1-text px-4 d-none d-md-block">Property</p>           
              </div>
            </div>      
          </div>

        </div> 
      </section>

      <section className="container-lg py-5 my-5">
        <div className="row py-5">
          <div className="col-xxl-12">
            <div className="row g-4">
              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={property1} alt="" width='100%'/>
                  <div className="dark-background p-2">
                    <p><span className="font-bold"><FontAwesomeIcon icon={faLocationDot}/> Location: </span>Abuja</p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={property2} alt="" width='100%'/>
                  <div className="dark-background p-2">
                  <p><span className="font-bold"><FontAwesomeIcon icon={faLocationDot}/> Location: </span>Lekki, Lagos</p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={property3} alt="" width='100%'/>
                  <div className="dark-background p-2">
                  <p><span className="font-bold"><FontAwesomeIcon icon={faLocationDot}/> Location: </span>Lekki, lagos</p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={property4} alt="" width='100%' height='240px'/>
                  <div className="dark-background p-2">
                  <p><span className="font-bold"><FontAwesomeIcon icon={faLocationDot}/> Location: </span>Ajah, lagos</p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={property5} alt="" width='100%' height='240px'/>
                  <div className="dark-background p-2">
                  <p><span className="font-bold"><FontAwesomeIcon icon={faLocationDot}/> Location: </span>Abuja</p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={property6} alt="" width='100%' height='240px'/>
                  <div className="dark-background p-2">
                  <p><span className="font-bold"><FontAwesomeIcon icon={faLocationDot}/> Location: </span>ikoyi, lagos</p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={property7} alt="" width='100%' height='240px'/>
                  <div className="dark-background p-2">
                  <p><span className="font-bold"><FontAwesomeIcon icon={faLocationDot}/> Location: </span>Abuja</p>
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