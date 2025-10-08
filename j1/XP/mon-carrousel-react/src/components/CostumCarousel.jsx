import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

const imagesData = [
  
  { id: 1, url: 'https://picsum.photos/id/1053/800/450', thumb: 'https://picsum.photos/id/1053/100/100', alt: 'Hong Kong' },
  { id: 2, url: 'https://picsum.photos/id/163/800/450', thumb: 'https://picsum.photos/id/163/100/100', alt: 'Macao' },
  { id: 3, url: 'https://picsum.photos/id/1018/800/450', thumb: 'https://picsum.photos/id/1018/100/100', alt: 'Phare' },
  { id: 4, url: 'https://picsum.photos/id/103/800/450', thumb: 'https://picsum.photos/id/103/100/100', alt: 'Vue de Ville' },
];

function CustomCarousel() {
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);
  const [nav1, setNav1] = useState(null); 
  const [nav2, setNav2] = useState(null); 

  useEffect(() => {
    setNav1(mainSliderRef.current);
    setNav2(thumbnailSliderRef.current);
  }, []);

  return (
    <div style={{ maxWidth: '900px', margin: '50px auto' }}>

      
      <Slider 
        asNavFor={nav2} 
        ref={mainSliderRef} 
        dots={true} 
        arrows={false} 
        fade={true} 
      >
        {imagesData.map((image) => (
          <div key={image.id}>
            <div style={{ position: 'relative' }}>
              <img 
                src={image.url} 
                alt={image.alt} 
                style={{ 
                  width: '100%', 
                  height: '50vh', 
                  objectFit: 'cover' 
                }} 
              />
              
              <div style={{
                position: 'absolute',
                
                bottom: '0%', 
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                color: 'white',
                padding: '10px 20px',
                textAlign: 'center',
                fontSize: '1.2em'
              }}>
                {image.alt}
              </div>
            </div>
          </div>
        ))}
      </Slider>


      <div style={{ marginTop: '20px' }}>
        <Slider
          asNavFor={nav1} 
          ref={thumbnailSliderRef}
          slidesToShow={4} 
          focusOnSelect={true} 
          infinite={true}
        >
          {imagesData.map((image) => (
           
            <div key={image.id} style={{ cursor: 'pointer' }}>
              <img 
                src={image.thumb} 
                alt={image.alt} 
                style={{ 
                  width: '100%', 
                
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CustomCarousel;