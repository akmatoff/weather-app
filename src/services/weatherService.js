import axios from 'axios';

const URL = 'https://community-open-weather-map.p.rapidapi.com/find'
const apiKey = '128688ccd8mshf3b41aac11e35cap1550fajsna9b4ce92e119'

// Function to send request to the API
export const getWeather = async (q) => {
    const {data} = await axios.get(URL, {
        params: {
            q: q,
            cnt: '0',
            mode: 'null',
            lon: '0',
            type: 'link, accurate',
            lat: '0',
            units: 'imperial, metric'
        },
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    })
    return data
}

