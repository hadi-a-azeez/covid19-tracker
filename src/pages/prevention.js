import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import face from "../assets/face.png";
import sneez from "../assets/sneez.png";
import social from "../assets/social.png";
import wash from "../assets/wash.png";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const Prevention = () => {
  const [bgColor] = useState("#F7F8FC");
  const [headingColor] = useState("#2D313D");
  const [smTextColor] = useState("#505577");
  const [primaryColor] = useState("#1965FF");
  const [decoration] = useState("none");

  return (
    <Container fluid style={{ backgroundColor: bgColor }} className="h-100">
      <Container>
        <Row>
          <Col sm={3} className="mt-5">
            <Image
              className="ml-5"
              src={wash}
              alt="COVID-19"
              fluid
              style={{}}
            />
            <p
              className="mt-4 text-center"
              style={{ color: headingColor, fontWeight: 600 }}
            >
              Wash your hands frequently
            </p>
            <p
              className="text-center"
              style={{ color: smTextColor, fontSize: 15 }}
            >
              Regularly and thoroughly clean your hands with an alcohol-based
              hand rub wash them with soap and water for at least 20 seconds,
            </p>
          </Col>
          <Col sm={3} className="mt-5">
            <Image
              className="ml-5"
              src={social}
              alt="COVID-19"
              fluid
              style={{}}
            />
            <p
              className="mt-4 text-center"
              style={{ color: headingColor, fontWeight: 600 }}
            >
              Maintain social distancing
            </p>
            <p
              className="text-center"
              style={{ color: smTextColor, fontSize: 15 }}
            >
              Maintain at least 1 metre (3 feet) distance between yourself &
              anyone who is coughing or sneezing, if you are too close, get
              chance to infected
            </p>
          </Col>
          <Col sm={3} className="mt-5">
            <Image
              className="ml-5"
              src={face}
              alt="COVID-19"
              fluid
              style={{}}
            />
            <p
              className="mt-4 text-center"
              style={{ color: headingColor, fontWeight: 600 }}
            >
              Avoid touching face
            </p>
            <p
              className="text-center"
              style={{ color: smTextColor, fontSize: 15 }}
            >
              Hands touch many surfaces and can pick up viruses. So, hands can
              transfer the virus to your eyes, nose or mouth and can make you
              sick.
            </p>
          </Col>
          <Col sm={3} className="mt-5">
            <Image
              className="ml-5"
              src={sneez}
              alt="COVID-19"
              fluid
              style={{}}
            />
            <p
              className="mt-4 text-center"
              style={{ color: headingColor, fontWeight: 600 }}
            >
              Practice respiratory hygiene
            </p>
            <p
              className="text-center"
              style={{ color: smTextColor, fontSize: 15 }}
            >
              Maintain good respiratory hygiene as covering your mouth & nose
              with your bent elbow or tissue when cough or sneeze.
            </p>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <Button
            href="#"
            className="pl-4 pr-4 text-white mb-5"
            style={{
              borderRadius: 29,

              backgroundColor: primaryColor,
            }}
          >
            <Link
              to="/dashboard"
              className="text-white"
              style={{
                fontSize: 17,
                textDecoration: decoration,
                fontWeight: 600,
              }}
            >
              Go to dashboard{" "}
            </Link>
          </Button>
        </div>
      </Container>
    </Container>
  );
};

export default Prevention;
