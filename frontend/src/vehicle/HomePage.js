import React from "react";
import PhotoSlide from "./PhotoSlide";
import "./HomeStyle.css";
import Footer from "./Footer";
import '../Home.css';

function HomePage() {
  return (
    <div lassName="mt-5">
      <div className="text-center">
        <div>
          <PhotoSlide />
        </div>

        <div className="mt-5 mb-1">
          <div className="card-group">
            <div className="card ms-4">
              <div className="text-center pb-5">
                {/* <img
                  className="card-img-top"
                  src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/128/000000/external-dollar-achievements-and-badges-flatart-icons-solid-flatarticons.png"
                  width="120vh"
                  height="100vh"
                /> */}
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <b>Sell</b>
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div className="card ms-4">
              <div className="text-center pb-5">
                {/* <img
                  className="card-img-top"
                  src="https://img.icons8.com/ios-filled/150/000000/shopping-cart.png"
                  width="50px"
                  height="100px"
                /> */}
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
            </div>
            <div className="card ms-4">
              <div className="text-center pb-5">
                {/* <img
                  className="card-img-top"
                  src="https://img.icons8.com/ios-filled/100/000000/deliver-food.png"
                  width="200px"
                  height="100px"
                /> */}
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
            </div>
            <div className="card ms-4 me-4">
              <div className="text-center pb-5">
                {/* <img
                  className="card-img-top"
                  src="https://img.icons8.com/ios-filled/100/000000/recycle-sign.png"
                  width="200px"
                  height="100px"
                /> */}
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
export default HomePage;
