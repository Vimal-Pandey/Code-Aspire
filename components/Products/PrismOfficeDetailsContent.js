// import React from "react";


// function PrismSFADetailsContent() {

// return (
//   <div></div>
// )
// }

// export default PrismSFADetailsContent

import data from "pages/static_Data/PrismSFAData.json";
import React from "react";
import ContainerBodyBox from "./ContainerBodyBox";
import Link from "next/link";

function PrismOfficeDetailsContent() {
  return (
    <>
      <div className="services-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
          <Link href="/products">
                <a style={{marginBottom:"2vw", }}>- Go back -</a>
              </Link>
          </div>

        </div>

        {/* Shape Images */}
        <div className="services-shape-1">
          <img src="/images/services/services-shape-1.png" alt="image" />
        </div>
        <div className="services-shape-2">
          <img src="/images/services/services-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
}

export default PrismOfficeDetailsContent;
