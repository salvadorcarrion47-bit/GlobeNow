// ===================================
// SISTEMA DE TRADUCCIÓN I18N
// ===================================

const translations = {
  es: {
    appName: "GlobeNow",
    slogan: "Información global, al instante",
    start: "Empezar ahora",
    selectLanguage: "Idioma",
    divisas: "Divisas",
    crypto: "Criptomonedas",
    clima: "Clima",
    parking: "Parqueos Gratuitos",
    loading: "Cargando...",
    footerText: "© 2024 GlobeNow. Todos los derechos reservados.",
    
    // Labels para divisas
    currency: "Divisa",
    value: "Valor",
    change: "Cambio",
    usd: "Dólar Estadounidense",
    eur: "Euro",
    gbp: "Libra Esterlina",
    jpy: "Yen Japonés",
    
    // Labels para crypto
    cryptocurrency: "Criptomoneda",
    price: "Precio",
    marketCap: "Capitalización de Mercado",
    volume24h: "Volumen 24h",
    
    // Labels para clima
    temperature: "Temperatura",
    condition: "Condición",
    humidity: "Humedad",
    windSpeed: "Velocidad del Viento",
    location: "Ubicación",
    
    // Labels para parqueos
    parkingLot: "Parqueo",
    available: "Disponibles",
    total: "Total",
    address: "Dirección"
  },
  en: {
    appName: "GlobeNow",
    slogan: "Global information, instantly",
    start: "Start now",
    selectLanguage: "Language",
    divisas: "Currencies",
    crypto: "Cryptocurrencies",
    clima: "Weather",
    parking: "Free Parking",
    loading: "Loading...",
    footerText: "© 2024 GlobeNow. All rights reserved.",
    
    // Labels for currencies
    currency: "Currency",
    value: "Value",
    change: "Change",
    usd: "US Dollar",
    eur: "Euro",
    gbp: "British Pound",
    jpy: "Japanese Yen",
    
    // Labels for crypto
    cryptocurrency: "Cryptocurrency",
    price: "Price",
    marketCap: "Market Cap",
    volume24h: "24h Volume",
    
    // Labels for weather
    temperature: "Temperature",
    condition: "Condition",
    humidity: "Humidity",
    windSpeed: "Wind Speed",
    location: "Location",
    
    // Labels for parking
    parkingLot: "Parking Lot",
    available: "Available",
    total: "Total",
    address: "Address"
  },
  fr: {
    appName: "GlobeNow",
    slogan: "Information mondiale, instantanément",
    start: "Commencer",
    selectLanguage: "Langue",
    divisas: "Devises",
    crypto: "Cryptomonnaies",
    clima: "Météo",
    parking: "Parkings gratuits",
    loading: "Chargement...",
    footerText: "© 2024 GlobeNow. Tous les droits réservés.",
    
    // Labels for devises
    currency: "Devise",
    value: "Valeur",
    change: "Changement",
    usd: "Dollar américain",
    eur: "Euro",
    gbp: "Livre sterling",
    jpy: "Yen japonais",
    
    // Labels for crypto
    cryptocurrency: "Cryptomonnaie",
    price: "Prix",
    marketCap: "Capitalisation boursière",
    volume24h: "Volume 24h",
    
    // Labels for weather
    temperature: "Température",
    condition: "État",
    humidity: "Humidité",
    windSpeed: "Vitesse du vent",
    location: "Localisation",
    
    // Labels for parking
    parkingLot: "Parking",
    available: "Disponibles",
    total: "Total",
    address: "Adresse"
  }
};

// ===================================
// FUNCIÓN PRINCIPAL DE TRADUCCIÓN
// ===================================

function updateLanguage(lang) {
  // Guardar idioma en localStorage
  localStorage.setItem('globenow-language', lang);
  
  // Actualizar atributo lang en HTML
  document.documentElement.lang = lang;
  
  // Actualizar selector visual
  document.getElementById('language').value = lang;
  
  // Traducir elementos estáticos
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Disparar evento personalizado para que app.js actualice contenido dinámico
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// ===================================
// DETECCIÓN AUTOMÁTICA DEL IDIOMA
// ===================================

function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Si el idioma del navegador está soportado, usarlo
  if (translations[langCode]) {
    return langCode;
  }
  
  // Por defecto, retornar español
  return 'es';
}

// ===================================
// INICIALIZACIÓN
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  // Obtener idioma guardado, o detectar automáticamente
  const savedLanguage = localStorage.getItem('globenow-language');
  const initialLanguage = savedLanguage || detectBrowserLanguage();
  
  // Establecer idioma inicial
  updateLanguage(initialLanguage);
  
  // Event listener para cambios de idioma
  const languageSelect = document.getElementById('language');
  if (languageSelect) {
    languageSelect.addEventListener('change', (e) => {
      updateLanguage(e.target.value);
    });
  }
});

// Exportar función para usar en otros scripts
window.i18n = {
  updateLanguage,
  getCurrentLanguage: () => localStorage.getItem('globenow-language') || 'es',
  translate: (key, lang) => {
    lang = lang || window.i18n.getCurrentLanguage();
    return translations[lang]?.[key] || key;
  }
};