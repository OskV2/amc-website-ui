import React from 'react'

import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const FIRST_IMAGE = {
  imageUrl: 'https://smeleshkin.github.io/react-before-after-slider-component//assets/image1.jpg'
};
const SECOND_IMAGE = {
  imageUrl: 'https://smeleshkin.github.io/react-before-after-slider-component//assets/image2.jpg'
};

const BeforeAndAfter = () => {
  return (
    <div className='container'>
      <ReactBeforeSliderComponent
        firstImage={FIRST_IMAGE}
        secondImage={SECOND_IMAGE}
      />
    </div>
    
  )
}

export default BeforeAndAfter