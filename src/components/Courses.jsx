import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Featured from "../assets/oe_featured.jpg";
import { Button } from "react-bootstrap";
import "./home.css";
import { Link } from "react-router-dom";

function Courses() {
  const handlePayment = () => {
    // Replace with your Razorpay Payment Page URL
    const razorpayPaymentPageUrl = "https://rzp.io/l/clinical-classes01";
    window.location.href = razorpayPaymentPageUrl;
  };
  const paymentHandler = () => {
    const paymentURL = "https://rzp.io/l/organonbasic";
    window.location.href = paymentURL;
  };
  return (
    <CardGroup className="margin-20px">
      <Card>
        <Card.Img variant="top" src={Featured} />
        <Card.Body>
          <Card.Title>30 Days 30 Clinical Classes</Card.Title>
          <Card.Text>
            This Practical teaching is aimed to give you the confidence to start
            and establish your private practice from zero.
          </Card.Text>

          <Card.Subtitle>
            <div className="price-text">
              Price: <span className="bold-txt"> ₹3000</span>{" "}
              <span className="txt-line">5000</span>
            </div>{" "}
          </Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          <Link to="/clinicalClasses">
            <Button>Start Learning</Button>{" "}
          </Link>
          <Button onClick={handlePayment}>Enroll Now</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Featured} />
        <Card.Body>
          <Card.Title>OrganonEasy (Basic)</Card.Title>
          <Card.Text>
            In this class room we will cover entire aphorisms of organon of
            medicine along with fundam entals of Homoeopathy.
          </Card.Text>
          <Card.Subtitle>
            <div className="price-text">
              Price: <span className="bold-txt">₹2100 </span>{" "}
              <span className="txt-line">4000</span>
            </div>{" "}
          </Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          <Link to="https://organonbasic.drkhanshomoeocare.com/">
            <Button>Start Learning</Button>{" "}
          </Link>
          <Button onClick={paymentHandler}>Enroll Now</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Courses;
