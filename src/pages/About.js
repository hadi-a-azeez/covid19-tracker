import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import side_image from "../assets/side_image.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import "./About.css";

const About = () => {
  const [bgColor] = useState("#F7F8FC");
  const [imgWidth] = useState("70%");
  const [imgWidthicon] = useState("5%");
  return (
    <Container fluid style={{ backgroundColor: bgColor }}>
      <Container className="containerMain">
        <Row>
          <Col sm={6} className="mt-5 columnOne">
            <h1 className="heading">Hi, Everyone !</h1>
            <p className="paragraph mt-3 mb-0">
              Hi, my name is Hadi Abdul Azeez . <br></br> I am a webdeveloper.
            </p>
            <p className="mt-1">
              Source code for this project is <br></br>
              available in my GitHub.
            </p>
            <a href={"https://github.com/hadi-a-azeez/covid19-tracker.git"}>
              <Image
                className=""
                src={github}
                alt="COVID-19"
                fluid
                style={{ width: imgWidthicon }}
              />
            </a>
            <a href={"https://www.linkedin.com/in/hadi-azeez-321322197"}>
              <Image
                className="ml-3"
                src={linkedin}
                alt="COVID-19"
                fluid
                style={{ width: imgWidthicon }}
              />
            </a>
          </Col>

          <Col sm={6} className="mt-5 columnTwo">
            <div className="text-right">
              <Image
                className=""
                src={side_image}
                alt="COVID-19"
                fluid
                style={{ width: imgWidth }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
