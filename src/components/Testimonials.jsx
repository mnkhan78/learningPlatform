import Carousel from "react-bootstrap/Carousel";
import Testim1 from "../assets/testim1.jpg";
import Testim2 from "../assets/testim2.jpg";
import Testim3 from "../assets/testim3.jpg";
import Testim4 from "../assets/testim4.jpg";
import Testim5 from "../assets/testim5.jpg";
import Testim6 from "../assets/testim6.jpg";
import Testim7 from "../assets/testim7.jpg";
import Testim8 from "../assets/testim8.jpg";
import Testim9 from "../assets/testim9.jpg";
import Testim10 from "../assets/testim10.jpg";
import Testim11 from "../assets/testim11.jpg";
import Testim12 from "../assets/testim12.jpg";
function Testimonials() {
  return (
    <div className="testim-container">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={Testim1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Testim2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Testim3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Testim4} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Testim5} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Testim6} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Testim7} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Testim8} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Testim9} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Testim10} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Testim11} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Testim12} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testimonials;
