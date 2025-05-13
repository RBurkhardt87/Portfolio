import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/AboutMe.css';



function CarouselImages({ imageArray }) {

  return (
    <div className='image-container'>
      <div className='carousel-img'>
        <Carousel fade interval={null}>
          {imageArray.map(({ image, alt, label, caption }, index) => (
            <Carousel.Item key={index}>              
              {/* <h3>{label}</h3>
              <p>{caption}</p> */}
              <img className="carousel-img" src={image} alt={alt} />            
            </Carousel.Item>
            
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselImages;
