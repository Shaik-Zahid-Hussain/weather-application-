Weather Application
This is a simple yet dynamic weather application that displays current weather conditions for any city, featuring a modern glassmorphism UI and dynamic background elements that change based on the weather and time of day.

Features
Search by City: Get real-time weather data for any city worldwide.

Dynamic Backgrounds: The background gradient changes based on the main weather condition (e.g., clear, cloudy, rainy, snowy, stormy, misty).

Animated Background Elements:

Sun and hot air balloon appear during the day for clear skies.

Clouds appear for cloudy, rainy, or snowy conditions.

Wind swirls appear for windy/rainy conditions.

Stars twinkle during clear nights.

Particle Effects: Animated rain, snow, or stars fall across the screen based on the weather type.

Glassmorphism UI: A sleek, frosted glass effect for the main weather card.

Responsive Design: Adapts to different screen sizes (mobile, tablet, desktop).

Key Weather Metrics: Displays temperature, weather description, humidity, wind speed, and "feels like" temperature.

Loading and Error States: Provides feedback while fetching data or if a city is not found.

Technologies Used
Backend: Python 3 with Flask

Frontend:

HTML5 (Structure)

CSS3 (Custom styles for glassmorphism, animations, and background elements)

Tailwind CSS (Utility-first CSS framework for rapid styling)

JavaScript (Fetching data from API, updating UI, dynamic effects)

Weather API: OpenWeatherMap API

Setup and Installation
To get this project up and running on your local machine, follow these steps:

1. Prerequisites
Python 3.x: Make sure you have Python installed. You can download it from python.org.

pip: Python's package installer, usually comes with Python.

OpenWeatherMap API Key:

Go to https://openweathermap.org/api.

Sign up for a free account.

Navigate to the "API keys" tab to find or generate your API key.

2. Project Structure
Create the following directory and file structure:

your_project_directory/
├── app.py
├── templates/
│   └── index.html
└── static/
    ├── style.css
    └── script.js

3. Save the Files
Save the provided code into their respective files:

app.py: Save the Python Flask backend code here.

templates/index.html: Save the HTML structure code here.

static/style.css: Save the CSS styles code here.

static/script.js: Save the JavaScript logic code here.

4. Update API Key in script.js
Open static/script.js and replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual OpenWeatherMap API key:

// static/script.js (JavaScript Logic)

// IMPORTANT: Your OpenWeatherMap API Key
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // <--- REPLACE THIS WITH YOUR KEY
// ... rest of the code

(Note: The API key 'ecc276ac8b4929b00abbcc497f3a667b' has been used in previous code blocks. Please ensure you update script.js with your key if you wish to use a different one, or keep the provided one if it's functional for you.)

5. Install Flask
Open your terminal or command prompt, navigate to your_project_directory/, and install Flask:

pip install Flask

How to Run the Application
Navigate to your project directory in the terminal/command prompt.

Run the Flask server:

python app.py

Open your web browser and go to the address displayed in your terminal (usually http://127.0.0.1:5000/).

The application will load, display weather for "Delhi" by default, and allow you to search for other cities.

Future Improvements
Location Detection: Automatically detect the user's current location using Geolocation API.

5-Day/Hourly Forecast: Display upcoming weather conditions.

Unit Toggle: Allow users to switch between Celsius/Fahrenheit and km/h/mph.

Search History/Suggestions: Implement local storage to remember recent searches.

Time of Day Awareness: More precise day/night transitions and corresponding background elements.

More Diverse Particle Effects: Add more varied particle animations for different weather conditions.

Backend API Key Proxy: For production environments, proxy API requests through the Flask backend to keep the API key server-side.
