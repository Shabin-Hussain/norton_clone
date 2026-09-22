import React, { useState } from 'react'
import Header from '../components/Header'


function Home() {


    const [index, setIndex] = useState(1);

  const handleMouseMove = (e) => {
    const width = e.currentTarget.offsetWidth;
    const x = e.nativeEvent.offsetX;

    const newIndex = Math.floor((x / width) * 5) + 1;

    setIndex(newIndex);
  };




  return (
    <>
   {/*  <Header/> */}

    <div
      onMouseMove={handleMouseMove}
      style={{
        width: '100%',
        height: '600px',
        overflow: 'hidden'
      }}
    >
      <img
        src={`/bike/bike-${index}.jpg`}
        alt="Bike 360"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>


    </>
  )
}

export default Home


