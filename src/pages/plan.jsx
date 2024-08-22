import React, { useEffect } from 'react';
import { Navbar } from '../component/navbar';
import { Link } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowLeft, faArrowRight, faBuildingColumns, faCheck, faCoffee, faEnvelope, faLocation, faPhoneVolume, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../component/footer';

import pic1 from "../img/people3.jpg"
import pic2 from "../img/people1.jpg"
import pic3 from "../img/people4.jpg"

export const Plan = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    
    <div>
      <div className='position-sticky1'>
        <Navbar/>
      </div>

			<div className=''>
				<section className=" padding-sections">
          <div id="heading" className="light-background2">
            <div className="container-lg">
              <div className="d-md-flex d-inline justify-content-between">
                <div>
                  <h1 className="ml-text fw-bold dark-font">Investment <span className="primary1-text"> Screening</span></h1>
                </div>

                <div className="d-lg-flex justify-content-between font-bold">
                  <Link to='/' className="px-4 client-link">Home</Link>
                  <FontAwesomeIcon className=' d-none d-md-block pt-1' icon={faArrowRight}/>
                  <p className="primary1-text px-4 d-none d-md-block">About</p>           
                </div>
              </div>      
            </div>

          </div> 
        </section>

        <section className="padding-sections container-lg">
        <div>
          <div className='text-center'>
            <h2 className='grey-text'>Our Investment Package</h2>
            <p>You can select according to you budget free to conatct for more information</p>
          </div>

          <div className="pt-5">
            <div className="plan-parent-conatiner row g-3">


              <div className="col-lg-4 col-sm-6">
                <div>
                <div className='plan-container p-5'>
                  <p className=' font-bold'>Beginners</p>
                  <p className='pb-4'>"The perfect starting point to begin your real estate investment journey."</p>
                  <p className='md-text font-bold'>$ $1,000 - $5,000</p>
                  <p>Return: 4% after 6 months</p>
                  <hr />

                  <ul>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} /> Access to basic reports</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} /> Quarterly investment updates</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} />Quarterly investment updates</li>
                    
                  </ul>

                  <div className='py-5 d-flex justify-content-center'>
                    <Link to='/contact' className='plan-btn'>Choose plan</Link>
                  </div>




                </div>
              </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div>
                <div className='plan-container p-5'>
                  <p className='font-bold'>Bronze</p>
                  <p className='pb-4'>"Step up with confidence and unlock greater opportunities with our Bronze Plan."</p>
                  <p className='md-text font-bold'>$5,001 - $10,000</p>
                  <p>Return: 6% after 6 months</p>
                  <hr />

                  <ul>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} /> Everything in the Beginner Plan</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} /> Priority access to new investment opportunities</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} />Monthly investment updates</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} />Access to webinars and educational resources</li>
                    
                  </ul>

                  <div className='py-2 d-flex justify-content-center'>
                    <Link to='/contact' className='plan-btn2'>Choose plan</Link>
                  </div>




                </div>
              </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className='plan-container p-5'>
                <div >
                  <p className=' font-bold'> Silver Plan</p>
                  <p className='pb-4'>"Elevate your portfolio with Silver and enjoy enhanced benefits and returns."</p>
                  <p className='md-text font-bold'>$10,001 - $25,000</p>
                  <p>Return: 4% after 6 months</p>
                  <hr />

                  <ul>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} /> Everything in the Bronze Plan</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} /> Detailed market analysis reports</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} />One-on-one consultation with a financial advisor</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} />Access to select high-value property investments</li>                  
                  </ul>

                  <div className='py-2 d-flex justify-content-center'>
                    <Link to='/contact' className='plan-btn'>Choose plan</Link>
                  </div>




                </div>
              </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div>
                <div className='plan-container p-5'>
                  <p className='font-bold'>Gold</p>
                  <p className='pb-4'>"Maximize your potential with Gold, offering premium access and tailored support."</p>
                  <p className='md-text font-bold'>$25,001 - $50,000</p>
                  <p>Return: Return: 10% after 6 months</p>
                  <hr />

                  <ul>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} /> Everything in the Silver Plan</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} />Early access to premium investment deals</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} />Customized investment portfolio planning</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} />Access to VIP networking events</li>           
                  </ul>

                  <div className='pt-4 pb-5 d-flex justify-content-center'>
                    <Link to='/contact' className='plan-btn'>Choose plan</Link>
                  </div>




                </div>
              </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div>
                <div className='plan-container p-5'>
                  <p className='font-bold'> Platinum Plan</p>
                  <p className='pb-4'>"Experience the pinnacle of investment excellence with our Platinum Plan."</p>
                  <p className='md-text font-bold'>$50,001 - $100,000</p>
                  <p>Return: Return: 12% after 6 months</p>
                  <hr />

                  <ul>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} /> Everything in the Gold Plan</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} />Exclusive property tours</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} />Dedicated account manager</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} />Complimentary financial and tax planning services</li>           
                  </ul>

                  <div className='py-5 d-flex justify-content-center'>
                    <Link to='/contact' className='plan-btn'>Choose plan</Link>
                  </div>




                </div>
              </div>
              </div>


              <div className="col-lg-4 col-sm-6">
                <div>
                <div className='plan-container p-5'>
                  <p className='font-bold'>  Diamond Plan</p>
                  <p className='pb-4'>"Achieve unparalleled success with Diamond, where exclusive opportunities await."</p>
                  <p className='md-text font-bold'>$100,001 and above</p>
                  <p>Return: Return:5% after 6 months</p>
                  <hr />

                  <ul>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} /> Everything in the Platinum Plan</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} />Priority investment allocation</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} />Invitations to exclusive industry events</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} />Full access to all premium services and resources</li>           
                  </ul>

                  <div className='py-5 d-flex justify-content-center'>
                    <Link to='/contact' className='plan-btn'>Choose plan</Link>
                  </div>




                </div>
              </div>
              </div>

            </div>
          </div>



        </div>
      </section>
			</div>

      <Footer />



    </div>
  );
};
