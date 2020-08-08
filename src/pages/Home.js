import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import main_image from "../assets/main_image.png";
import Image from "react-bootstrap/Image";
import { fetchData } from "../api";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const Home = () => {
  const [bgColor] = useState("#F7F8FC");
  const [headingColor] = useState("#2D313D");
  const [primaryColor] = useState("#1965FF");
  const [smTextColor] = useState("#505577");
  const [statHeadColor] = useState("#7D92BB");
  const [statNumColor] = useState("#4B556E");
  const [statDeathColor] = useState("#F86269");
  const [statRecoveredColor] = useState("#5AD2A3");
  const [decoration] = useState("none");
  const [imgWidth] = useState("80%");
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setData(data);
    })();
  }, []);
  if (!data.confirmed) {
    return "Loading...";
  }
  return (
    <Container fluid style={{ backgroundColor: bgColor }} className="h-100">
      <Container>
        <Row>
          <Col sm={6} className="mt-5">
            <h1
              className="mt-5"
              style={{ color: headingColor, fontWeight: 700, lineHeight: 1.3 }}
            >
              Prevent the spread Stay at Home, Stay Safe
            </h1>
            <p style={{ color: smTextColor }}>
              The best way to prevent and slow down transmission is be well
              informed about the COVID-19 virus. Protect yourself and others
              from infection by washing your hands at-least 20sec and not
              touching your face,
            </p>
            <Button
              className="pl-4 pr-4 text-white"
              style={{
                borderRadius: 29,
                fontSize: 17,
                backgroundColor: primaryColor,
                fontWeight: 600,
              }}
            >
              {" "}
              <Link
                to="/prevention"
                className="text-white"
                style={{
                  fontSize: 17,
                  textDecoration: decoration,
                  fontWeight: 600,
                }}
              >
                How to protect{" "}
              </Link>
            </Button>
            <Row className="mt-5">
              <Col sm={4}>
                <p
                  className="mb-0"
                  style={{
                    color: statHeadColor,
                    fontWeight: 600,
                    fontSize: 13,
                  }}
                >
                  WORLDWIDE CASE
                </p>
                <p
                  style={{ color: statNumColor, fontSize: 24, fontWeight: 700 }}
                >
                  <CountUp
                    start={0}
                    end={data.confirmed.value}
                    duration={2.75}
                    separator=","
                  />
                </p>
              </Col>
              <Col sm={4}>
                <p
                  className="mb-0"
                  style={{
                    color: statDeathColor,
                    fontWeight: 600,
                    fontSize: 13,
                  }}
                >
                  DEATHS
                </p>
                <p
                  style={{ color: statNumColor, fontSize: 24, fontWeight: 700 }}
                >
                  <CountUp
                    start={0}
                    end={data.deaths.value}
                    duration={2.75}
                    separator=","
                  />
                </p>
              </Col>
              <Col sm={4}>
                <p
                  className="mb-0"
                  style={{
                    color: statRecoveredColor,
                    fontWeight: 600,
                    fontSize: 13,
                  }}
                >
                  RECOVERED
                </p>
                <p
                  style={{ color: statNumColor, fontSize: 24, fontWeight: 700 }}
                >
                  <CountUp
                    start={0}
                    end={data.recovered.value}
                    duration={2.75}
                    separator=","
                  />
                </p>
              </Col>
            </Row>
            <p
              className="mb-0"
              style={{
                color: statHeadColor,
                fontWeight: 500,
                fontSize: 13,
              }}
            >
              *Last updated : {new Date(data.lastUpdate).toDateString()}
            </p>
          </Col>
          <Col sm={6} className="mt-5">
            <div className="text-right">
              <Image
                className="ml-5"
                src={main_image}
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

export default Home;
