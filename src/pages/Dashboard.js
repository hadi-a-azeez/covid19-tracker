import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import StatePicker from "../components/statePicker";
import Cards from "../components/cards";
import BarChart from "../components/BarChart";
import { fetchStateData } from "../api";

const Dashboard = () => {
  const [bgColor] = useState("#F7F8FC");
  const [filtered, setFiltered] = useState([]);
  const [state, setState] = useState("");

  const handleStateChange = async (state) => {
    const data = await fetchStateData(state);
    if (state === "India") {
      setFiltered(data);
    } else {
      const data2 = data[0];
      setState(state);
      setFiltered(data2);
    }
  };

  return (
    <div>
      <Container fluid style={{ backgroundColor: bgColor }} className="h-100">
        <Container>
          <StatePicker handleStateChange={handleStateChange} />
          <Row>
            <Col sm={6}>
              <Cards filtered={filtered} state={state} />
            </Col>
            <Col sm={6}>
              <BarChart filtered={filtered} state={state} />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Dashboard;
