import React, { useEffect } from 'react';
import { Navbar } from '../component/navbar';
import { Link } from 'react-router-dom';

import "../css/home.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { CoverImg } from '../swipeConatiner/homeSwipes';
import groupPeople1 from "../img/GroupPeople1.jpg"
import manComputer from "../img/manComputer.jpg"
import buildingIcon from "../img/buildingIcon2.png"
import investigationIcon from "../img/investigationIcon.png"
import confirmationIcon from "../img/confirmationIcon.png"
import coverPage2 from "../img/coverPage2.jpg"
import building from "../img/building3.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowLeft, faArrowRight, faBuildingColumns, faCheck, faCoffee, faEnvelope, faLocation, faPhoneVolume, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../component/footer';

export const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    
    <div>
      <div className='position-sticky1'>
        <Navbar/>
      </div>

      <div>
        <CoverImg />
      </div>

      <section className='container-lg padding-sections'>
        <div className='text-center my-5 py-3'>
          <h1 className='grey-text'>Quality of Service</h1>
          <p>We’ve revolutionized real estate investing by linking individual investors with diverse opportunities from top CRE firms nationwide.</p>
        </div>

        <div className="row g-3" >
          <div className="col-md-6 col-xxl-4">
            <div className='box-shadow p-4 ' data-aos="fade-up" data-aos-duration="1000">
              <img src={buildingIcon} alt="" width='80px' className='pb-3'/>
              <h3 className='pb-3'>Diverse Commercial Real Estate Deal Flow</h3>
              <p>Explore a range of carefully curated commercial real estate investments across various asset classes, geographies, and risk profiles.</p>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className='box-shadow p-4' data-aos="fade-up" data-aos-duration="1000">
              <img src={investigationIcon} alt="" width='80px' className='pb-3'/>
              <h3 className='pb-3'>Deep Screening and Diligence Process</h3>
              <p>Gain confidence with our comprehensive due diligence process and extensive property details, financials, and market insights.</p>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className='box-shadow p-4' data-aos="fade-up" data-aos-duration="1000">
              <img src={confirmationIcon} alt="" width='80px' className='pb-3'/>
              <h3 className='pb-3'>Industry Insights and Experience</h3>
              <p>Our team of professional real estate investment analysts has evaluated thousands of opportunities and brings unique insights to each deal.</p>
            </div>
          </div>
        </div>

      </section>

      <section className='padding-sections'>
        <div className='container-lg'> 
          <div className="row">
            <div className="col-md-6 text-md-start text-center">
              <div className='who-we-are-text'>
                <div>
                  <h2 className='grey-text pb-4' data-aos="fade-right" data-aos-duration="1000">Company Overview</h2>
                  <p data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="300">Emford Concept Limited is a leading real estate company specializing in the development and sale of premium residential and commercial properties, the acquisition and resale of landed properties, and offering lucrative real estate investment opportunities. We are committed to delivering exceptional value to our clients through high-quality construction, strategic property investments, and a customer-centric approach. At Emford, we also provide tailored investment opportunities that offer attractive returns within a 6-month to 1-year timeframe, depending on the chosen investment plan.</p>
                  <div className="pt-5" data-aos="fade-right" data-aos-duration="1000">
                   <Link to='/about' className='primary1-btn'>Learn More</Link>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-none d-md-block">
                <img  className='width-100 who-we-are-img' src={groupPeople1} alt="" />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='padding-sections'>
        <div className='container-lg overflow-hidden'> 
          <div className="row">

            <div className="col-md-6">
              <div className="d-none d-md-block">
                <img  className='width-100 who-we-are-img' src={manComputer} alt="" />
              </div>

            </div>


            <div className="col-md-6 text-md-start text-center">
              <div className='who-we-are-text'>
                <div>
                  <h2 className='grey-text pb-4' data-aos="fade-left" data-aos-duration="1000">Company Profile</h2>
                  <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300"> Emford is a premier real estate company with a clear focus on transforming the way people invest, buy, and sell properties. With a strong foundation built on years of industry expertise, we excel in the development and sale of high-quality buildings, strategic buying and reselling of landed properties, and providing investment opportunities that yield significant returns. Our comprehensive services are designed to meet the diverse needs of our clients, from individuals looking to purchase their dream home to investors seeking profitable opportunities in real estate.</p>
                  <div data-aos="fade-left" data-aos-duration="1000"  className="pt-5 pb-5">
                   <Link to="/about" className='primary1-btn'>Learn More</Link>
                  </div>

                </div>
              </div>
            </div>

 
          </div>
        </div>
      </section>

      <section className="padding-sections container-lg">
        <div>
          <div className='text-center'>
            <h2 className='grey-text pb-4'>Why Invest with Us</h2>
          </div>
          <div className="row g-3">
            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className='box-shadow border-radius-10px p-3'>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="d-flex mb-3">
                    <h1 className='border-radius-50 light-green-bg px-3 py-1'>1</h1>
                  </div>

                  <h5 className='pb-2'>High Returns:</h5>
                  <p>We offer some of the most competitive returns in the market, with options for every level of investor.</p>
                </div>
              </div>

            </div>

            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className='box-shadow border-radius-10px p-3'>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="d-flex mb-3">
                    <h1 className='border-radius-50 light-pink-bg px-3 py-1'>2</h1>
                  </div>

                  <h5 className='pb-2'>Diverse Portfolio:</h5>              
                  <p>Investments are spread across various property types and locations to minimize risk and maximize potential gains.</p>
                </div>
              </div>

            </div>

            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className='box-shadow border-radius-10px p-3' >
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="d-flex mb-3">
                    <h1 className='border-radius-50 light-green-bg px-3 py-1'>3</h1>
                  </div>

                  <h5 className='pb-2'>Expert Management:</h5>
                  <p>Our team of real estate experts ensures that your money is placed in the best opportunities available.</p>
                </div>

              </div>

            </div>

            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className='box-shadow border-radius-10px p-3'>
                <div data-aos="fade-up" data-aos-duration="1000">


                  <div className="d-flex mb-3">
                    <h1 className='border-radius-50 light-brown-bg px-3 py-1'>4</h1>
                  </div>

                  <h5 className='pb-2'>Transparency & Trust:</h5>
                  <p>You’ll receive regular updates and reports on how your investment is performing..</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      <section className='cover-page padding-sections'>
          <div className="advantage-container ">
            <img src={coverPage2} alt="Description" className="advantage-image" />
            <div className="advantage-overlay"></div>
            <div className="advantage-content "> 
              <div className="container-lg pt-5 mt-2">


                <div>
                    <div className="row g-3 pt-5">
                      <div className='col-12 pb-3'>
                        <h2 className='d-flex justify-content-center'>OUR ADVANTAGES</h2>
                      </div>
                      <div className="col-sm-6" data-aos="fade-down" data-aos-duration="1000">
                        <div className='advantage-box p-3'> 
                          <h5 className='pb-2'>Tailored Investment Plans</h5>
                          <p>Unlike other companies that offer generic investment packages, we provide tailored plans that cater to different levels of investors—whether you're a beginner or a seasoned professional. This ensures that your investment is aligned with your financial goals and risk tolerance.</p>
                        </div>

                      </div>

                      <div className="col-sm-6" data-aos="fade-down" data-aos-duration="1000">
                        <div className='advantage-box p-3'>
                          <h5 className='pb-2'>High-Quality Property Selection</h5>
                          <p>We invest in high-potential, carefully vetted properties in prime locations. Our team of experts conducts rigorous due diligence, ensuring that every investment opportunity is backed by solid market research and has a strong potential for growth, giving you a competitive edge over other investment options.</p>
                        </div>
                        
                      </div>


                      <div className="col-sm-6" data-aos="fade-up" data-aos-duration="1000">
                        <div className='advantage-box p-3'>
                          <h5 className='pb-2'> Transparent and Regular Reporting</h5>
                          <p>Transparency is at the core of our operations. We provide our investors with regular, detailed reports on the performance of their investments. This level of transparency ensures you are always informed about where your money is going and how it’s performing, a feature not all competitors offer.</p>
                        </div>
                        
                      </div>

                      <div className="col-sm-6" data-aos="fade-up" data-aos-duration="1000">
                        <div className='advantage-box p-3'>
                          <h5 className='pb-2'>Proven Track Record of Success</h5>
                          <p>Our company has a proven track record of delivering consistent, high returns to our investors. We have a history of successful investments and satisfied clients, which sets us apart from other companies that may lack the same level of experience and reliability.</p>
                        </div>
                        
                      </div>
                    </div>
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
                    <Link to="/contact" className='plan-btn'>Choose plan</Link>
                  </div>




                </div>
              </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div>
                <div className='plan-container p-5'>
                  <p className=' font-bold'>Bronze</p>
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

                  <div className='py-5 d-flex justify-content-center'>
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
                  <p className='md-text font-bold'>Investment Amount: $10,001 - $25,000</p>
                  <p>Return: 4% after 6 months</p>
                  <hr />

                  <ul>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} /> Everything in the Bronze Plan</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} /> Detailed market analysis reports</li>
                    <li className='pb-2'><FontAwesomeIcon className='green-bg border-radius-50 p-small' icon={faCheck} />One-on-one consultation with a financial advisor</li>
                    
                  </ul>

                  <div className='py-2 d-flex justify-content-center'>
                    <Link to="/contact" className='plan-btn'>Choose plan</Link>
                  </div>




                </div>
              </div>
              </div>

            </div>
          </div>

          <div className="d-flex justify-content-center pt-4">
            <Link to="/plan">View all <FontAwesomeIcon icon={faArrowRight}/></Link>
          </div>



        </div>
      </section>

      <section className="padding-sections container-lg overflow-hidden">
        <div className='due-dilligence'>
          <div>
            <div className="row g-5">
              <div className="col-md-6">
                <div>
                  <div className='d-none d-md-block'>
                   <img src={building} alt="" />
                  </div>

                </div>

              </div>

              <div className="col-md-6 text-md-start text-center">
                <div>
                  <h2  className='grey-text font-bold lg-text pb-3' data-aos="fade-left" data-aos-duration="1000">Investments supported by thorough due diligence</h2>

                  <p className='pb-3' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">Following a rigorous sponsor and deal review process, we work to equip you with the tools to make your own informed investment decisions. Dive into our detail pages, or connect with an Investor Relations team member to find out more.</p>
                  <Link to='/investor/screening' className='font-bold' data-aos="fade-left" data-aos-duration="1000">See for yourself <FontAwesomeIcon icon={faArrowRight}/></Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-sections container-lg">
        <div>
          <div>
            <div className='text-center'>
              <h2 className='grey-text'>Investor Verdicts</h2>
              <p>Dont just here it from us .... Let our investor decide</p>
            </div>


            <div className="row g-4 text-center my-5">
              <div className="col-lg-4 col-12 col-md-6" >
                <div className="box-shadow  px-4 py-5 border-radius-10px">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/>
                  <p data-aos="fade-up"  data-aos-duration="1000">"Investing with EMFORD has been a game-changer. The returns I’ve seen in just six months are incredible!"</p>
                  <FontAwesomeIcon icon={faQuoteRight} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/>  
                  <p className='text-muted'>John D.</p>
                  <p className='sm-text text-muted'>lagos.</p>
                </div>
      
              </div>

              <div className="col-lg-4 col-12  col-md-6" >
                <div className="box-shadow  parent-speech-box2 px-4 py-5 border-radius-10px">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/>
                  <p data-aos="fade-up"  data-aos-duration="1000">I was new to real estate investing, but the team made everything so simple. I’ve already reinvested my returns!</p>
                  <FontAwesomeIcon icon={faQuoteRight} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/> 
                  <p className='text-muted'>Chimize .O.</p>
                  <p className='sm-text text-muted'>lagos.</p>
                </div>

              </div>

              

              <div className="col-lg-4 col-12 col-md-6 ">
                <div className="box-shadow  parent-speech-box3 px-4 py-5 border-radius-10px">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/> 
                  <p data-aos="fade-up"  data-aos-duration="1000">The transparency and professionalism of EMFORD made me feel confident about where my money was going. Highly recommended!.</p>
                  <FontAwesomeIcon icon={faQuoteRight} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/>  
                  <p className='text-muted'>Odion E.</p>
                  <p className='sm-text text-muted'>Abuja.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>



      <Footer />



    </div>
  );
};
