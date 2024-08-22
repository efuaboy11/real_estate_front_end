import React from 'react';
import "../css/footer.css"
import { Link } from 'react-router-dom';
import cfcLog from "../img/cfclogo.png"
import globalLogo from "../img/globalLogo.png"
import BBBLogo from "../img/BBBLogo.png"
import iso from "../img/iso.png"
import usgbc from "../img/usgbc.png"
import masterICon from "../img/mastercard.png"
import visa from "../img/visa.png"
import companyLogo from "../img/EmfordLogoDark.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faBuildingColumns, faCheck, faCoffee, faEnvelope, faLocation, faLocationDot, faPhoneVolume, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';


export const Footer = () => {
  return (
    <div>
      <footer className='footer-conatiner py-5'>
        <div className='container-lg'>
          <div className='row footer-bars py-4'>

            <div className='col-lg-4 col-xxl-3 col-sm-6'>
              <div className="d-flex pb-4">
                <img src={companyLogo} alt="" width="100px"/>
                <div>
                  <p className='navbar-head-text'>EMFORD</p>
                  <p className='font-bold'>Investment Firm</p>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-xxl-3 col-sm-6 pt-4'>
              <div className='d-flex'>
                <p className='navbar-head-text'><FontAwesomeIcon icon={faPhoneVolume}/></p>
                <p className='pt-2 ps-2'>(+234) 813 920 1678</p>
              </div>
            </div>

            <div className='col-lg-4 col-xxl-3 col-sm-6 pt-4'>
              <div className='d-flex'>
                <p className='navbar-head-text'><FontAwesomeIcon icon={faEnvelope}/></p>
                <p className='pt-2 ps-2'>iseghohimhene@gmail.com</p>
              </div>
            </div> 

            <div className='col-lg-4 col-xxl-3 col-sm-6 pt-4'>
              <div className='d-flex'>
                <p className='navbar-head-text'><FontAwesomeIcon icon={faLocationDot}/></p>
                <p className='pt-2 ps-2'>710, James, Garber Crescent, Dawaki, FCT Abuja</p>
              </div>
            </div>
          </div>


          <div className='row footer-bars-bottom py-4'>

            <div className='col-sm-3'>
              <div className='pt-4'>
                <p className=''>REGULATIONS:</p>
              </div>
            </div>

            <div className='col-sm-9'>
              <div className='row justify-content-between'>

                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  <div className='d-flex'>
                    <img src={cfcLog} alt="" width='80px'/>
                    <p className='pt-2 blue-text sm-text font-bold'>CFA Institute <br /> Standards</p>
                  </div>
                </div>

                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  <img src={usgbc} alt="" width="80px"/>
                </div>


                <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                  <div className="d-none d-md-block">
                    <img src={globalLogo} alt="" width='140px'/>
                  </div>

                </div>

                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  <img src={BBBLogo} alt="" width="80px"/>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  <img src={iso} alt="" width="80px"/>
                </div>



              </div>
            </div>
          </div>

          <div className='row footer-bars-bottom py-4'>

            <div className='col-3'>
              <div className='pt-4'>
                <p className='pe-3'>PAYMENTS METHOD:</p>
              </div>
            </div>

            <div className="col-5">
              <div >
                <div className="d-flex justify-content-between">
                  <div className='blue-text d-flex pt-3'>
                    <FontAwesomeIcon className='md-text' icon={faBuildingColumns}/>
                    <div>
                    <p className='blue-text sm-text font-bold ps-2'>Bank <br /> Transfer</p>
                    </div>

                  </div>

                  <div>
                    <img src={masterICon} alt="" width="80px" />
                  </div>

                  <div>
                    <img src={visa} alt="" width="80px" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="row justify-content-center">
                <div className="col-3 pt-5">
                  <p className='pb-3'>Company</p>        
                  <p ><Link to='/about' className='footer-link'>About Us</Link></p>
                  <p ><Link to='/investor/whyRealEstate' className='footer-link'>Investor</Link></p>
                  <p ><Link to='/plan' className='footer-link'>Plan</Link></p>
                  <p ><Link to='/contact' className='footer-link'>Contact</Link></p>
                </div>


                <div className="col-3 pt-5">
                  <p className='pb-3'>Investor</p>        
                  <p ><Link to='/investor/whyRealEstate' className='footer-link'>why real estate?</Link></p>
                  <p ><Link to='/investor/howItWorks' className='footer-link'>How it works</Link></p>
                  <p ><Link to='/investor/screening' className='footer-link'>Investment screening process</Link></p>
                </div>

                <div className="col-3 pt-5">
                  <p className='pb-3'>Plan</p>        
                  <p ><Link to="/plan" className='footer-link'>Begineers</Link></p>
                  <p ><Link to="/plan" className='footer-link'>Bronze</Link></p>
                  <p ><Link to="/plan" className='footer-link'>Silver</Link></p>
                  <p ><Link to="/plan" className='footer-link'>Gold</Link></p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </footer>

    </div>

  );
};
