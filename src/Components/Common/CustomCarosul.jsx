import './CustomCarosul.css'
import Carousel from 'react-bootstrap/Carousel';

const CustomCarosul =()=> {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 carosul-img"
          src="https://img.freepik.com/free-vector/gradient-style-football-field-background_23-2148995842.jpg?ga=GA1.1.1950060310.1720193730&semt=ais_hybrid"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carosul-img"
          src="https://img.freepik.com/free-vector/realistic-abstract-football-background_52683-66946.jpg?ga=GA1.1.1950060310.1720193730&semt=ais_hybrid"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carosul-img"
          src="https://img.freepik.com/free-vector/gradient-football-field-background_23-2149013248.jpg?ga=GA1.1.1950060310.1720193730&semt=ais_hybrid"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarosul;