import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './More.css'

function More() {
  return (
    <Carousel>

      {/* Slide 1 */}
      <Carousel.Item>
        <div className="row align-items-center">

          <div className="col-md-6 text-white">
            <h5>1898</h5>
            <h2>Norton Is Born</h2>
            <p>
              Norton begins its journey in motorcycle manufacturing.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src="./public/image111.jpg"
              className="d-block w-100"
              alt="Norton history"
            />
          </div>

        </div>
      </Carousel.Item>


      {/* Slide 2 */}
      <Carousel.Item>
        <div className="row align-items-center">

          <div className="col-md-6 text-white">
            <h5>1902</h5>
            <h2>The Early Years</h2>
            <p>
              Norton continues developing its motorcycle legacy.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src="./public/image112.jpg"
              className="d-block w-100"
              alt="Norton history"
            />
          </div>

        </div>
      </Carousel.Item>


      {/* Slide 3 */}
      <Carousel.Item>
        <div className="row align-items-center">

          <div className="col-md-6 text-white">
            <h5>1907</h5>
            <h2>TT Racing Glory Begins</h2>
            <p>
              Norton begins its extraordinary relationship with the Isle of Man TT.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src="./public/image113.jpg"
              className="d-block w-100"
              alt="Norton racing"
            />
          </div>

        </div>
      </Carousel.Item>

    </Carousel>
  )
}

export default More