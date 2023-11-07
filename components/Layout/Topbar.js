import React from 'react'

const Topbar = () => {
  return (
    <>
      <div className="topbar-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-9">
              <ul className="topbar-information">
                <li>
                  <i className="ri-phone-line"></i>
                  <span>
                    Phone: <a href="tel:9901234567">+990-123-4567</a>
                  </span>
                </li>
                <li>
                  <i className="ri-mail-line"></i>
                  <span>
                    Mail: <a href="mailto:hellostax@gmail.com">hellostax@gmail.com</a>
                  </span>
                </li>
                <li>
                  <i className="ri-map-pin-line"></i>
                  <span>Address:</span> 413 North Las Vegas, NV 89032
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3">
              <ul className="social-links text-end">
                <li>
                  <a href='https://www.facebook.com/profile.php?id=100070215794236&mibextid=LQQJ4d' target='_blank' rel="noreferrer">
                    <i className="ri-facebook-line"></i>
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/Code_Aspire' target='_blank' rel="noreferrer">
                    <i className="ri-twitter-line"></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/company/codeaspire-consultancy-services/' target='_blank' rel="noreferrer">
                  <i className="ri-linkedin-line"></i>
                  </a>
                </li>
                <li>
                  <a href='https://instagram.com/code_aspire?igshid=YTQwZjQ0NmI0OA==' target='_blank' rel="noreferrer">
                    <i className="ri-instagram-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar
