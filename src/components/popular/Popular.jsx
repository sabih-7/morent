import React from 'react';
import './popular.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import like from "../../assets/images/like.png";
import carOne from "../../assets/images/car1.png";
import carTwo from "../../assets/images/car2.png";
import carThree from "../../assets/images/car3.png";
import gasStation from "../../assets/images/gas-station.svg";
import manual from "../../assets/images/manual.svg";
import group from "../../assets/images/group.svg";

function popular() {
  const breakPoints = {
    320: { slidesPerView: 1, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 35 },
    1024: { slidesPerView: 3, spaceBetween: 35 },
    1200: { slidesPerView: 4, spaceBetween: 35 }
  };
  return (
    <div>
      <section className="section_popular">
        <div className="container">
            <div className="row mb-5">
                <div className="col">
                    <div className="d-flex align-items-center justify-content-between px-md-3 py-3">
                        <h2 className="title">popular car</h2>
                        <a href="/" className="view_link">view all</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-12">
                <Swiper breakpoints={breakPoints} loop={true}>
                  <SwiperSlide>
                    <div className="card">
                      <div className="card-header">
                          <div className="d-flex justify-content-between">
                              <span>
                                  <h2 className="card-title">Koenigsegg</h2>
                                  <p className="card-text">Sport</p>
                              </span>
                              <button type="button" className="btn btn-like">
                                  <img src={like} alt="like icon" className="img-fluid" />
                              </button>
                          </div>
                      </div>
                      <div className="card-body">
                          <img src={carOne} alt="car" className="img-car" />
                      </div>
                      <div className="card-footer">
                        <div className="specs">
                            <div className="spec_group">
                                <img src={gasStation} alt="gas station icon" className="img-icon" />
                                <p className="spec_info">90L</p>
                            </div>
                            <div className="spec_group">
                                <img src={manual} alt="manual icon" className="img-icon" />
                                <p className="spec_info">Manual</p>
                            </div>
                            <div className="spec_group">
                                <img src={group} alt="group icon" className="img-icon" />
                                <p className="spec_info">2 People</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                              <div className="flex-grow-1">
                                  <p className="price">$99.00/<span>day</span></p>
                              </div>
                              <a href="/" className="btn btn-rent">rent now</a>
                          </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between">
                            <span>
                                <h2 className="card-title">Nissan GT - R</h2>
                                <p className="card-text">Sport</p>
                            </span>
                            <button type="button" className="btn btn-like">
                                <img src={like} alt="like icon" className="img-fluid" />
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <img src={carTwo} alt="car" className="img-car" />
                    </div>
                    <div className="card-footer">
                        <div className="specs">
                          <div className="spec_group">
                              <img src={gasStation} alt="gas station icon" className="img-icon" />
                              <p className="spec_info">80L</p>
                          </div>
                          <div className="spec_group">
                              <img src={manual} alt="manual icon" className="img-icon" />
                              <p className="spec_info">Manual</p>
                          </div>
                          <div className="spec_group">
                              <img src={group} alt="group icon" className="img-icon" />
                              <p className="spec_info">2 People</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="flex-grow-1">
                                <p className="price">$80.00/<span>day</span></p>
                            </div>
                            <a href="/" className="btn btn-rent">rent now</a>
                        </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between">
                            <span>
                                <h2 className="card-title">Rolls - Royce</h2>
                                <p className="card-text">Sedan</p>
                            </span>
                            <button type="button" className="btn btn-like">
                                <img src={like} alt="like icon" className="img-fluid" />
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <img src={carThree} alt="car" className="img-car" />
                    </div>
                    <div className="card-footer">
                        <div className="specs">
                            <div className="spec_group">
                                <img src={gasStation} alt="gas station icon" className="img-icon" />
                                <p className="spec_info">70L</p>
                            </div>
                            <div className="spec_group">
                                <img src={manual} alt="manual icon" className="img-icon" />
                                <p className="spec_info">Manual</p>
                            </div>
                            <div className="spec_group">
                                <img src={group} alt="group icon" className="img-icon" />
                                <p className="spec_info">4 People</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="flex-grow-1">
                                <p className="price">$96.00/<span>day</span></p>
                            </div>
                            <a href="/" className="btn btn-rent">rent now</a>
                        </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between">
                            <span>
                                <h2 className="card-title">Nissan GT - R</h2>
                                <p className="card-text">Sport</p>
                            </span>
                            <button type="button" className="btn btn-like">
                                <img src={like} alt="like icon" className="img-fluid" />
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <img src={carTwo} alt="car" className="img-car" />
                    </div>
                    <div className="card-footer">
                        <div className="specs">
                            <div className="spec_group">
                                <img src={gasStation} alt="gas station icon" className="img-icon" />
                                <p className="spec_info">80L</p>
                            </div>
                            <div className="spec_group">
                                <img src={manual} alt="manual icon" className="img-icon" />
                                <p className="spec_info">Manual</p>
                            </div>
                            <div className="spec_group">
                                <img src={group} alt="group icon" className="img-icon" />
                                <p className="spec_info">2 People</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="flex-grow-1">
                                <p className="price">$80.00/<span>day</span></p>
                            </div>
                            <a href="/" className="btn btn-rent">rent now</a>
                        </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between">
                            <span>
                                <h2 className="card-title">Koenigsegg</h2>
                                <p className="card-text">Sport</p>
                            </span>
                            <button type="button" className="btn btn-like">
                                <img src={like} alt="like icon" className="img-fluid" />
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <img src={carOne} alt="car" className="img-car" />
                    </div>
                    <div className="card-footer">
                        <div className="specs">
                            <div className="spec_group">
                                <img src={gasStation} alt="gas station icon" className="img-icon" />
                                <p className="spec_info">90L</p>
                            </div>
                            <div className="spec_group">
                                <img src={manual} alt="manual icon" className="img-icon" />
                                <p className="spec_info">Manual</p>
                            </div>
                            <div className="spec_group">
                                <img src={group} alt="group icon" className="img-icon" />
                                <p className="spec_info">2 People</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="flex-grow-1">
                                <p className="price">$99.00/<span>day</span></p>
                            </div>
                            <a href="/" className="btn btn-rent">rent now</a>
                        </div>
                    </div>
                  </div>
                  </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default popular