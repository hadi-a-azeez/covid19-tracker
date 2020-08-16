import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import StatePicker from "../components/statePicker";
import Cards from "../components/cards";
import { fetchStateData, fetchCountries } from "../api";
import Map from "../components/Map";
import "leaflet/dist/leaflet.css";

const Dashboard = () => {
  const [bgColor] = useState("#F7F8FC");
  const [filtered, setFiltered] = useState([]);
  const [state, setState] = useState("");
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType] = useState("cases");
  const [mapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom] = useState(3);

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
  useEffect(() => {
    const getCountriesData = async () => {
      const dataObj = await fetchCountries();
      setMapCountries(dataObj.data);
    };
    getCountriesData();
  }, []);

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
              <Map
                countries={mapCountries}
                casesType={casesType}
                center={mapCenter}
                zoom={mapZoom}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Dashboard;
