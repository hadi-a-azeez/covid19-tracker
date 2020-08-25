import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { fetchState } from "../api";
import "./statePicker.css";

const StatePicker = ({ handleStateChange }) => {
  const [states, setStates] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setStates(await fetchState());
    };
    fetchApi();
  }, []);
  return (
    <>
      <Form>
        <Form.Control
          as="select"
          custom
          className="statePicker mt-3"
          onChange={(e) => handleStateChange(e.target.value)}
        >
          <option>India</option>
          {states.map((state, i) => (
            <option key={i} value={state}>
              {state}
            </option>
          ))}
        </Form.Control>
      </Form>
    </>
  );
};

export default StatePicker;
