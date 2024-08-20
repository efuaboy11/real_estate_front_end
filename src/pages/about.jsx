import React, { useEffect } from 'react';
import { Navbar } from '../component/navbar';
import { Link } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowLeft, faArrowRight, faBuildingColumns, faCheck, faCoffee, faEnvelope, faLocation, faPhoneVolume, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../component/footer';

import pic1 from "../img/handHouse.jpg"
import pic2 from "../img/peopleHand.jpg"

export const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    
    <div>
      <div className='position-sticky1'>
        <Navbar/>
      </div>

      <div>
        <section className=" padding-sections">
          <div id="heading" className="light-background2">
            <div className="container-lg">
              <div className="d-md-flex d-inline justify-content-between">
                <div>
                  <h1 className="ml-text fw-bold dark-font">About <span className="primary1-text"> Us</span></h1>
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

        <section className="container-lg padding-sections">
          <div>
            <div>

              <div className="row">
                <div className="col-lg-7">
                  <h2 className='grey-text'>EMFORD  AT A GLANCE</h2>
                  <br />
                  <p><span className="font-bold primary1-text">Invest in your future with confidence and clarity </span><br />

                  Emford Concept Limited is a leading real estate company specializing in the development and sale of premium residential and commercial properties, the acquisition and resale of landed properties, and offering lucrative real estate investment opportunities. <br />
                    <br />

                    We are committed to delivering exceptional value to our clients through high-quality construction, strategic property investments, and a customer-centric approach. At Emford, we also provide tailored investment opportunities that offer attractive returns within a 6-month to 1-year timeframe, depending on the chosen investment plan. <br />
                    <br />
                    Emford is a premier real estate company with a clear focus on transforming the way people invest, buy, and sell properties. With a strong foundation built on years of industry expertise, we excel in the development and sale of high-quality buildings, strategic buying and reselling of landed properties, and providing investment opportunities that yield significant returns. Our comprehensive services are designed to meet the diverse needs of our clients, from individuals looking to purchase their dream home to investors seeking profitable opportunities in real estate.<br />
                    <br />
                    **Discover the EMFORD difference - <span className="font-bold primary1-text"> Unlock new opportunities with strategic investments</span>**
                  </p>
                </div>

                <div className="col-lg-5 d-none d-lg-block">
                  <div>
                    <img src={pic1} width="100%"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-lg padding-sections">
          <div>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="box-shadow px-5 pt-5 pb-4 border-radius-10px">
                  <h5 className='grey-text'>What We Do</h5>
                  <p>We pool resources from individual investors to acquire, develop, and manage a diverse portfolio of real estate properties. Your money is strategically invested in land, residential, and commercial properties with the goal of maximizing returns. We handle the complexities of real estate investment, so you can enjoy passive income with minimal effort.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="box-shadow p-5 border-radius-10px">
                  <h5 className='grey-text'>Where Your Money Goes</h5>
                  <p>Every dollar you invest is used to purchase, develop, and manage high-potential properties. This includes residential buildings, commercial spaces, and land in prime locations. Our team conducts thorough due diligence to ensure every investment is sound and poised for growth.</p>
                </div>
              </div>

              <div className="col-lg-12 ">
                <div className="row justify-content-center">
                  <div className="col-md-10 box-shadow p-5 border-radius-10px">
                    <div>
                      <div className='text-center'>
                      <h5 className='grey-text'>MISSION</h5>
                        <p>At Emford, our mission is to create exceptional value for our clients by offering superior real estate solutions and investment opportunities. We aim to exceed expectations by delivering high-quality properties and ensuring our clients benefit from lucrative real estate investments. Our commitment to excellence, transparency, and customer satisfaction drives everything we do.
                        </p>
                      </div>
                  </div>
                </div>
                </div>


            </div>
            </div>
          </div>
        </section>

        <section className="padding-sections">
          <div className="light-background2">
            <div className='container-lg py-4'>
              <div className='text-center '>
                <h2>Core Services</h2>
                <p>This are the services e offer to you at EMFORD</p>
              </div>

              <div>
                <div>
                  <p className="font-bold">1.Build-to-Sell Developments:</p>
                  <p className="ps-4">Emford specializes in the construction and sale of residential and commercial properties. Our development projects are carefully planned and executed with attention to detail, ensuring that each property meets the highest standards of quality, functionality, and aesthetic appeal. We collaborate with top architects, engineers, and construction experts to create properties that are not only visually stunning but also highly functional and sustainable.</p>
                </div>
              </div>

              <div>
                <div>
                  <p className="font-bold">2.Buying and Reselling Landed Properties:</p>
                  <p className="ps-4">We are experts in identifying and acquiring prime real estate opportunities. Emford purchases landed properties in strategic locations, adds value through development or enhancement, and resells them at a profit. Our deep understanding of the real estate market allows us to identify properties with high growth potential, providing our clients with valuable investment options.</p>
                </div>
              </div>

              <div>
                <div>
                  <p className="font-bold">3.Real Estate Investment Opportunities:</p>
                  <p className="ps-4">At Emford, we offer exclusive real estate investment opportunities designed to generate substantial returns within a short timeframe. Our investment plans are tailored to meet the specific needs of different investors, with options that provide returns on investment (ROI) ranging from 6 months to 1 year. Whether you are a seasoned investor or new to real estate, Emford provides a secure and profitable way to grow your wealth through real estate investments.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <p className="font-bold">3.Investment Plans</p>
                  <p className="ps-4">Our investment opportunities are designed to offer flexibility and high returns. Clients can choose from a range of investment plans based on their financial goals and risk appetite. Each plan is carefully structured to provide a balance of security and profitability, with projected returns clearly outlined from the start.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <p className="font-bold">4.Risk Management:</p>
                  <p className="ps-4">Emford employs a comprehensive risk management strategy to protect our investors' capital. By carefully selecting investment properties, conducting thorough due diligence, and employing experienced professionals, we minimize risk and maximize returns.</p>
                </div>
              </div>

              <div>
                <div>
                  <p className="font-bold">5. Transparency and Reporting: </p>
                  <p className="ps-4">We believe in maintaining complete transparency with our investors. Emford provides regular updates and detailed reports on the progress of investments, ensuring our clients are always informed about the status of their investments.</p>
                </div>
              </div>

              
            </div>
          </div>
        </section>

        <section className="container-lg padding-sections">

          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="d-none d-md-block">
                  <img  className='width-100 who-we-are-img' src={pic2} alt="" />
                </div>

              </div>
              <div className="col-md-6 text-md-start text-center">
                <div>
                  <div>
                    <p className='sm-text'>Our values</p>
                    <h2 className='grey-text pb-4'>What we stand for</h2>
                    <p>Our core values define who we are and guide everything we do. Integrity is at the forefront of our operations, as we conduct our business with the highest level of honesty and transparency. We embrace innovation, constantly seeking new ways to enhance the investment experience. Our commitment to customer focus ensures that our clients are always at the heart of our decisions. We pursue excellence in every aspect of our business, striving to deliver the best possible outcomes for our investors.</p>

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
