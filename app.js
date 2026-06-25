// ===================================
// APLICACIÓN PRINCIPAL GLOBENOW
// ===================================

class GlobeNow {
  constructor() {
    this.currentLanguage = localStorage.getItem('globenow-language') || 'es';
    this.darkMode = localStorage.getItem('globenow-darkmode') === 'true';
    this.init();
  }

  // ===================================
  // INICIALIZACIÓN
  // ===================================

  init() {
    this.setupDarkMode();
    this.setupEventListeners();
    this.loadAllData();
  }

  // ===================================
  // DARK MODE
  // ===================================

  setupDarkMode() {
    const isDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = this.darkMode || isDarkSystem;

    if (shouldBeDark) {
      document.body.classList.add('dark-mode');
      this.darkMode = true;
    }

    const darkModeBtn = document.getElementById('dark-mode-toggle');
    if (darkModeBtn) {
      darkModeBtn.addEventListener('click', () => this.toggleDarkMode());
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('globenow-darkmode', this.darkMode);
  }

  // ===================================
  // EVENT LISTENERS
  // ===================================

  setupEventListeners() {
    // Escuchar cambios de idioma
    window.addEventListener('languageChanged', (e) => {
      this.currentLanguage = e.detail.lang;
      this.loadAllData();
    });

    // Botón de inicio
    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) {
      heroBtn.addEventListener('click', () => {
        document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  // ===================================
  // CARGA DE DATOS
  // ===================================

  loadAllData() {
    this.loadDivisas();
    this.loadCrypto();
    this.loadClima();
    this.loadParking();
  }

  // ===================================
  // 1. DIVISAS
  // ===================================

  loadDivisas() {
    const container = document.getElementById('divisas-content');
    container.innerHTML = '<div class="loading" data-i18n="loading">Cargando...</div>';
    
    // API: Open Exchange Rates (simulado)
    const divisasData = [
      { code: 'USD', name: this.translate('usd'), value: 1.0, change: '+0.25%' },
      { code: 'EUR', name: this.translate('eur'), value: 0.92, change: '-0.15%' },
      { code: 'GBP', name: this.translate('gbp'), value: 0.79, change: '+0.35%' },
      { code: 'JPY', name: this.translate('jpy'), value: 149.50, change: '+0.50%' }
    ];

    setTimeout(() => {
      let html = '';
      divisasData.forEach(divisa => {
        const changeClass = divisa.change.startsWith('+') ? 'positive' : 'negative';
        html += `
          <div class="data-item">
            <span class="data-item-label">${divisa.name} (${divisa.code})</span>
            <span>
              <span class="data-item-value">${divisa.value}</span>
              <span class="data-item-change ${changeClass}">${divisa.change}</span>
            </span>
          </div>
        `;
      });
      container.innerHTML = html;
    }, 500);
  }

  // ===================================
  // 2. CRIPTOMONEDAS
  // ===================================

  loadCrypto() {
    const container = document.getElementById('crypto-content');
    container.innerHTML = '<div class="loading" data-i18n="loading">Cargando...</div>';
    
    // API: CoinGecko (simulado)
    const cryptoData = [
      { name: 'Bitcoin', symbol: 'BTC', price: '$42,350', change: '+2.35%', marketCap: '$835B' },
      { name: 'Ethereum', symbol: 'ETH', price: '$2,285', change: '-1.20%', marketCap: '$274B' },
      { name: 'Cardano', symbol: 'ADA', price: '$0.98', change: '+4.15%', marketCap: '$35B' },
      { name: 'Solana', symbol: 'SOL', price: '$142.50', change: '+3.45%', marketCap: '$59B' }
    ];

    setTimeout(() => {
      let html = '';
      cryptoData.forEach(crypto => {
        const changeClass = crypto.change.startsWith('+') ? 'positive' : 'negative';
        html += `
          <div class="data-item">
            <div>
              <div class="data-item-label">${crypto.name} (${crypto.symbol})</div>
              <small style="color: var(--text-color); opacity: 0.7;">${this.translate('marketCap')}: ${crypto.marketCap}</small>
            </div>
            <span>
              <span class="data-item-value">${crypto.price}</span>
              <span class="data-item-change ${changeClass}">${crypto.change}</span>
            </span>
          </div>
        `;
      });
      container.innerHTML = html;
    }, 600);
  }

  // ===================================
  // 3. CLIMA
  // ===================================

  loadClima() {
    const container = document.getElementById('clima-content');
    container.innerHTML = '<div class="loading" data-i18n="loading">Cargando...</div>';
    
    // API: OpenWeatherMap (simulado)
    const climaData = [
      { city: 'Santo Domingo', temp: '28°C', condition: '☀️ Soleado', humidity: '75%', wind: '15 km/h' },
      { city: 'Nueva York', temp: '12°C', condition: '⛅ Parcialmente Nublado', humidity: '60%', wind: '20 km/h' },
      { city: 'París', temp: '8°C', condition: '🌧️ Lluvioso', humidity: '85%', wind: '25 km/h' },
      { city: 'Tokio', temp: '22°C', condition: '⛅ Parcialmente Nublado', humidity: '55%', wind: '10 km/h' }
    ];

    setTimeout(() => {
      let html = '';
      climaData.forEach(clima => {
        html += `
          <div class="data-item">
            <div>
              <div class="data-item-label">${clima.city}</div>
              <small style="color: var(--text-color); opacity: 0.7;">${clima.condition}</small>
            </div>
            <div style="text-align: right;">
              <div class="data-item-value">${clima.temp}</div>
              <small style="color: var(--text-color); opacity: 0.7;">${this.translate('humidity')}: ${clima.humidity}</small>
            </div>
          </div>
        `;
      });
      container.innerHTML = html;
    }, 700);
  }

  // ===================================
  // 4. PARQUEOS GRATUITOS
  // ===================================

  loadParking() {
    const container = document.getElementById('parking-content');
    container.innerHTML = '<div class="loading" data-i18n="loading">Cargando...</div>';
    
    // Datos simulados de parqueos
    const parkingData = [
      { name: 'Parqueo Centro', available: 45, total: 120, address: 'Av. Independencia' },
      { name: 'Parqueo Colón', available: 12, total: 80, address: 'Calle Colón' },
      { name: 'Parqueo Gazcue', available: 67, total: 150, address: 'Av. Gazcue' },
      { name: 'Parqueo Naco', available: 23, total: 100, address: 'Centro Naco' }
    ];

    setTimeout(() => {
      let html = '';
      parkingData.forEach(parking => {
        const percentageAvailable = Math.round((parking.available / parking.total) * 100);
        const statusColor = percentageAvailable > 30 ? '#10b981' : '#ef4444';
        html += `
          <div class="data-item">
            <div>
              <div class="data-item-label">${parking.name}</div>
              <small style="color: var(--text-color); opacity: 0.7;">${parking.address}</small>
            </div>
            <div style="text-align: right;">
              <div class="data-item-value" style="color: ${statusColor};">${parking.available}/${parking.total}</div>
              <small style="color: var(--text-color); opacity: 0.7;">${percentageAvailable}% ${this.translate('available')}</small>
            </div>
          </div>
        `;
      });
      container.innerHTML = html;
    }, 800);
  }

  // ===================================
  // UTILIDADES
  // ===================================

  translate(key) {
    return window.i18n.translate(key, this.currentLanguage);
  }
}

// ===================================
// INICIALIZACIÓN DE LA APP
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  window.globenow = new GlobeNow();
});