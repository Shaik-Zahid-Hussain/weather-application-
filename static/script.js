// static/script.js (JavaScript Logic)

// IMPORTANT: Your OpenWeatherMap API Key
const API_KEY = 'ecc276ac8b4929b00abbcc497f3a667b'; 

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const loadingIndicator = document.getElementById('loadingIndicator');
const errorMessage = document.getElementById('errorMessage');
const weatherDisplay = document.getElementById('weatherDisplay');

const cityNameElem = document.getElementById('cityName');
const weatherIconElem = document.getElementById('weatherIcon');
const temperatureElem = document.getElementById('temperature');
const weatherDescriptionElem = document.getElementById('weatherDescription');
const humidityElem = document.getElementById('humidity');
const windSpeedElem = document.getElementById('windSpeed');
const feelsLikeElem = document.getElementById('feelsLike');

// Function to map OpenWeatherMap icon codes to emojis
function getWeatherEmoji(iconCode) {
    switch (iconCode) {
        case '01d': return '☀️'; // clear sky day
        case '01n': return '🌙'; // clear sky night
        case '02d': return '🌤️'; // few clouds day
        case '02n': return '☁️'; // few clouds night
        case '03d':
        case '03n': return '☁️'; // scattered clouds
        case '04d':
        case '04n': return '☁️☁️'; // broken clouds
        case '09d':
        case '09n': return '🌧️'; // shower rain
        case '10d': return '🌦️'; // rain day
        case '10n': return '🌧️'; // rain night
        case '11d':
        case '11n': return '⛈️'; // thunderstorm
        case '13d':
        case '13n': return '❄️'; // snow
        case '50d':
        case '50n': return '🌫️'; // mist
        default: return '❓'; // unknown
    }
}

// Function to update the UI with weather data
function updateWeatherUI(data) {
    // Update weather details
    cityNameElem.textContent = data.name;
    weatherIconElem.textContent = getWeatherEmoji(data.weather[0].icon);
    temperatureElem.textContent = Math.round(data.main.temp);
    weatherDescriptionElem.textContent = data.weather[0].description;
    humidityElem.textContent = `${data.main.humidity}%`;
    windSpeedElem.textContent = `${(data.wind.speed * 3.6).toFixed(1)} km/h`; // Convert m/s to km/h
    feelsLikeElem.textContent = `${Math.round(data.main.feels_like)}°C`;

    // Apply dynamic background based on weather main condition
    const weatherMain = data.weather[0].main.toLowerCase(); // e.g., "Clear", "Clouds", "Rain"
    const body = document.body;

    // Remove any existing weather classes
    body.classList.remove('weather-clear', 'weather-clouds', 'weather-rain', 'weather-snow', 'weather-thunderstorm', 'weather-mist');

    // Add the appropriate weather class
    switch (weatherMain) {
        case 'clear':
            body.classList.add('weather-clear');
            break;
        case 'clouds':
            body.classList.add('weather-clouds');
            break;
        case 'rain':
        case 'drizzle':
            body.classList.add('weather-rain');
            break;
        case 'snow':
            body.classList.add('weather-snow');
            break;
        case 'thunderstorm':
            body.classList.add('weather-thunderstorm');
            break;
        case 'mist':
        case 'smoke':
        case 'haze':
        case 'dust':
        case 'fog':
        case 'sand':
        case 'ash':
        case 'squall':
        case 'tornado':
            body.classList.add('weather-mist');
            break;
        default:
            body.classList.add('weather-clear'); // Default to clear if unknown
    }

    // Add animation to the weather icon
    weatherIconElem.classList.add('weather-icon-animation');
}


// Function to fetch weather data
async function fetchWeatherData(city) {
    loadingIndicator.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    weatherDisplay.classList.add('hidden');

    if (!API_KEY || API_KEY === 'YOUR_OPENWEATHERMAP_API_KEY') {
        errorMessage.innerHTML = '<p>Please get your OpenWeatherMap API key and replace \'YOUR_OPENWEATHERMAP_API_KEY\' in the code.</p>';
        errorMessage.classList.remove('hidden');
        loadingIndicator.classList.add('hidden');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            updateWeatherUI(data);
            weatherDisplay.classList.remove('hidden');
        } else {
            errorMessage.textContent = data.message || 'City not found or API error.';
            errorMessage.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        errorMessage.textContent = 'Could not fetch weather data. Please check your internet connection.';
        errorMessage.classList.remove('hidden');
    } finally {
        loadingIndicator.classList.add('hidden');
    }
}

// Event listener for search button click
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeatherData(city);
    } else {
        errorMessage.textContent = 'Please enter a city name.';
        errorMessage.classList.remove('hidden');
        weatherDisplay.classList.add('hidden');
    }
});

// Optional: Fetch weather for a default city on load
window.onload = () => {
    fetchWeatherData('Delhi'); // Default city as per your image
};

// Optional: Allow pressing Enter key to search
cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchBtn.click();
    }
});
