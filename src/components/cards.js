import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";
import total_case from "../assets/total_case.png";
import total_death from "../assets/total_death.png";
import recovered from "../assets/recovered.png";
import new_cases from "../assets/new_cases.png";
import new_death from "../assets/new_death.png";
import helpline from "../assets/helpline.png";
import Card from "react-bootstrap/Card";
import { fetchIndia } from "../api";
import { Doughnut } from "react-chartjs-2";

const Cards = ({ filtered, state }) => {
  const [headColor] = useState("#BABADB");
  const [numColor] = useState("#4B556E");
  const [borderColor] = useState("#ffffff");
  const [bgColor] = useState("#F7F8FC");
  const [india, setIndia] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setIndia(await fetchIndia());
    };
    fetchApi();
  }, []);

  return (
    <>
      <Col sm={6} className="mt-3">
        <Card style={{ width: 260, borderColor: borderColor }}>
          <Card.Body>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src={total_case}
                alt="Generic placeholder"
              />
              <Media.Body>
                <p
                  className="mb-0"
                  style={{ color: headColor, fontWeight: 600 }}
                >
                  Total case
                </p>
                <p
                  style={{ color: numColor, fontWeight: 700, fontSize: 20 }}
                  className="mb-0"
                >
                  {filtered.confirmed ? filtered.confirmed : india.confirmed}
                </p>
              </Media.Body>
            </Media>
          </Card.Body>
        </Card>
        <Card style={{ width: 260, borderColor: borderColor }} className="mt-3">
          <Card.Body>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src={recovered}
                alt="Generic placeholder"
              />
              <Media.Body>
                <p
                  className="mb-0"
                  style={{ color: headColor, fontWeight: 600 }}
                >
                  Total recovered
                </p>
                <p
                  style={{ color: numColor, fontWeight: 700, fontSize: 20 }}
                  className="mb-0"
                >
                  {filtered.confirmed ? filtered.recovered : india.recovered}
                </p>
              </Media.Body>
            </Media>
          </Card.Body>
        </Card>
        <Card style={{ width: 260, borderColor: borderColor }} className="mt-3">
          <Card.Body>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src={new_death}
                alt="Generic placeholder"
              />
              <Media.Body>
                <p
                  className="mb-0"
                  style={{ color: headColor, fontWeight: 600 }}
                >
                  New death
                </p>
                <p
                  style={{ color: numColor, fontWeight: 700, fontSize: 20 }}
                  className="mb-0"
                >
                  {filtered.confirmed ? filtered.dChanges : india.dChanges}
                </p>
              </Media.Body>
            </Media>
          </Card.Body>
        </Card>
        <Card
          style={{ width: 260, borderColor: borderColor }}
          className="mt-3 mb-3"
        >
          <Card.Body>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src={helpline}
                alt="Generic placeholder"
              />
              <Media.Body>
                <p
                  className="mb-0"
                  style={{ color: headColor, fontWeight: 600 }}
                >
                  Helpline
                </p>
                <p
                  style={{ color: numColor, fontWeight: 700, fontSize: 20 }}
                  className="mb-0"
                >
                  999
                </p>
              </Media.Body>
            </Media>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} className="mt-3">
        <Card style={{ width: 260, borderColor: borderColor }}>
          <Card.Body>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src={total_death}
                alt="Generic placeholder"
              />
              <Media.Body>
                <p
                  className="mb-0"
                  style={{ color: headColor, fontWeight: 600 }}
                >
                  Total death
                </p>
                <p
                  style={{ color: numColor, fontWeight: 700, fontSize: 20 }}
                  className="mb-0"
                >
                  {filtered.confirmed ? filtered.deaths : india.deaths}
                </p>
              </Media.Body>
            </Media>
          </Card.Body>
        </Card>
        <Card style={{ width: 260, borderColor: borderColor }} className="mt-3">
          <Card.Body>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src={new_cases}
                alt="Generic placeholder"
              />
              <Media.Body>
                <p
                  className="mb-0"
                  style={{ color: headColor, fontWeight: 600 }}
                >
                  New cases
                </p>
                <p
                  style={{ color: numColor, fontWeight: 700, fontSize: 20 }}
                  className="mb-0"
                >
                  {filtered.confirmed ? filtered.cChanges : india.cChanges}
                </p>
              </Media.Body>
            </Media>
          </Card.Body>
        </Card>
        <Card
          style={{ width: 260, borderColor: bgColor, backgroundColor: bgColor }}
          className="mt-3"
        >
          <Card.Body>
            <Doughnut
              style={{ height: 280 }}
              data={{
                labels: ["Confirmed", "Deaths", "Recovered"],
                datasets: [
                  {
                    label: "Population (millions)",
                    backgroundColor: ["#3C90FA", "#F53B59", "#3CDE9B"],
                    data: [
                      filtered.confirmed ? filtered.confirmed : india.confirmed,
                      filtered.confirmed ? filtered.deaths : india.deaths,
                      filtered.confirmed ? filtered.recovered : india.recovered,
                    ],
                  },
                ],
              }}
              height={300}
              options={{
                title: {
                  display: false,
                  text: "Predicted world population (millions) in 2050",
                },
              }}
            />
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Cards;
