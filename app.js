
// --- CRIPTOMONEDAS EN TIEMPO REAL (WebSocket) ---

let btcWS = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
let ethWS = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade");

btcWS.onmessage = (event) => {
  let data = JSON.parse(event.data);
  let price = parseFloat(data.p).toFixed(2);
  updateCryptoUI("BTC", price);
};

ethWS.onmessage = (event) => {
  let data = JSON.parse(event.data);
  let price = parseFloat(data.p).toFixed(2);
  updateCryptoUI("ETH", price);
};

function updateCryptoUI(coin, price) {
  document.getElementById("crypto-data").innerHTML =
    `Bitcoin (BTC): ${coin === "BTC" ? price : ""} USD<br>
     Ethereum (ETH): ${coin === "ETH" ? price : ""} USD`;
}


// --- DIVISAS (actualización cada 60s) ---

async function loadCurrencies() {
  const res = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_demo");
  const data = await res.json();

  const usd = data.data.EUR.value; // EUR por USD
  const dop = data.data.DOP.value;
  const cad = data.data.CAD.value;

  document.getElementById("divisas-data").innerHTML =
    `1 USD = ${usd.toFixed(3)} EUR<br>
     1 USD = ${dop.toFixed(3)} DOP<br>
     1 USD = ${cad.toFixed(3)} CAD`;
}

loadCurrencies();
setInterval(loadCurrencies, 60000); // cada 1 minuto

// --- CLIMA (actualización cada 60s) ---

async function loadWeather() {
  const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true");
  const data = await res.json();

  document.getElementById("clima-data").innerHTML =
    `Temperatura: ${data.current_weather.temperature}°C<br>
     Viento: ${data.current_weather.windspeed} km/h`;
}

loadWeather();
setInterval(loadWeather, 60000);

// --- PARQUEOS (actualización cada 5 min) ---

async function loadParking() {
  const query = `
    [out:json];
    node["amenity"="parking"]["fee"="no"](around:3000,48.8566,2.3522);
    out;
  `;

  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: query
  });

  const data = await res.json();

  document.getElementById("parking-data").innerHTML =
    `Parqueos gratuitos encontrados: ${data.elements.length}`;
}

loadParking();
setInterval(loadParking, 300000); // 5 minutos
https://api.currencyapi.com/v3/latest?apikey=cur_live_demo
