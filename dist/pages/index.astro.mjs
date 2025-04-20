/* empty css                                    */
import { c as createComponent, m as maybeRenderHead, a as renderScript, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_nvmoESTr.mjs';
import { $ as $$Navigation } from '../chunks/Navigation_BZ7xgjHj.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$AddSession = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="addSession" class="bg-boxColor p-6 rounded-lg shadow-md mb-6"> <h2 class="text-xl font-bold mb-4 text-textPrimary">Add Training Session</h2> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
Date
</label> <input type="date" id="date" name="date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="duration">
Duration (minutes)
</label> <input type="number" id="duration" name="duration" min="1" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="skills">
Skills (comma-separated)
</label> <input type="text" id="skills" name="skills" placeholder="e.g., Dribbling, Shooting, Passing" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="notes">
Notes
</label> <textarea id="notes" name="notes" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="3"></textarea> </div> <button type="submit" class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300">
Add Session
</button> </form> ${renderScript($$result, "/home/project/src/components/AddSession.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/components/AddSession.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
  import { supabase } from '../lib/supabase.js';

  const signOutButton = document.getElementById('signOutButton');
  const userEmail = document.getElementById('userEmail');
  const sessionsContainer = document.getElementById('sessions');
  const totalMinutesElement = document.getElementById('totalMinutes');
  const updateLocationBtn = document.getElementById('updateLocationBtn');
  const locationInput = document.getElementById('location');

  // Get current user
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    window.location.href = '/login';
  } else {
    userEmail.textContent = user.email;
  }

  // Sign out
  signOutButton?.addEventListener('click', async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      window.location.href = '/login';
    }
  });

  // Load sessions
  const sessions = JSON.parse(localStorage.getItem('trainingSessions') || '[]');
  const totalMinutes = sessions.reduce((total, session) => total + parseInt(session.duration), 0);
  if (totalMinutesElement) {
    totalMinutesElement.textContent = \`\${totalMinutes} minutes\`;
  }

  sessions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (sessionsContainer) {
    sessionsContainer.innerHTML = sessions.map(session => \`
      <div class="bg-white p-6 rounded-lg shadow-md mb-4">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold">\${session.date}</h3>
          <span class="text-gray-600">\${session.duration} minutes</span>
        </div>
        <div class="mb-3">
          <h4 class="font-medium mb-2">Skills Practiced:</h4>
          <div class="flex flex-wrap gap-2">
            \${session.skills.map(skill => \`
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                \${skill}
              </span>
            \`).join('')}
          </div>
        </div>
        <p class="text-gray-700">\${session.notes}</p>
      </div>
    \`).join('');
  }

  // Weather logic
  const API_KEY = 'af770edc03304b4e8b6213518251604';

  async function getWeatherData() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        try {
          const response = await fetch(\`https://api.openweathermap.org/data/2.5/weather?lat=\${lat}&lon=\${lon}&units=metric&appid=\${API_KEY}\`);
          const data = await response.json();
          displayWeather(data);
        } catch (err) {
          document.getElementById('weatherDisplay').innerHTML = '<p>Error loading weather.</p>';
        }
      });
    }
  }

  async function updateWeatherByLocation(location) {
    try {
      const response = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${location}&units=metric&appid=\${API_KEY}\`);
      const data = await response.json();
      displayWeather(data);
    } catch (err) {
      document.getElementById('weatherDisplay').innerHTML = '<p>Location not found.</p>';
    }
  }

  function displayWeather(data) {
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = \`https://openweathermap.org/img/wn/\${iconCode}@2x.png\`;
    const windSpeed = data.wind.speed;
    const humidity = data.main.humidity;

    document.getElementById('weatherDisplay').innerHTML = \`
      <img src="\${iconUrl}" alt="\${description}" class="w-16 h-16">
      <div class="ml-4">
        <div class="text-2xl font-bold">\${temp}\xB0C</div>
        <div class="capitalize">\${description}</div>
        <div class="text-sm text-gray-600">Wind: \${windSpeed} m/s | Humidity: \${humidity}%</div>
      </div>
    \`;

    updateWorkoutRecommendations(data);
  }

  function updateWorkoutRecommendations(data) {
    const temp = data.main.temp;
    const condition = data.weather[0].main;
    const wind = data.wind.speed;

    let recommendation = '';

    if (temp > 30) {
      recommendation = 'Extreme heat alert! Train indoors or early/late outside.';
    } else if (temp > 25) {
      recommendation = 'Hot day. Hydrate and reduce intensity.';
    } else if (temp < 5) {
      recommendation = 'Cold weather. Dress warm and warm up well.';
    } else {
      recommendation = 'Perfect training weather!';
    }

    if (condition === 'Rain') recommendation += ' Consider indoor or technical work.';
    if (condition === 'Snow') recommendation += ' Snow detected - indoor recommended.';
    if (condition === 'Thunderstorm') recommendation += ' \u26A0\uFE0F Thunderstorm! Stay indoors.';
    if (wind > 10) recommendation += ' Windy day. Practice control and adaptability.';

    document.getElementById('weatherRecommendation').innerHTML = \`
      <h3 class="font-bold mb-2">Today's Training Recommendation:</h3>
      <p>\${recommendation}</p>
    \`;
  }

  // Event listeners
  updateLocationBtn?.addEventListener('click', () => {
    const location = locationInput?.value;
    if (location) updateWeatherByLocation(location);
  });

  locationInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const location = locationInput.value;
      if (location) updateWeatherByLocation(location);
    }
  });

  getWeatherData();
  setInterval(getWeatherData, 30 * 60 * 1000); // Refresh every 30 minutes
<\/script>`], ["", ` <script type="module">
  import { supabase } from '../lib/supabase.js';

  const signOutButton = document.getElementById('signOutButton');
  const userEmail = document.getElementById('userEmail');
  const sessionsContainer = document.getElementById('sessions');
  const totalMinutesElement = document.getElementById('totalMinutes');
  const updateLocationBtn = document.getElementById('updateLocationBtn');
  const locationInput = document.getElementById('location');

  // Get current user
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    window.location.href = '/login';
  } else {
    userEmail.textContent = user.email;
  }

  // Sign out
  signOutButton?.addEventListener('click', async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      window.location.href = '/login';
    }
  });

  // Load sessions
  const sessions = JSON.parse(localStorage.getItem('trainingSessions') || '[]');
  const totalMinutes = sessions.reduce((total, session) => total + parseInt(session.duration), 0);
  if (totalMinutesElement) {
    totalMinutesElement.textContent = \\\`\\\${totalMinutes} minutes\\\`;
  }

  sessions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (sessionsContainer) {
    sessionsContainer.innerHTML = sessions.map(session => \\\`
      <div class="bg-white p-6 rounded-lg shadow-md mb-4">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold">\\\${session.date}</h3>
          <span class="text-gray-600">\\\${session.duration} minutes</span>
        </div>
        <div class="mb-3">
          <h4 class="font-medium mb-2">Skills Practiced:</h4>
          <div class="flex flex-wrap gap-2">
            \\\${session.skills.map(skill => \\\`
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                \\\${skill}
              </span>
            \\\`).join('')}
          </div>
        </div>
        <p class="text-gray-700">\\\${session.notes}</p>
      </div>
    \\\`).join('');
  }

  // Weather logic
  const API_KEY = 'af770edc03304b4e8b6213518251604';

  async function getWeatherData() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        try {
          const response = await fetch(\\\`https://api.openweathermap.org/data/2.5/weather?lat=\\\${lat}&lon=\\\${lon}&units=metric&appid=\\\${API_KEY}\\\`);
          const data = await response.json();
          displayWeather(data);
        } catch (err) {
          document.getElementById('weatherDisplay').innerHTML = '<p>Error loading weather.</p>';
        }
      });
    }
  }

  async function updateWeatherByLocation(location) {
    try {
      const response = await fetch(\\\`https://api.openweathermap.org/data/2.5/weather?q=\\\${location}&units=metric&appid=\\\${API_KEY}\\\`);
      const data = await response.json();
      displayWeather(data);
    } catch (err) {
      document.getElementById('weatherDisplay').innerHTML = '<p>Location not found.</p>';
    }
  }

  function displayWeather(data) {
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = \\\`https://openweathermap.org/img/wn/\\\${iconCode}@2x.png\\\`;
    const windSpeed = data.wind.speed;
    const humidity = data.main.humidity;

    document.getElementById('weatherDisplay').innerHTML = \\\`
      <img src="\\\${iconUrl}" alt="\\\${description}" class="w-16 h-16">
      <div class="ml-4">
        <div class="text-2xl font-bold">\\\${temp}\xB0C</div>
        <div class="capitalize">\\\${description}</div>
        <div class="text-sm text-gray-600">Wind: \\\${windSpeed} m/s | Humidity: \\\${humidity}%</div>
      </div>
    \\\`;

    updateWorkoutRecommendations(data);
  }

  function updateWorkoutRecommendations(data) {
    const temp = data.main.temp;
    const condition = data.weather[0].main;
    const wind = data.wind.speed;

    let recommendation = '';

    if (temp > 30) {
      recommendation = 'Extreme heat alert! Train indoors or early/late outside.';
    } else if (temp > 25) {
      recommendation = 'Hot day. Hydrate and reduce intensity.';
    } else if (temp < 5) {
      recommendation = 'Cold weather. Dress warm and warm up well.';
    } else {
      recommendation = 'Perfect training weather!';
    }

    if (condition === 'Rain') recommendation += ' Consider indoor or technical work.';
    if (condition === 'Snow') recommendation += ' Snow detected - indoor recommended.';
    if (condition === 'Thunderstorm') recommendation += ' \u26A0\uFE0F Thunderstorm! Stay indoors.';
    if (wind > 10) recommendation += ' Windy day. Practice control and adaptability.';

    document.getElementById('weatherRecommendation').innerHTML = \\\`
      <h3 class="font-bold mb-2">Today's Training Recommendation:</h3>
      <p>\\\${recommendation}</p>
    \\\`;
  }

  // Event listeners
  updateLocationBtn?.addEventListener('click', () => {
    const location = locationInput?.value;
    if (location) updateWeatherByLocation(location);
  });

  locationInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const location = locationInput.value;
      if (location) updateWeatherByLocation(location);
    }
  });

  getWeatherData();
  setInterval(getWeatherData, 30 * 60 * 1000); // Refresh every 30 minutes
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-100"> <nav class="bg-white shadow-sm"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16"> <div class="flex items-center"> <h1 class="text-xl font-semibold">Dashboard</h1> </div> <div class="flex items-center"> <span class="mr-4" id="userEmail">Loading...</span> <button id="signOutButton" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
Sign Out
</button> </div> </div> </div> </nav> ${renderComponent($$result2, "Navigation", $$Navigation, {})} <main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-8 text-center text-textPrimary">Soccer Training Tracker</h1> <!-- Weather Container --> <div class="weather-container mb-8 bg-boxColor p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"> <h2 class="text-xl font-bold mb-4 text-textPrimary">Local Weather</h2> <div id="weatherDisplay" class="flex items-center"> <p class="text-textSecondary">Loading weather information...</p> </div> <div id="weatherRecommendation" class="mt-4 p-4 bg-accent text-white rounded"> <h3 class="font-bold mb-2">Today's Training Recommendation:</h3> <p>Workout recommendations will appear here based on weather conditions.</p> </div> <div class="mt-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="location">
Change Location
</label> <div class="flex"> <input type="text" id="location" placeholder="Enter city name" class="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"> <button id="updateLocationBtn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline">
Update
</button> </div> </div> </div> <div class="bg-boxColor p-6 rounded-lg shadow-md mb-8 transition-shadow duration-300 hover:shadow-lg"> <h2 class="text-xl font-bold mb-4 text-textPrimary">Training Summary</h2> <div class="text-3xl font-bold text-primary" id="totalMinutes">0 minutes</div> <p class="text-textSecondary">Total training time</p> </div> ${renderComponent($$result2, "AddSession", $$AddSession, {})} <div id="sessions"> <!-- Sessions will be populated by JavaScript --> </div> </main> </div> ` }));
}, "/home/project/src/pages/index.astro", void 0);

const $$file = "/home/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
