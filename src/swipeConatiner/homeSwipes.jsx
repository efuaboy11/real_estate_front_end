import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import coverPage1 from "../img/coverPage1.jpg";
import coverPage2 from "../img/coverPage4.jpg";
import coverPage3 from "../img/coverPage5.jpg";
import { Link } from 'react-router-dom';


export const CoverImg = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      autoplay={{ delay: 10000 }}
      effect="fade"
    >
      <SwiperSlide> 
        <section className='cover-page'>
          <div className="image-container">
            <img src={coverPage1} alt="Description" className="background-image" />
            <div className="overlay"></div>
            <div className="content">
              <div className='sub-content'>
                <div className='ps-5'>
                  <p>Invest smartly!</p>
                  <h1 className='cover-page-text'>
                    <div data-aos="fade-right" data-aos-duration="1000"> Grow Your</div>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700" >Wealth with Strategic </div>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1300">Real Estate Investments</div> 
                  </h1>
                  <div className="mt-4" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1800">
                    <Link to="/investor/whyRealEstate" className='cover-page-btn'>Learn more</Link>
                  </div>
                  <div className='pt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2200">
                    <div>
                      <p>Call us now</p>
                      <h4>(+234) 813 920 1678</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>        
      </SwiperSlide>
      <SwiperSlide> 
        <section className='cover-page'>
          <div className="image-container">
            <img src={coverPage2} alt="Description" className="background-image" />
            <div className="overlay"></div>
            <div className="content">
              <div className='sub-content'>
                <div className='ps-5'>
                  <p>Invest smartly!</p>
                  <h1 className='cover-page-text'> 
                    <div data-aos="fade-right" data-aos-duration="1000"> Unlock Your</div>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700" >Financial Future </div>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1300">with Real Estate Investments</div> 
                  </h1>
                  <div className="mt-4" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1800">
                    <Link to="/plan" className='cover-page-btn'>View plan</Link>
                  </div>
                  <div className='pt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2200">
                    <div>
                      <p>Call us now</p>
                      <h4>(+234) 813 920 1678</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>        
      </SwiperSlide>
      <SwiperSlide> 
        <section className='cover-page'>
          <div className="image-container">
            <img src={coverPage3} alt="Description" className="background-image" />
            <div className="overlay"></div>
            <div className="content">
              <div className='sub-content'>
                <div className='ps-5'>
                  <p>Invest smartly!</p>
                  <h1 className='cover-page-text'> 
                    <div data-aos="fade-right" data-aos-duration="1000"> Empower Your</div>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700" >Wealth with Strategic  </div>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1300">Real Estate Opportunities</div> 
                  </h1>
                  <div className="mt-4" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1800">
                  <Link to="/about" className='cover-page-btn'>About</Link>
                  </div>
                  <div className='pt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2200">
                    <div>
                      <p>Call us now</p>
                      <h4>(+234) 813 920 1678</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>        
      </SwiperSlide>
    </Swiper>
  );
  };
  