// script.js

// Constants for API and Elements
const apiKey = 'YOUR_API_KEY'; // You'll need to replace with your actual OpenWeatherMap API Key
const weatherForm = document.getElementById('weather-form');
const locationInput = document.getElementById('location-input');
const loading = document.getElementById('loading');
const weatherInfo = document.getElementById('weather-info');
const locationName = document.getElementById('location-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

// Function to fetch weather data from the API
async function fetchWeatherData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Weather data not found');
        const data = await response.json();
        const weatherData = processWeatherData(data);
        displayWeatherData(weatherData);
    } catch (error) {
        console.error(error);
    } finally {
        loading.style.display = 'none';
    }
}

// Function to process the API response and return only the necessary data
function processWeatherData(data) {
    return {
        location: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
    };
}

// Function to display weather data on the page
function displayWeatherData(data) {
    locationName.textContent = `Location: ${data.location}`;
    temperature.textContent = `Temperature: ${data.temperature}°C`;
    description.textContent = `Condition: ${data.description}`;
    weatherInfo.style.display = 'block'; // Show weather info
}

// Form submission handler
weatherForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const location = locationInput.value;
    if (!location) return;

    loading.style.display = 'block';
    weatherInfo.style.display = 'none';

    fetchWeatherData(location);
});
