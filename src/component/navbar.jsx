import React, { useRef, useState } from 'react';
import "../css/navbar.css"
import { Link, useLocation } from 'react-router-dom';
import cfcLog from "../img/cfclogo.png"
import usgbc from "../img/usgbc.png"
import companyLogo from "../img/EmfordLogoDark.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faBookBookmark, faChartBar, faHandHoldingDollar, faHouse, faHouseCrack, faMinus, faPhoneVolume, faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import WhatsAppChatWidget from './whatapp';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [overlay, setOverlay] = useState(false)
  const sidebar = useRef(null)
  const toogleIsOpen = () =>{
    setIsOpen(!isOpen)
  }
  const isActive = (path) =>{
    return location.pathname === path

  }

  const showSidebar = () =>{
    if (sidebar.current) {
      sidebar.current.style.transform = `translateX(${0}px)`;
    }
    setOverlay(!overlay)
  };

  const closeSidebar = () =>{
    if (sidebar.current) {
      sidebar.current.style.transform = `translateX(${-350}px)`;
    }
    setOverlay(!overlay)
  }
  return (
    
    <div>
      <WhatsAppChatWidget />
      <nav className='nav-shadow'>
        <div className="container-xxl py-2">
          <div className="row">
            <div className="row">
              <div className="col-xxl-12">
                <div className="row justify-content-between">
                  <div className="col-md-3">
                    <div className='d-flex'>
                      <FontAwesomeIcon className='cursor-pointer md-text grey-text pt-4 ps-4 pe-4 nav-menu-bar'  onClick={showSidebar} icon={faBars}/>
                      <div className='d-flex'>
                        <img src={companyLogo} alt="" width="100px"/>
                        <div>
                          <p className='navbar-head-text'>EMFORD</p>
                          <p className='font-bold'>CONCEPT LIMITED</p>
                        </div>

                      </div>

                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="nav-logos">
                      <div className="d-flex justify-content-center">
                        <img src={cfcLog} alt="" width='80px'/>
                        <img src={usgbc} alt="" width='80px'/>
                      </div>
                    </div>



                  </div>

                  <div className="col-md-7 pt-3">
                    <div className="nav-links">
                      <div className='pt-1'>
                        <ul className='d-flex justify-content-end'>
                          <li className='px-3'>
                            <div>
                              <Link className='nav-link1' to="/">Home</Link>
                            </div>
                          </li>

                          <li  className='px-3'>
                            <div>
                              <Link className='nav-link1' to="/about">About us</Link>
                            </div>
                          </li>

                          <li  className='px-3'>
                            <div>
                              <Link className='nav-link1' to="/property">Property</Link>
                            </div>
                          </li>

                          <li className='px-3 nav-drop-down'>
                            <div>
                              <p className='nav-link1'>Investors</p>
                            </div>

                            <div className="sub-menu-l pt-5">
                              <ul className="navbar-nav px-3 pb-3">
                                <li className="nav-item"> <Link className='nav-dropdown-link1' to="/investor/whyRealEstate">Why Real Estate?</Link></li>
                                <li className="nav-item"> <Link className='nav-dropdown-link1' to="/investor/howItWorks">How It Works</Link></li>
                                <li className="nav-item"> <Link className='nav-dropdown-link1' to="/investor/screening">Screening Process</Link></li>

                              </ul>
                            </div>
                          </li>

                          <li className='px-3'>
                            <div>
                              <Link className='nav-link1' to="/plan">Plan</Link>
                            </div>
                          </li>

                          <li>
                            <div className='mt-2'>
                              <Link className='nav-btn' to="/contact">Contact</Link>
                            </div>
                          </li>



                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </nav>  

      <section className={`${overlay ? "overlay-background" :""}`}>
        <div id="client">
          <div className="client-sidebar" ref={sidebar}>
            <div>
              <div className="d-flex justify-content-between">
                <div></div>
                <div className="m-3">
                  <FontAwesomeIcon className='md-text cursor-pointer' icon={faX} onClick={closeSidebar}/>
                </div>

              </div>
             
              <div className="client-sidebar-list">
                <ul className="mt-5 pt-4">
                  <li className={`px-4 py-3 ${isActive("/") ?"current": ""}`}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <FontAwesomeIcon icon={faHouse} className="pe-4" />
                        <Link to="/" className={`navbar-link client-sidebar-link`}>HOME</Link>
                      </div>
                    </div>

                  </li>
                  <li className={`px-4 py-3 ${isActive("/about") ?"current": ""}`}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <FontAwesomeIcon icon={faBookBookmark} className="pe-4" />
                        <Link to="/about" className={`navbar-link client-sidebar-link`}>ABOUT</Link>
                      </div>
                    </div>
                  </li>

                  <li className={`px-4 py-3 ${isActive("/property") ?"current": ""}`}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <FontAwesomeIcon icon={faBookBookmark} className="pe-4" />
                        <Link to="/property" className={`navbar-link client-sidebar-link`}>PROPERTY</Link>
                      </div>
                    </div>
                  </li>

                  <li className={`px-4 py-3 ${isOpen ? "client-sidebar-list-bg": ""}`}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <FontAwesomeIcon icon={faChartBar} className="pe-4" />
                        <p>INVESTOR</p>
                      </div>
                      <div>
                        <FontAwesomeIcon className="cursor-pointer"  icon={isOpen ? faMinus :faPlus } onClick={toogleIsOpen}/>
                      </div>
                    </div>


                    <div style={{ display: isOpen ? 'block' : 'none' }}>
                      <ul className="ps-4">
                        <li className={` ps-4 py-2`}>
                          <Link to="/investor/whyRealEstate" className={`navbar-link client-sidebar-link ${isActive("/investor/whyRealEstate") ?"current": ""}`}>Why real estate?</Link> 
                        </li>

                        <li className={` ps-4 py-2`}>
                          <Link to="/investor/howItWorks" className={`navbar-link client-sidebar-link ${isActive("/investor/howItWorks") ?"current": ""}`}>How it works</Link> 
                        </li>

                        <li className={` ps-4 py-2`}>
                          <Link to="/investor/screening" className={`navbar-link client-sidebar-link ${isActive("/investor/screening") ?"current": ""}`}>Investmet Screening process</Link> 
                        </li>
                      </ul>
                    </div>



                  </li>

                  <li className={`px-4 py-3 ${isActive("/plan") ?"current": ""}`}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <FontAwesomeIcon icon={faHandHoldingDollar} className="pe-4" />
                        <Link  to="/plan" className={`navbar-link client-sidebar-link ${isActive("/plan") ?"current": ""}`}>PLAN</Link>
                      </div>
                    </div>

                  </li>

                  <li className={`px-4 py-3 ${isActive("/contact") ?"current": ""}`}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <FontAwesomeIcon icon={faPhoneVolume} className="pe-4" />
                        <Link className='client-sidebar-link' to="/contact">Contact</Link>
                      </div>
                    </div>

                  </li>

                   
                </ul>
              </div>

              
            </div>

          </div>
        </div>
      </section>

    </div>

  );
};
