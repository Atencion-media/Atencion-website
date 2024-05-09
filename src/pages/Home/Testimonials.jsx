import React from 'react';
import "../../styles/slider.css"
function Slider1() {
  return (
    // <div className="w-full sm:px-12 py-8">
      <div className="slider">
        <div className="slide-track">
          <div className="slide bg-red-500">1</div>
          <div className="slide bg-purple-500">2</div>
          <div className="slide bg-blue-500">3</div>
          <div className="slide bg-indigo-500">4</div>
          <div className="slide bg-pink-500">5</div>
          <div className="slide bg-green-500">6</div>
          <div className="slide bg-yellow-500">7</div>
          <div className="slide bg-red-500">8</div>
          <div className="slide bg-gray-500 text-white">9</div>
          <div className="slide bg-blue-800">0</div>
          {/* same 9 slides doubled (duplicate) */}
          <div className="slide bg-red-500">1</div>
          <div className="slide bg-purple-500">2</div>
          <div className="slide bg-blue-500">3</div>
          <div className="slide bg-indigo-500">4</div>
          <div className="slide bg-pink-500">5</div>
          <div className="slide bg-green-500">6</div>
          <div className="slide bg-yellow-500">7</div>
          <div className="slide bg-red-500">8</div>
          <div className="slide bg-gray-500 text-white">9</div>
          <div className="slide bg-blue-800">0</div>
        </div>
      </div>
    // </div>
  );
}

export default Slider1;

