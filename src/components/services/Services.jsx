import React from 'react';
import './services.css';
import mark from "../../assets/images/mark.png";
import swap from "../../assets/images/swap.png";

function services() {
  return (
    <div>
      <section className="section_services">
        <div className="container">
            <div className="row align-items-center gy-0 gx-md-0">
                <div className="col-lg-5">
                    <div className="service_card">
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <img src={mark} alt="mark" className="img-fluid" />
                            <h2 className="title">Pick &dash; Up</h2>
                        </div>
                        <div className="row">
                            <div className="col-4 border-end">
                                <label for="locations" className="form-label">Locations</label>
                                <select id="locations" className="form-select">
                                    <option selected>Semarang</option>
                                    <option>option 1</option>
                                    <option>option 2</option>
                                </select>
                            </div>
                            <div className="col-4 border-end">
                                <label for="date" className="form-label">Date</label>
                                <select id="date" className="form-select">
                                    <option selected>20 July 2022</option>
                                    <option>option 1</option>
                                    <option>option 2</option>
                                </select>
                            </div>
                            <div className="col">
                                <label for="time" className="form-label">Time</label>
                                <select id="time" className="form-select">
                                    <option selected>07:00</option>
                                    <option>option 1</option>
                                    <option>option 2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 text-center">
                    <a href="/" className="btn btn-swap">
                        <img src={swap} alt="swap icon" className="img-fluid" />
                    </a>
                </div>
                <div className="col-lg-5">
                    <div className="service_card">
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <img src={mark} alt="mark" className="img-fluid" />
                            <h2 className="title">Drop &dash; Off</h2>
                        </div>
                        <div className="row">
                            <div className="col-4 border-end">
                                <label for="locations" className="form-label">Locations</label>
                                <select id="locations" className="form-select">
                                    <option selected>Semarang</option>
                                    <option>option 1</option>
                                    <option>option 2</option>
                                </select>
                            </div>
                            <div className="col-4 border-end">
                                <label for="date" className="form-label">Date</label>
                                <select id="date" className="form-select">
                                    <option selected>20 July 2022</option>
                                    <option>option 1</option>
                                    <option>option 2</option>
                                </select>
                            </div>
                            <div className="col">
                                <label for="time" className="form-label">Time</label>
                                <select id="time" className="form-select">
                                    <option selected>07:00</option>
                                    <option>option 1</option>
                                    <option>option 2</option>
                                </select>
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

export default services