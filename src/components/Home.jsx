import Card from "react-bootstrap/Card";
import Navmenu from "./Navbar";
import Courses from "./Courses";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Featured from "../assets/organon-featured.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ImgOverlayExample() {
  return (
    <div>
      <Navmenu />
      <Card className="bg-dark tex-dark">
        <Card.Img style={{ height: "60vh" }} src={Featured} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>
            Welcome to <span style={{ color: "brown" }}>OrganonEasy</span>{" "}
          </Card.Title>
          <Card.Text>
            OrganonEasy is an organization with a moto private practice of
            classical homoeopathy among students and doctors.
          </Card.Text>
          <Link to="https://clinicalclasses.drkhanshomoeocare.com/">
            <Button>Free Trial</Button>
          </Link>{" "}
          <Link to="https://rzp.io/l/clinical-classes01">
            <Button>Buy Now</Button>
          </Link>
        </Card.ImgOverlay>
      </Card>
      <div className="h2-center">
        <h2>Courses</h2>
      </div>
      <Courses />
      <div className="h2-center">
        <h2>Testimonials</h2>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default ImgOverlayExample;
