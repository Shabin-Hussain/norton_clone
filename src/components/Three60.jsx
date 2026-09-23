import React, { useState, useRef } from 'react';

function Three60() {
  const [index, setIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const startIndex = useRef(1);

  const totalImages = 26;

  const handlePointerDown = (e) => {
    setIsDragging(true);

    startX.current = e.clientX;
    startIndex.current = index;

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const distance = e.clientX - startX.current;

    const frameChange = Math.floor(distance / 10);

    let newIndex = startIndex.current - frameChange;

    // Circular 360°
    newIndex =
      ((newIndex - 1) % totalImages + totalImages) % totalImages + 1;

    setIndex(newIndex);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{
        width: '100%',
        height: '600px',
        overflow: 'hidden',

        cursor: isDragging ? 'grabbing' : 'grab',

        userSelect: 'none',

        // IMPORTANT for mobile
        touchAction: 'pan-y'
      }}
    >
      <img
        src={`/bike/bike-${index}.png`}
        alt="Bike 360"
        draggable="false"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      />
    </div>
  );
}

export default Three60;