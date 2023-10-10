import React from 'react';
import '../popular/popular.css';
import Cards from '../cards/Cards';
import carOne from "../../assets/images/car1.png";
import carTwo from "../../assets/images/car2.png";
import carThree from "../../assets/images/car3.png";
import carFour from "../../assets/images/car4.png";

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
                <Cards image={carFour} />
                <Cards image={carOne} />
                <Cards image={carTwo}/>
                <Cards image={carThree}/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default recommended