import { Carousel } from 'react-bootstrap';
import img1 from '../images/modern-nature-watercolor-background.jpg';
import img2 from '../images/sea-landscape-with-digital-art-style.jpg';
import img3 from '../images/sky-landscape-digital-art-style-with-moon.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/AboutMe.css'



function AboutImage() {
  return (
    <div className='carousel-img'>
    <Carousel fade interval={null}>
      <Carousel.Item>
        <img className="carousel-img" src={img1} alt="Slide 1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src={img2} alt="Slide 2" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src={img3} alt="Slide 3" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default AboutImage;
