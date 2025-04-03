  import React, { useState } from "react";
import Link from "@/utils/ActiveLink";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../../pages/Changes.module.css"
const NavbarThree = () => {
  const [menu, setMenu] = React.useState(true);
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth || document.documentElement.clientWidth);
    };

    // Initial screen width on component mount
    setScreenWidth(window.innerWidth || document.documentElement.clientWidth);

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  return (
    <>
      {/* Start Header Area */}
      <header className="main-header-area">
        <div id="navbar" className="navbar-area navbar-style-two-with-color">
          <div className="main-navbar">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
           
                    {screenWidth > 760 ? (
                      <img
                        alt="image"
                        src="/images/black-logo.png"
                        className={styles.longImage}
                      />
                    ) : (
                      <img
                        alt="image"
                        src="/images/black-logo.png"
                        className={styles.smallImage}
                      />
                    )}
                  </a>
                </Link>
              
                <button
                style={{}}
                  onClick={toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto">
                    <div className="nav-item">
                      <Link href="/" activeClassName="active">
                        <a className="nav-link">Home</a>
                      </Link>
                    </div>

                    <li className="nav-item">
                      <Link href="/about" activeClassName="active">
                        <a className="nav-link">About</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/services" activeClassName="active">
                        <a className="nav-link">Services</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/products" activeClassName="active">
                        <a className="nav-link">Products</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="others-options d-flex align-items-center">
                  <div className={styles.customOptionBar} >
                    <div
                      className="side-menu-btn"
                      onClick={handleToggleSidebarModal}
                    >
                      <i className="ri-bar-chart-horizontal-line"></i>
                    </div>
                  </div>
                </div>
                
              </nav>
            </div>
          </div>
        </div>
        
      </header>
      {/* End Header Area */}

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="ri-search-2-line"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}

      {/* Sidebar Modal */}
      <div
        className={`sidebarModal modal right fade ${
          isActiveSidebarModal ? "" : "show"
        }`}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={handleToggleSidebarModal}
            >
              <i className="ri-close-line"></i>
            </button>

            <div className="modal-body">
              <Link href="/">
                <a>
                  <img src="/images/black-logo.png" className={styles.customModalImage}  alt="image" />
                </a>
              </Link>
              <div className="sidebar-content">
                <h3>About Us</h3>
                <p>
                  Welcome to Code Aspire, One of the mushrooming IT service
                  organization in India . We make it easy for businesses to
                  find the most talented developers, Quality analysts and
                  marketers as per their needs faster and more efficiently.
                </p>

                <div className="sidebar-btn">
                  <Link href="/contact">
                    <a className="default-btn">Let’s Talk</a>
                  </Link>
                </div>
              </div>

              <div className="sidebar-contact-info">
                <h3>Contact Information</h3>

                <ul className="info-list">
                  <li>
                    <i className="ri-phone-fill"></i>{" "}
                    <a href="tel:9336166483">+91-933 616 6483</a>
                  </li>

                  <li>
                    <i className="ri-mail-line"></i>{" "}
                    <a href="mailto:info@code-aspire.com">
                      info@code-aspire.com</a>
                  </li>
                </ul>
              </div>

              <ul className="sidebar-social-list">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100070215794236&mibextid=LQQJ4d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Code_Aspire"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/codeaspire-consultancy-services/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/code_aspire?igshid=YTQwZjQ0NmI0OA=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-instagram-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Modal */}
    </>
  );
};

export default NavbarThree;
