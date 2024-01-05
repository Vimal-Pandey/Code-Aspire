import React from "react";



function ContainerBodyBox({ title, imageSrc, description }) {

    return (
      <>

      <div className="col-lg-4 col-md-6">
              <div className="services-item" 
              style={{
                backgroundColor: `rgba(255, 255, 255, 0.45)`,
                boxShadow: `0 0 10px 1px rgba(0, 0, 0, 0.25)`,
                backdropFilter:`blur(15px)`,
                cursor: "default",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row"
              }}
              >
                <div className="services-image" 
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                >
                      <img src={imageSrc} alt="image" style={{height:"100%", width: "50%"}}/>
                </div>
                <div className="services-content" style={{color: '#333'}}>
                  <h3>
                   {title}
                  </h3>
                  <p  style={{color: '#333'}}>
                    {description}                  
                  </p>
                </div>
              </div>
            </div>

      </>
    );
  }


export default ContainerBodyBox