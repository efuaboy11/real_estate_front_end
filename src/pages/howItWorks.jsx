import React, { useEffect, useState } from 'react';
import { Navbar } from '../component/navbar';
import { Link } from 'react-router-dom';

import "../css/howItWorks.css";
import Aos from "aos";
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowLeft, faArrowRight, faBuildingColumns, faCheck, faCoffee, faEnvelope, faLocation, faPhoneVolume, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../component/footer';
import lady from "../img/lady2.png"
import pcPhone from "../img/pcPhone.png"
import realImage1 from "../img/realImageGrid.JPG"
import realImageGrid2 from "../img/realImageGrid2.JPG"

export const How = () => {

  const [showContent1, setShowContent1] = useState(true)
  const [showContent2, setShowContent2] = useState(false)


  const toogleContent1 = () =>{
    if(!showContent1){
      setShowContent1(!showContent1)
    }
    setShowContent2(false)




  }

  const toogleContent2 = () =>{
    if(!showContent2){
      setShowContent2(!showContent2)
    }

    setShowContent1(false)

  }



  useEffect(() => {
    Aos.init();
  }, []);

  return (
    
    <div>
      <div className='position-sticky1'>
        <Navbar/>
      </div>

      <section className=' padding-sections'>
        <div className='cover-bg'>
          <div className='container-lg'>
            <div> 
              <div className="row">
                <div className="col-md-6">
                  <div className='who-we-are-text'>
                    <div className='pt-5'>
                      <p className='grey-text pb-2 font-bold lg-text'>Build your real estate <br />portfolio today. </p>
                      <p className=''>Rigorous review process. Experienced investment team.<br />   Unparalleled investor support..</p>
                      <div className="pt-4 pb-5 mb-5">
                        <Link to='/contact' className='primary1-btn '>Start now</Link>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-none d-md-block">
                    <img  className='width-100 who-we-are-img' src={lady} alt="" />
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='padding-sections container-lg'>
        <div>
          <div className='text-center'>
            <h2 className="grey-text">Invest with Emford</h2>
            <p>Emford equips investors with the tools to make informed real estate decisions,  listing over 197 deals <br />  and raising  $4.3 billion in capital since our founding.</p>
          </div>
        </div>

        <div className='d-flex justify-content-center'>
          <img className='pc-image' src={pcPhone}alt=""/>
        </div>


        <div className="">
          <div>
            <div className="row g-3">
              <div className="col-xxl-3 col-md-4 col-sm-6">
                <div className='box-shadow border-radius-10px p-3'>
                  <div>
                    <div className="d-flex mb-3">
                      <h1 className='border-radius-50 light-green-bg px-3 py-1'>1</h1>
                    </div>

                    <h5 className='pb-2'>View Plans:</h5>
                    <p>Navigate to the plan page, check our various plan and choose the plan you see fit.</p>
                  </div>
                </div>

              </div>

              <div className="col-xxl-3 col-md-4 col-sm-6">
                <div className='box-shadow border-radius-10px p-3'>
                  <div>
                    <div className="d-flex mb-3">
                      <h1 className='border-radius-50 light-pink-bg px-3 py-1'>2</h1>
                    </div>

                    <h5 className='pb-2'>Contact page:</h5>              
                    <p>Navigate to contact Page and view all details on how to reach us You reach us through Whatapps, Email.</p>
                  </div>
                </div>

              </div>

              <div className="col-xxl-3 col-md-4 col-sm-6">
                <div className='box-shadow border-radius-10px p-3' >
                  <div>
                    <div className="d-flex mb-3">
                      <h1 className='border-radius-50 light-green-bg px-3 py-1'>3</h1>
                    </div>

                    <h5 className='pb-2'>Send message:</h5>
                    <p>In our conatct page you will see an option to send us message, feel free to send a messaage accross. </p>
                  </div>

                </div>

              </div>

              <div className="col-xxl-3 col-md-4 col-sm-6">
                <div className='box-shadow border-radius-10px p-3'>
                  <div>


                    <div className="d-flex mb-3">
                      <h1 className='border-radius-50 light-brown-bg px-3 py-1'>4</h1>
                    </div>

                    <h5 className='pb-2'>Review</h5>
                    <p>After your message we will review your message and give you a feedback Thank for choosing EMFORD!!</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


      </section>

      <section className="padding-sections container-lg d-none d-md-block">
        <div>
          <div className='pb-5'>
            <h2 className="grey-text text-center">Compare Your Investment Options</h2>
          </div>

          <div>
            <div className="row">
              <div className="col-6 cursor-pointer" onClick={toogleContent1}>
                <div>
                  <div className={`text-center  py-5 ${showContent1 ? "investment-option-box" : ""}`}>
                  <h1>1</h1>
                    <h5>Individual Properties</h5>
                    <p> Invest directly in individual real estate opportunities.</p>
                   

                  </div>
                </div>
              </div>

              <div className="col-6 cursor-pointer"  onClick={toogleContent2}>
                <div>
                  <div className={`text-center  py-5 ${showContent2 ? "investment-option-box" : ""}`}>
                    <h1>2</h1>
                    <h5>Diversified Funds</h5>
                    <p> Invest in several properties with a single investment.</p>
                   

                  </div>
                </div>
              </div>
            </div>

            <div className={`${showContent1 ? "display-block" : "display-none"}`}>
              <div className="light-background2">
                <div className='container-lg '>
                  <h2 className="grey-text text-center py-5">Discover opportunities that align with your goals.</h2>
                  <div>
                    <div className="row justify-content-center">
                      <div className="col-6">
                        <div className='pb-3'>
                          <h5>Access nationwide deal flow.</h5>
                          <p>We work with some of the nation’s top real estate sponsors to bring you a wide range of carefully curated deals across various property types, regions, and strategies</p>
                        </div>

                        <div className='pb-3'>
                          <h5>Tap into comprehensive insights.</h5>
                          <p>We provide you with exceptional detail and direct communication with sponsors, so you can make informed decisions.</p>
                        </div>

                        <div className='pb-3'>
                          <h5>Build a custom portfolio.</h5>
                          <p>Curate a tailored real estate portfolio by selecting individual deals that support your unique investing objectives.</p>
                        </div>
                       
                      </div>

                      <div className="col-3">
                        <div className='pb-5'>
                          <img src={realImage1} alt="" width="100%"/>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                

              </div>
            </div>

            <div className={`${showContent2 ? "display-block" : "display-none"}`}>
              <div className="light-background2">
                <div className='container-lg '>
                  <h2 className="grey-text text-center py-5">Quick and easy access into a diversified portfolio.</h2>
                  <div>
                    <div className="row justify-content-center">
                      <div className="col-6">
                        <div className='pb-3'>
                          <h5>Leverage real estate Professionals.</h5>
                          <p>Emford Advisors funds are constructed and managed by Emford Advisors’ in-house real estate team, while sponsor funds are led by the sponsor and typically focus on the firm's property or regional experience.</p>
                        </div>

                        <div className='pb-3'>
                          <h5>Construct your portfolio faster.</h5>
                          <p>Spend less time and effort building your real estate portfolio while potentially gaining exposure to multiple property types, sponsors, and regional markets.</p>
                        </div>

                        <div className='pb-3'>
                          <h5>Get more with one investment.</h5>
                          <p>Funds require a minimum investment similar to individual deals, yet offer exposure to multiple projects, helping potentially diversify your investment.</p>
                        </div>
                       
                      </div>

                      <div className="col-3">
                        <div className='pb-5'>
                          <img src={realImageGrid2} alt="" width="100%"/>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                

              </div>
            </div>
          </div>
        </div>
        
      </section>


      <section className="padding-sections container-lg d-block d-md-none">
        <div>
          <div className='pb-5'>
            <h2 className="grey-text text-center">Compare Your Investment Options</h2>
          </div>

          <div>
            <div className='investment-option-box'>
              <div className={`text-center  py-5`}>
              <h1>1</h1>
                <h5>Individual Properties</h5>
                <p> Invest directly in individual real estate opportunities.</p>
              </div>
            </div>
            <div className="">
              <div className="light-background2">
                <div className='container-lg '>
                  <h2 className="grey-text text-center py-5">Discover opportunities that align with your goals.</h2>
                  <div>
                    <div className="">
                      <div className="">
                        <div className='pb-3'>
                          <h5>Access nationwide deal flow.</h5>
                          <p>We work with some of the nation’s top real estate sponsors to bring you a wide range of carefully curated deals across various property types, regions, and strategies</p>
                        </div>

                        <div className='pb-3'>
                          <h5>Tap into comprehensive insights.</h5>
                          <p>We provide you with exceptional detail and direct communication with sponsors, so you can make informed decisions.</p>
                        </div>

                        <div className='pb-3'>
                          <h5>Build a custom portfolio.</h5>
                          <p>Curate a tailored real estate portfolio by selecting individual deals that support your unique investing objectives.</p>
                        </div>
                       
                      </div>
                    </div>

                  </div>
                </div>

                

              </div>
            </div>
          </div>


          <div className='pt-5'>
            <div className='investment-option-box'>
              <div className={`text-center  py-5`}>
                <h1>2</h1>
                <h5>Diversified Funds</h5>
                <p> Invest in several properties with a single investment.</p>
                   
              </div>
            </div>
            <div>
              <div className="">
                <div className="light-background2">
                  <div className='container-lg '>
                    <h2 className="grey-text text-center py-5">Discover opportunities that align with your goals.</h2>
                    <div>
                      <div className="">
                        <div className="">
                          <div className='pb-3'>
                            <h5>Access nationwide deal flow.</h5>
                            <p>We work with some of the nation’s top real estate sponsors to bring you a wide range of carefully curated deals across various property types, regions, and strategies</p>
                          </div>

                          <div className='pb-3'>
                            <h5>Tap into comprehensive insights.</h5>
                            <p>We provide you with exceptional detail and direct communication with sponsors, so you can make informed decisions.</p>
                          </div>

                          <div className='pb-3'>
                            <h5>Build a custom portfolio.</h5>
                            <p>Curate a tailored real estate portfolio by selecting individual deals that support your unique investing objectives.</p>
                          </div>
                        
                        </div>
                      </div>

                    </div>
                  </div>

                  

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
