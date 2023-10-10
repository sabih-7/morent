import React from 'react';
import like from "../../assets/images/like.png";
import gasStation from "../../assets/images/gas-station.svg";
import manual from "../../assets/images/manual.svg";
import group from "../../assets/images/group.svg";

function Cards(props) {
  return (    
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
                <img src={props.image} alt="car" className="img-car" />
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
  )
}

export default Cards

