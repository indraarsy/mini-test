const axios = require('axios');

const apiKey = 'ac4aa13a4846c4c89597c193256fa0b0';

async function getWeatherForecast() {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=jakarta&appid=${apiKey}&units=metric`);
        const data = response.data;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const fiveDaysLater = new Date(today);
        fiveDaysLater.setDate(fiveDaysLater.getDate() + 6);

        console.log(`Ramalan Cuaca untuk Kota Jakarta selama 5 Hari Kedepan:`);
        data.list.forEach((forecast) => {
            const forecastDate = new Date(forecast.dt * 1000);
            if(forecastDate.getHours() -1 == 12) {
                if (forecastDate >= today && forecastDate <= fiveDaysLater) {
                    console.log(`${forecastDate.toDateString()}: ${forecast.main.temp}°C`);
                }
            }

        });
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
    }
}

getWeatherForecast();
