import React from "react";

const CTO = () => {
  return (
    <>
      <div className="overview-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Call Us</h3>
                <span>
                  <a href="tel:9336166483">+91-933 616 6483</a>
                </span>

                <div className="overview-shape">
                  <img src="/images/overview/overview-shape.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Email Us</h3>
                <span>
                  <a href="mailto:info@thoughtsbig.com">hr@codeaspire.com</a>
                </span>

                <div className="overview-shape">
                  <img src="/images/overview/overview-shape.png" alt="image" />
                </div>
              </div>
            </div>

      
            {/* <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Visit Us</h3>
                <span>413 North Las Vegas, NV 89032</span>

                <div className="overview-shape">
                  <img src="/images/overview/overview-shape.png" alt="image" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
    
  );
};

export default CTO;
