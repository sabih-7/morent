import React from 'react';
import '../popular/popular.css';
import like from "../../assets/images/like.png";
import carOne from "../../assets/images/car1.png";
import carTwo from "../../assets/images/car2.png";
import carThree from "../../assets/images/car3.png";
import carFour from "../../assets/images/car4.png";
import gasStation from "../../assets/images/gas-station.svg";
import manual from "../../assets/images/manual.svg";
import group from "../../assets/images/group.svg";

function recommended() {
  return (
    <div>
      <section className="section_popular">
        <div className="container">
            <div className="row mb-5">
                <div className="col">
                    <div className="d-flex align-items-center justify-content-between px-md-3 py-3">
                        <h2 className="title">Recomendation Car</h2>
                    </div>
                </div>
            </div>
            <div className="row gy-5 gx-md-5">
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="card flex-grow-1">
                        <div className="card-header">
                            <div className="d-flex justify-content-between">
                                <span>
                                    <h2 className="card-title">All New Rush</h2>
                                    <p className="card-text">SUV</p>
                                </span>
                                <button type="button" className="btn btn-like">
                                    <img src={like} alt="like icon" className="img-fluid" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src={carFour} alt="car" className="img-car" />
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
                                <p className="spec_info">6 People</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                              <div className="flex-grow-1">
                                  <p className="price">$72.00/<span>day</span></p>
                                  <p className="strike_price"><s>$80.00</s></p>
                              </div>
                              <a href="/" className="btn btn-rent">rent now</a>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="card flex-grow-1">
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
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="card flex-grow-1">
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
                                  <p className="strike_price"><s>$100.00</s></p>
                              </div>
                              <a href="/" className="btn btn-rent">rent now</a>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="card flex-grow-1">
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
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="card flex-grow-1">
                        <div className="card-header">
                            <div className="d-flex justify-content-between">
                                <span>
                                    <h2 className="card-title">All New Rush</h2>
                                    <p className="card-text">SUV</p>
                                </span>
                                <button type="button" className="btn btn-like">
                                    <img src={like} alt="like icon" className="img-fluid" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src={carFour} alt="car" className="img-car" />
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
                                <p className="spec_info">6 People</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                              <div className="flex-grow-1">
                                  <p className="price">$72.00/<span>day</span></p>
                                  <p className="strike_price"><s>$80.00</s></p>
                              </div>
                              <a href="/" className="btn btn-rent">rent now</a>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="card flex-grow-1">
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
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="card flex-grow-1">
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
                                  <p className="strike_price"><s>$100.00</s></p>
                              </div>
                              <a href="/" className="btn btn-rent">rent now</a>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="card flex-grow-1">
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
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="card flex-grow-1">
                        <div className="card-header">
                            <div className="d-flex justify-content-between">
                                <span>
                                    <h2 className="card-title">All New Rush</h2>
                                    <p className="card-text">SUV</p>
                                </span>
                                <button type="button" className="btn btn-like">
                                    <img src={like} alt="like icon" className="img-fluid" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src={carFour} alt="car" className="img-car" />
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
                                <p className="spec_info">6 People</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                              <div className="flex-grow-1">
                                  <p className="price">$72.00/<span>day</span></p>
                                  <p className="strike_price"><s>$80.00</s></p>
                              </div>
                              <a href="/" className="btn btn-rent">rent now</a>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="card flex-grow-1">
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
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="card flex-grow-1">
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
                                  <p className="strike_price"><s>$100.00</s></p>
                              </div>
                              <a href="/" className="btn btn-rent">rent now</a>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="card flex-grow-1">
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
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default recommended