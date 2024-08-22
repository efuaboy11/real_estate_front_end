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

export const Screening = () => {
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
				<section className='padding-sections'>
					<div className='container-lg'> 
						<div className="row">
							<div className="col-md-6">
								<div className='who-we-are-text'>
									<div>
										<p className='blue-text'>Our Investment Screening Process</p>
										<h2 className='grey-text pb-4' >Curating a Diverse Portfolio of Opportunities</h2>
										<p>Our Investment Team travels nationwide, seeking out promising real estate projects from reputable sponsors. We understand that investment preferences vary, so we strive to bring a diverse array of high-quality opportunities to our platform. We maintain a rigorous selection process, with only about 1 in 20 deals making it to our site. <br /> <br />
											At the heart of our process are rigor and transparency. Our seasoned real estate professionals conduct a thorough screening of both sponsors and their proposed investments. For every offering, we provide a comprehensive checklist, giving investors full visibility into the vetting process and helping them make informed decisions.
											<br /> <br />
											Our review process is built on two key pillars:</p>

									</div>
								</div>
							</div>

							<div className="col-md-6">
								<div className="d-none d-md-block">
									<img  className='width-100 who-we-are-img' src={pic1} alt="" />
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
									<img  className='width-100 who-we-are-img' src={pic2} alt="" />
								</div>

							</div>


							<div className="col-md-6">
								<div className='who-we-are-text'>
									<div>
										<div>
											<p className="blue-text">SPONSOR EVALUATION</p>
											<h5>1. Assessing the Firm</h5>
											<p>Our team carries out a comprehensive and impartial assessment of each sponsor before they are welcomed onto our platform. This meticulous review process ensures that we present only high-quality opportunities from reputable and seasoned operators to our investors. <br />
												Our sponsor evaluation process is multi-faceted and includes the following steps:						
											</p>

											<div>
												<p className='ps-3 pb-3'><span className="font-bold">1. Background Investigation:</span>We perform detailed background checks on the sponsor and their key executives using trusted third-party services and advanced technology.</p>
												<p className='ps-3 pb-3'><span className="font-bold">2. Sample Report Analysis:</span>We evaluate the sponsor’s history in executing similar projects, considering factors like asset type, size, investment strategy, and location.</p>
												<p className='ps-3 pb-3'><span className="font-bold">3. Financial Review:</span>We evaluate the sponsor’s history in executing similar projects, considering factors like asset type, size, investment strategy, and location.</p>										
												<p className='ps-3 pb-3'><span className="font-bold">4. Track Record Assessment:</span>We evaluate the sponsor’s history in executing similar projects, considering factors like asset type, size, investment strategy, and location.</p>
											</div>
											<p>For every investment opportunity, investors can download a “Sponsor Evaluation Checklist,” which provides direct transparency into the due diligence we performed in vetting the sponsor.</p>
										</div>

									</div>
								</div>
							</div>

	
						</div>
					</div>
				</section>

				<section className='padding-sections'>
					<div className='container-lg'> 
						<div className="row">
							<div className="col-md-6">
								<div className='who-we-are-text'>
									<div>
										<div>
											<p className="blue-text">2. DEAL EVALUATION</p>
											<h5>Assessing the Property</h5>
											<p>We meticulously review a variety of documents provided by the sponsor and independent third parties to verify the assumptions within the business plan and to understand the potential benefits and risks of each investment. This thorough evaluation enables us to present detailed and relevant information to investors, ensuring transparency and clarity about the opportunities available on our platform. <br /><br />
											The key materials we examine include:		
											</p>



											<div>
												<p className='ps-3 pb-3'><span className="font-bold">1. </span>Financial Projections / Models</p>
												<p className='ps-3 pb-3'><span className="font-bold">2.</span>Market, Rent, and Sales Comparables</p>
												<p className='ps-3 pb-3'><span className="font-bold">3. </span>Offering Memorandum</p>										
												<p className='ps-3 pb-3'><span className="font-bold">4.</span>Legal Agreements</p>
											</div>
											<p>We provide detailed 'Deal Evaluation Checklists' on our offering pages, giving investors a transparent view of the due diligence performed on each deal.</p>
										</div>

									</div>
								</div>
							</div>

							<div className="col-md-6">
								<div className="d-none d-md-block">
									<img  className='width-100 who-we-are-img' src={pic3} alt="" />
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
