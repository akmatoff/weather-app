import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather/";
const apiKey = "7698f8f7244b3045c934b3d443df8047";

// Function to send request to the API
export const getWeather = async (q) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        q: q,
        appid: apiKey,
        cnt: "0",
        mode: "null",
        lon: "0",
        type: "link, accurate",
        lat: "0",
        units: "metric",
      },
    });
    console.log(data);
    return data;
  } catch (err) {
    return err;
  }
};
