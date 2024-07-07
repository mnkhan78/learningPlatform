import React from "react";
import { Link } from "react-router-dom";
import Footer from './components/Footer'
const RefundPolicy = () => {
  return (
    <div>
      <h1>Refund Policy</h1>
      <div className="margin-20px">
        <p>
          <b>Thank you for choosing OrganonEasy!</b> We understand that sometimes
          things don't go as planned, and you may need to request a refund. This
          policy outlines the conditions under which we offer refunds for our
          online courses and services.
        </p>
        <div>
          <h5>Eligibility for Refunds:</h5>
          <ul>
            <li>
              <p>
                <b>Full Refund:</b> You will be eligible for a full refund if
                you request it within <b>7 days</b> of your purchase
              </p>
            </li>
            <li>
              <p>
                <b>No Refund: </b>Unfortunately, we cannot offer refunds if you
                request it after 7 days
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h5>Factors Considered for Refunds:</h5>
          <ul>
            <li>
              <p>
                <b>Date of Purchase: </b>We will consider the date of your
                purchase when determining eligibility for a refund.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h5>How to Request a Refund:</h5>
          <ul>
            <li>
              To request a refund, please visit our{" "}
              <Link to="/">Contact us</Link> page or email us at{" "}
              <Link to="orgaoneasy@gmail.com">orgaoneasy@gmail.com</Link>
            </li>
            <li>
              In your request, please include your order ID and the reason for
              requesting a refund.
            </li>
          </ul>
        </div>
        <div>
          <h5>Processing Time:</h5>
          <ul>
            <li>
              We aim to process all refund requests within{" "}
              <b> 7 business days.</b>
            </li>
            <li>
              You will receive a confirmation email once your request is
              processed.
            </li>
          </ul>
        </div>
        <div>
          <h5>Additional Information:</h5>
          <ul>
            <li>This policy applies to all purchases made on OrganonEasy.</li>
            <li>
              By purchasing a course or service on our website, you agree to the
              terms of this Refund Policy.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
