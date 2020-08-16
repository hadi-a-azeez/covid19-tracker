import axios from "axios";

const urlTotal = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(urlTotal);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};
const urlstate = "https://api.covidindiatracker.com/state_data.json";
export const fetchState = async () => {
  try {
    const data = await axios.get(urlstate);
    return data.data.map((state) => state.state);
  } catch (error) {
    return error;
  }
};
const urlindia = "https://api.covidindiatracker.com/total.json";
export const fetchIndia = async () => {
  try {
    const india = await axios.get(urlindia);
    return india.data;
  } catch (error) {
    return error;
  }
};
const urlhandlechange = "https://api.covidindiatracker.com/state_data.json";
export const fetchStateData = async (state) => {
  if (state === "India") {
    try {
      const india = await axios.get(urlindia);
      return india.data;
    } catch (error) {
      return error;
    }
  } else {
    try {
      const data = await axios.get(urlhandlechange);
      return data.data.filter((e) => e.state === state);
    } catch (error) {
      return error;
    }
  }
};
const urlCountries = "https://disease.sh/v3/covid-19/countries";
export const fetchCountries = async () => {
  try {
    const countreisData = await axios.get(urlCountries);
    return countreisData;
  } catch (err) {
    return err;
  }
};
