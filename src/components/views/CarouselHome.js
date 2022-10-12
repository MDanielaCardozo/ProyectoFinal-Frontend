import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample(props) {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={props.promo1} alt="Promo 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={props.promo2} alt="Promo 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={props.promo3} alt="Promo 3" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
