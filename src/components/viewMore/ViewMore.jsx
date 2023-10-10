import React from 'react';
import './viewMore.css';

function ViewMore() {
  return (
    <div>
      <section className="section_view_more">
        <div className="container">
            <div className="row">
                <div className="col-md-7 offset-md-5">
                    <div className="d-flex align-items-center justify-content-between">
                        <a href="/" className="btn btn-primary">show more car</a>
                        <span className="car_text">120 Car</span>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default ViewMore