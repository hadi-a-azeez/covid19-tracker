import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import { fetchIndia } from "../api";

const BarChart = ({ filtered, state }) => {
  const [india, setIndia] = useState([]);
  const [borderColor] = useState("#ffffff");

  useEffect(() => {
    const fetchApi = async () => {
      setIndia(await fetchIndia());
    };
    fetchApi();
  }, []);

  const ifFiltered = filtered.confirmed ? (
    <>
      <Col sm={6} className="mt-3 ml-4">
        <Card style={{ width: 560, borderColor: borderColor }}>
          <Card.Body>
            <Bar
              data={{
                labels: ["Confirmed", "Recovered", "Deaths"],
                datasets: [
                  {
                    label: "People",
                    backgroundColor: [
                      "rgba(0, 0, 255, 0.5)",
                      "rgba(0, 255, 0, 0.5)",
                      "rgba(255, 0, 0, 0.5)",
                    ],
                    data: [
                      filtered.confirmed,
                      filtered.recovered,
                      filtered.deaths,
                    ],
                  },
                ],
              }}
              options={{
                legend: { display: false },
                title: { display: true, text: "" },
              }}
            />
          </Card.Body>
        </Card>
      </Col>
    </>
  ) : null;
  const ifNoFiltered = !filtered.confirmed ? (
    <>
      <Col sm={6} className="mt-3 ml-4">
        <Card style={{ width: 560, borderColor: borderColor }}>
          <Card.Body>
            <Bar
              data={{
                labels: ["Confirmed", "Recovered", "Deaths"],
                datasets: [
                  {
                    label: "People",
                    backgroundColor: [
                      "rgba(0, 0, 255, 0.5)",
                      "rgba(0, 255, 0, 0.5)",
                      "rgba(255, 0, 0, 0.5)",
                    ],
                    data: [india.confirmed, india.recovered, india.deaths],
                  },
                ],
              }}
              options={{
                legend: { display: false },
                title: { display: true, text: "" },
              }}
            />
          </Card.Body>
        </Card>
      </Col>
    </>
  ) : null;
  return <>{state ? ifFiltered : ifNoFiltered}</>;
};

export default BarChart;
