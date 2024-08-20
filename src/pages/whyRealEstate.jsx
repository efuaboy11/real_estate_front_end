import React, { useEffect } from 'react';
import { Navbar } from '../component/navbar';
import { Link } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowLeft, faArrowRight, faBuildingColumns, faCheck, faCoffee, faEnvelope, faLocation, faPhoneVolume, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../component/footer';

import handHouse2 from "../img/handHouse2.jpg"
import icon1 from "../img/trophy.png"
import icon2 from "../img/paperEye.png"
import icon3 from "../img/cirucularMoney.png"

export const Why = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    
    <div>
      <div className='position-sticky1'>
        <Navbar/>
      </div>

      <div  className='pt-5'>
        <section className='container-lg padding-sections'>
          <div className='container-lg'> 
            <div className="row">
              <div className="col-md-7 text-md-start text-center">
                <div className='who-we-are-text'>
                  <div>
                    <h2 className='grey-text pb-2 font-bold'>The commercial real estate <br />investing edge</h2>
                    <p className='md-text'>It’s time to build your real estate portfolio <br />  with EMFORD. Get started today.</p>
                    <div className="pt-4">
                    <Link to='/contact' className='primary1-btn'>Start now</Link>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-md-5">
                <div className="d-none d-md-block">
                  <img  className='width-100 who-we-are-img' src={handHouse2} alt="" />
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className='container-lg padding-sections'>
          <div>
            <div className='pb-4 text-center'>
              <h2 className="grey-text">Why Real Estate Investment?</h2>
              <p>The big question to ask!!</p>
              
            </div>

            <div className="row g-3">
              <div className="col-lg-4 col-md-6 ">
                <div className='box-shadow p-4'>


                  <h5 className="grey-text">Potential for High Returns</h5>
                  <p>Real estate investments have historically provided strong returns, often outperforming other asset classes over the long term. Whether through rental income, property appreciation, or both, real estate offers the potential for significant financial growth.</p>
                </div>
                
              </div>

              <div className="col-lg-4 col-md-6 ">
                <div className='box-shadow px-4 pt-4 pb-2'>
                  <h5 className="grey-text">Diversification of Investment Portfolio</h5>
                  <p>Investing in real estate adds diversification to your investment portfolio, reducing risk by spreading investments across different asset classes. Real estate often moves independently of stock markets, providing a stable foundation during market volatility.</p>
                </div>
                
              </div>

              <div className="col-lg-4 col-md-6 ">
                <div className='box-shadow p-4'>
                  <h5 className="grey-text"> Tangible Asset with Intrinsic Value</h5>
                  <p>Unlike stocks or bonds, real estate is a tangible asset that you can see and touch. Properties tend to hold intrinsic value and can be improved over time, enhancing their worth and providing a sense of security for investors.</p>
                </div>
   
              </div>
            </div>
          </div>
        </section>

        <section className='padding-sections'>
          <div className="light-background2 text-center py-5">
            <div className='container-lg'>
              <div className='pb-5'>
                <h2 className='grey-text'>Why Your Portfolio Needs Commercial Real Estate</h2>
                <p>Diversify beyond stocks and bonds—commercial real estate adds unique value to any investment portfolio.</p>
              </div>

              <div>
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div>
                      <h5 className='font-bold'>Potential Value</h5>
                      <p>There are two ways to get paid: ongoing cash distributions* and/or a share of the property’s final sale price.</p>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div>
                      <h5 className='font-bold'>Expand Your Portfolio</h5>
                      <p>Some of the world’s most established institutions have invested trillions of dollars into real estate. Expand your portfolio and use real estate to help mitigate the effects of inflation and help diversify your portfolio.</p>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div>
                      <h5 className='font-bold'>Potential Value</h5>
                      <p>When you invest in commercial real estate properties, you don’t actively manage the property–you’re a passive investor.</p>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='container-lg padding-sections'>
          <div>
            <div className='text-center pb-4'>
              <h2 className="grey-text">EMFORD Investment Platform</h2>
              <p>The EMFORD way!!</p>
            </div>

            <div>
              <div className="row g-3">
                <div className=" col-md-6">
                  <div className="box-shadow p-4">
                    <div className="py-2">
                      <img src={icon3} alt="" width='70px'/>
                    </div>
                    <div>
                      <h5>Extensive Deal Selection</h5>
                    </div>
                    <div>
                      <p>Backed by our comprehensive market analysis, EMFORD offers one of the most diverse and extensive real estate investment marketplaces online. We’ve successfully launched numerous projects, ranging from individual properties to large-scale developments, catering to different investment strategies and risk appetites.</p>
                    </div>
                  </div>
                </div>
                
                <div className=" col-md-6">
                  <div className="box-shadow p-5">
                    < div className="py-2">
                      <img src={icon2} alt="" width='70px'/>
                    </div>
                    <div>
                      <h5>Thorough Vetting Process</h5>
                    </div>
                    <div>
                      <p>Every investment opportunity on EMFORD undergoes a stringent vetting process. Our expert team meticulously reviews each project to ensure that only high-quality investments make it to our platform.</p>
                    </div>
                  </div>
                </div>

                <div className=" col-md-6">
                  <div className="box-shadow p-4">
                    < div className="py-2">
                      <img src={icon1} alt="" width='70px'/>
                    </div>
                    <div>
                      <h5>Proven Success</h5>
                    </div>
                    <div className='pb-4'>
                      <p>Since our inception, EMFORD has consistently delivered strong returns for our investors. Our platform has facilitated a wide range of successful real estate investments, with numerous projects already reaching full maturity and providing excellent returns.</p>
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
