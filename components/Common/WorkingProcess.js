import React from "react";

const WorkingProcess = () => {
  return (
    <>
      <div className="choose-area pt-100 pb-75">
        <div className="container">
          <div className="section-title section-style-two">
            <div className="section-bg-text">PROCESS</div>
            <span>WORK PROCESS</span>
            <h2>We Follow Four Simple Steps</h2>
            <p>
              We are leading technology solutions providing company all over the
              world.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <img src="/images/choose/choose-1.png" alt="image" />
                  <div className="number">1</div>
                </div>
                <div className="choose-content">
                  <h3>Discussion</h3>
                  <p>
                    Discussion is vital part of our for an IT services ,
                    fostering collaboration among team members. It aligns
                    requirements, and addresses challenges, resulting in a
                    website that meets project goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <img src="/images/choose/choose-2.png" alt="image" />
                  <div className="number">2</div>
                </div>
                <div className="choose-content">
                  <h3>Testing & Trying</h3>
                  <p>
                    Testing is crucial part of our work we ensuring the quality
                    and functionality of an IT services website, identifying and
                    fixing bugs, improving user experience, and maintaining
                    security.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <img src="/images/choose/choose-3.png" alt="image" />
                  <div className="number">3</div>
                </div>
                <div className="choose-content">
                  <h3>Ideas & Concept</h3>
                  <p>
                    Ideas and concepts are the driving force behind an IT
                    services, fueling innovation, problem-solving, and
                    creativity to deliver cutting-edge solutions that meet the
                    diverse needs of clients and users.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <img src="/images/choose/choose-4.png" alt="image" />
                  <div className="number">4</div>
                </div>
                <div className="choose-content">
                  <h3>Execute & Install</h3>
                  <p>
                    Executing and installing an IT services involves
                    implementing the developed solution, ensuring seamless
                    deployment, configuration, and setup to make the website
                    fully functional and accessible to users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingProcess;
