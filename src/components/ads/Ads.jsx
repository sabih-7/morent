import React from 'react';
import './ads.css';
import carOne from '../../assets/images/car1.png';
import carTwo from '../../assets/images/car2.png';

function ads() {
  return (
    <div>
      <section className="section_ads">
        <div className="container">
            <div className="row gy-5 gx-md-5">
                <div className="col-md-6 col-lg-6 d-flex">
                    <div className="card-ad card-bg-info flex-grow-1">
                        <div className="card-ad-top">
                            <h1 className="title">The Best Platform<br/>for Car Rental</h1>
                            <p className="desc">Ease of doing a car rental safely and<br/>reliably. Of course at a low price.</p>
                            <a href="/" className="btn btn-primary">Rental car</a>
                        </div>
                        <div className="text-center mt-4">
                            <img src={carOne} alt="car" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 d-none d-md-flex">
                    <div className="card-ad card-bg-primary flex-grow-1">
                        <div className="card-ad-top">
                            <h1 className="title">Easy way to rent a<br/>car at a low price</h1>
                            <p className="desc">Providing cheap car rental services<br/>and safe and comfortable facilities.</p>
                            <a href="/" className="btn btn-info">Rental car</a>
                        </div>
                        <div className="text-center mt-4">
                            <img src={carTwo} alt="car" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default ads