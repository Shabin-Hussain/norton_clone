import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Follow.css";

function Follow() {
  return (
    <section className="follow-section">

      <h2>Follow Us</h2>

      <Carousel
        indicators={false}
        controls={true}
        interval={null}
      >
        <Carousel.Item>
          <div className="follow-images">

            <div style={{ position: 'relative' }}>
              <img src="public/11.webp" alt="" className="w-100" style={{ display: 'block', width: '100%' }} />
              <h6 className="ms-md-4" style={{ position: 'absolute', margin: '0', op: '20px', bottom: '20px' }}>Norton Motorcycles</h6>
            </div>

            <div style={{ position: 'relative' }}>
              <img src="public/12.webp" alt="" className="w-100" style={{ display: 'block', width: '100%' }} />
              <h6 className="ms-md-4" style={{ position: 'absolute', margin: '0', op: '20px', bottom: '20px' }}>Norton Motorcycles</h6>
            </div>

            <div style={{ position: 'relative' }}>
              <img src="public/13.webp" alt="" className="w-100" style={{ display: 'block', width: '100%' }} />
              <h6 className="ms-md-4" style={{ position: 'absolute', margin: '0', op: '20px', bottom: '20px' }}>Norton Motorcycles</h6>
            </div>

            <div style={{ position: 'relative' }}>
              <img src="public/14.webp" alt="" className="w-100" style={{ display: 'block', width: '100%' }} />
              <h6 className="ms-md-4" style={{ position: 'absolute', margin: '0', op: '20px', bottom: '20px' }}>Norton Motorcycles</h6>
            </div>

          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="follow-images">
                 <div style={{ position: 'relative' }}>
              <img src="public/11.webp" alt="" className="w-100" style={{ display: 'block', width: '100%' }} />
              <h6 className="ms-md-4" style={{ position: 'absolute', margin: '0', op: '20px', bottom: '20px' }}>Norton Motorcycles</h6>
            </div>

            <div style={{ position: 'relative' }}>
              <img src="public/12.webp" alt="" className="w-100" style={{ display: 'block', width: '100%' }} />
              <h6 className="ms-md-4" style={{ position: 'absolute', margin: '0', op: '20px', bottom: '20px' }}>Norton Motorcycles</h6>
            </div>

            <div style={{ position: 'relative' }}>
              <img src="public/13.webp" alt="" className="w-100" style={{ display: 'block', width: '100%' }} />
              <h6 className="ms-md-4" style={{ position: 'absolute', margin: '0', op: '20px', bottom: '20px' }}>Norton Motorcycles</h6>
            </div>

            <div style={{ position: 'relative' }}>
              <img src="public/14.webp" alt="" className="w-100" style={{ display: 'block', width: '100%' }} />
              <h6 className="ms-md-4" style={{ position: 'absolute', margin: '0', op: '20px', bottom: '20px' }}>Norton Motorcycles</h6>
            </div>
           

          </div>
        </Carousel.Item>

      </Carousel>

    </section>
  );
}

export default Follow;