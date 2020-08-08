import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { fetchState } from "../api";

const StatePicker = ({ handleStateChange }) => {
  const [border_bottom] = useState("4px solid rgba(25, 101, 255, 1");
  const [none] = useState("none");
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
          className="w-25 mt-3"
          style={{
            borderBottom: border_bottom,
            borderTop: none,
            borderRight: none,
            borderLeft: none,
            borderRadius: 0,
          }}
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
