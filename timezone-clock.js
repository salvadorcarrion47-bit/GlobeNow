// ===================================
// BASE DE DATOS DE ZONAS HORARIAS
// ===================================

const TIMEZONES = {
  // América
  'America/New_York': { city: 'Nueva York', region: '🇺🇸 América', offset: -5 },
  'America/Chicago': { city: 'Chicago', region: '🇺🇸 América', offset: -6 },
  'America/Denver': { city: 'Denver', region: '🇺🇸 América', offset: -7 },
  'America/Los_Angeles': { city: 'Los Ángeles', region: '🇺🇸 América', offset: -8 },
  'America/Anchorage': { city: 'Anchorage', region: '🇺🇸 América', offset: -9 },
  'America/Toronto': { city: 'Toronto', region: '🇨🇦 Canadá', offset: -5 },
  'America/Mexico_City': { city: 'Ciudad de México', region: '🇲🇽 México', offset: -6 },
  'America/Sao_Paulo': { city: 'São Paulo', region: '🇧🇷 Brasil', offset: -3 },
  'America/Buenos_Aires': { city: 'Buenos Aires', region: '🇦🇷 Argentina', offset: -3 },
  'America/Caracas': { city: 'Caracas', region: '🇻🇪 Venezuela', offset: -4 },
  'America/Santo_Domingo': { city: 'Santo Domingo', region: '🇩🇴 República Dominicana', offset: -4 },
  
  // Europa
  'Europe/London': { city: 'Londres', region: '🇬🇧 Reino Unido', offset: 0 },
  'Europe/Paris': { city: 'París', region: '🇫🇷 Francia', offset: 1 },
  'Europe/Berlin': { city: 'Berlín', region: '🇩🇪 Alemania', offset: 1 },
  'Europe/Madrid': { city: 'Madrid', region: '🇪🇸 España', offset: 1 },
  'Europe/Rome': { city: 'Roma', region: '🇮🇹 Italia', offset: 1 },
  'Europe/Amsterdam': { city: 'Ámsterdam', region: '🇳🇱 Holanda', offset: 1 },
  'Europe/Brussels': { city: 'Bruselas', region: '🇧🇪 Bélgica', offset: 1 },
  'Europe/Vienna': { city: 'Viena', region: '🇦🇹 Austria', offset: 1 },
  'Europe/Prague': { city: 'Praga', region: '🇨🇿 República Checa', offset: 1 },
  'Europe/Warsaw': { city: 'Varsovia', region: '🇵🇱 Polonia', offset: 1 },
  'Europe/Moscow': { city: 'Moscú', region: '🇷🇺 Rusia', offset: 3 },
  'Europe/Istanbul': { city: 'Estambul', region: '🇹🇷 Turquía', offset: 3 },
  'Europe/Athens': { city: 'Atenas', region: '🇬🇷 Grecia', offset: 2 },
  
  // Asia
  'Asia/Dubai': { city: 'Dubái', region: '🇦🇪 EAU', offset: 4 },
  'Asia/Kolkata': { city: 'Nueva Delhi', region: '🇮🇳 India', offset: 5.5 },
  'Asia/Bangkok': { city: 'Bangkok', region: '🇹🇭 Tailandia', offset: 7 },
  'Asia/Singapore': { city: 'Singapur', region: '🇸🇬 Singapur', offset: 8 },
  'Asia/Hong_Kong': { city: 'Hong Kong', region: '🇭🇰 Hong Kong', offset: 8 },
  'Asia/Shanghai': { city: 'Shanghái', region: '🇨🇳 China', offset: 8 },
  'Asia/Tokyo': { city: 'Tokio', region: '🇯🇵 Japón', offset: 9 },
  'Asia/Seoul': { city: 'Seúl', region: '🇰🇷 Corea del Sur', offset: 9 },
  'Asia/Manila': { city: 'Manila', region: '🇵🇭 Filipinas', offset: 8 },
  'Asia/Jakarta': { city: 'Yakarta', region: '🇮🇩 Indonesia', offset: 7 },
  'Asia/Kathmandu': { city: 'Katmandú', region: '🇳🇵 Nepal', offset: 5.45 },
  'Asia/Karachi': { city: 'Karachi', region: '🇵🇰 Pakistán', offset: 5 },
  
  // Oceanía
  'Australia/Sydney': { city: 'Sídney', region: '🇦🇺 Australia', offset: 10 },
  'Australia/Melbourne': { city: 'Melbourne', region: '🇦🇺 Australia', offset: 10 },
  'Australia/Brisbane': { city: 'Brisbane', region: '🇦🇺 Australia', offset: 10 },
  'Australia/Perth': { city: 'Perth', region: '🇦🇺 Australia', offset: 8 },
  'Pacific/Auckland': { city: 'Auckland', region: '🇳🇿 Nueva Zelanda', offset: 12 },
  'Pacific/Fiji': { city: 'Suva', region: '🇫🇯 Fiji', offset: 12 },
  'Pacific/Honolulu': { city: 'Honolulu', region: '🇺🇸 Hawái', offset: -10 },
  
  // África
  'Africa/Cairo': { city: 'El Cairo', region: '🇪🇬 Egipto', offset: 2 },
  'Africa/Johannesburg': { city: 'Johannesburgo', region: '🇿🇦 Sudáfrica', offset: 2 },
  'Africa/Lagos': { city: 'Lagos', region: '🇳🇬 Nigeria', offset: 1 },
  'Africa/Nairobi': { city: 'Nairobi', region: '🇰🇪 Kenia', offset: 3 },
  'Africa/Casablanca': { city: 'Casablanca', region: '🇲🇦 Marruecos', offset: 0 }
};

// ===================================
// CLASE TIMEZONES CLOCK
// ===================================

class TimezoneClock {
  constructor() {
    this.currentLanguage = localStorage.getItem('globenow-language') || 'es';
    this.darkMode = localStorage.getItem('globenow-darkmode') === 'true';
    this.use24hFormat = localStorage.getItem('globenow-24hformat') !== 'false';
    this.selectedTimezones = JSON.parse(localStorage.getItem('globenow-timezones')) || [
      'America/Santo_Domingo',
      'Europe/London',
      'Asia/Tokyo',
      'Australia/Sydney'
    ];
    this.favoriteTimezones = JSON.parse(localStorage.getItem('globenow-favorites')) || [];
    this.init();
  }

  // ===================================
  // INICIALIZACIÓN
  // ===================================

  init() {
    this.setupDarkMode();
    this.setupEventListeners();
    this.populateTimezoneSelect();
    this.renderClocks();
    this.startClock();
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
    // Cambio de idioma
    window.addEventListener('languageChanged', (e) => {
      this.currentLanguage = e.detail.lang;
    });

    // Agregar zona horaria
    const addBtn = document.getElementById('add-timezone-btn');
    const select = document.getElementById('timezone-add');
    if (addBtn) {
      addBtn.addEventListener('click', () => this.addTimezone());
      select.addEventListener('change', (e) => {
        if (e.target.value) this.addTimezone();
      });
    }

    // Buscar zona horaria
    const search = document.getElementById('timezone-search');
    if (search) {
      search.addEventListener('input', (e) => this.filterTimezones(e.target.value));
    }

    // Restablecer
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.reset());
    }

    // Formato 24h
    const formatCheckbox = document.getElementById('24h-format');
    if (formatCheckbox) {
      formatCheckbox.checked = this.use24hFormat;
      formatCheckbox.addEventListener('change', (e) => {
        this.use24hFormat = e.target.checked;
        localStorage.setItem('globenow-24hformat', this.use24hFormat);
        this.renderClocks();
      });
    }
  }

  // ===================================
  // GESTIÓN DE ZONAS HORARIAS
  // ===================================

  populateTimezoneSelect() {
    const select = document.getElementById('timezone-add');
    if (!select) return;

    const grouped = {};
    Object.entries(TIMEZONES).forEach(([tz, data]) => {
      if (!grouped[data.region]) grouped[data.region] = [];
      grouped[data.region].push({ tz, ...data });
    });

    select.innerHTML = '<option value="" data-i18n="selectToAdd">Seleccionar para agregar...</option>';

    Object.keys(grouped).sort().forEach(region => {
      const group = document.createElement('optgroup');
      group.label = region;

      grouped[region].forEach(item => {
        const option = document.createElement('option');
        option.value = item.tz;
        option.textContent = `${item.city} (${item.tz})`;
        group.appendChild(option);
      });

      select.appendChild(group);
    });
  }

  addTimezone() {
    const select = document.getElementById('timezone-add');
    const tz = select.value;
    if (!tz || this.selectedTimezones.includes(tz)) return;

    this.selectedTimezones.push(tz);
    this.saveTimezones();
    this.renderClocks();
    select.value = '';
  }

  removeTimezone(tz) {
    this.selectedTimezones = this.selectedTimezones.filter(t => t !== tz);
    this.favoriteTimezones = this.favoriteTimezones.filter(t => t !== tz);
    this.saveTimezones();
    this.renderClocks();
  }

  toggleFavorite(tz) {
    const idx = this.favoriteTimezones.indexOf(tz);
    if (idx > -1) {
      this.favoriteTimezones.splice(idx, 1);
    } else {
      this.favoriteTimezones.push(tz);
    }
    this.saveFavorites();
    this.renderClocks();
  }

  saveTimezones() {
    localStorage.setItem('globenow-timezones', JSON.stringify(this.selectedTimezones));
  }

  saveFavorites() {
    localStorage.setItem('globenow-favorites', JSON.stringify(this.favoriteTimezones));
  }

  reset() {
    this.selectedTimezones = [
      'America/Santo_Domingo',
      'Europe/London',
      'Asia/Tokyo',
      'Australia/Sydney'
    ];
    this.favoriteTimezones = [];
    this.saveTimezones();
    this.saveFavorites();
    this.renderClocks();
  }

  filterTimezones(query) {
    if (!query) {
      this.populateTimezoneSelect();
      return;
    }

    const select = document.getElementById('timezone-add');
    const filtered = Object.entries(TIMEZONES)
      .filter(([tz, data]) =>
        tz.toLowerCase().includes(query.toLowerCase()) ||
        data.city.toLowerCase().includes(query.toLowerCase()) ||
        data.region.toLowerCase().includes(query.toLowerCase())
      )
      .reduce((acc, [tz, data]) => {
        if (!acc[data.region]) acc[data.region] = [];
        acc[data.region].push({ tz, ...data });
        return acc;
      }, {});

    select.innerHTML = '';
    Object.keys(filtered).sort().forEach(region => {
      const group = document.createElement('optgroup');
      group.label = region;

      filtered[region].forEach(item => {
        const option = document.createElement('option');
        option.value = item.tz;
        option.textContent = `${item.city} (${item.tz})`;
        group.appendChild(option);
      });

      select.appendChild(group);
    });
  }

  // ===================================
  // CÁLCULOS DE TIEMPO
  // ===================================

  getTimeInTimezone(tz) {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: !this.use24hFormat
    });

    const parts = formatter.formatToParts(new Date());
    const time = {};
    parts.forEach(part => {
      time[part.type] = part.value;
    });

    return time;
  }

  getTimeStatus(hour) {
    hour = parseInt(hour);
    if (hour >= 5 && hour < 12) return { status: 'day', label: '🌅 Día' };
    if (hour >= 12 && hour < 18) return { status: 'afternoon', label: '☀️ Tarde' };
    if (hour >= 18 && hour < 21) return { status: 'sunset', label: '🌅 Atardecer' };
    return { status: 'night', label: '🌙 Noche' };
  }

  getFormattedTime(time) {
    const hour = time.hour.padStart(2, '0');
    const minute = time.minute.padStart(2, '0');
    const second = time.second.padStart(2, '0');
    return `${hour}:${minute}:${second}`;
  }

  // ===================================
  // RENDERIZADO
  // ===================================

  renderClocks() {
    const grid = document.getElementById('clocks-grid');
    grid.innerHTML = '';

    if (this.selectedTimezones.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📭</div>
          <p data-i18n="noTimezones">No hay zonas horarias seleccionadas</p>
          <small style="opacity: 0.6;" data-i18n="selectToAdd">Selecciona una zona horaria para comenzar</small>
        </div>
      `;
      return;
    }

    // Ordenar: favoritos primero
    const sorted = this.selectedTimezones.sort((a, b) => {
      const aFav = this.favoriteTimezones.includes(a) ? 0 : 1;
      const bFav = this.favoriteTimezones.includes(b) ? 0 : 1;
      return aFav - bFav;
    });

    sorted.forEach(tz => {
      const data = TIMEZONES[tz];
      const isFavorite = this.favoriteTimezones.includes(tz);
      const card = this.createClockCard(tz, data, isFavorite);
      grid.appendChild(card);
    });
  }

  createClockCard(tz, data, isFavorite) {
    const card = document.createElement('div');
    card.className = `clock-card ${isFavorite ? 'favorite' : ''}`;
    card.id = `clock-${tz.replace('/', '-')}`;

    const time = this.getTimeInTimezone(tz);
    const status = this.getTimeStatus(time.hour);
    const formattedTime = this.getFormattedTime(time);

    card.innerHTML = `
      <div class="clock-header">
        <div class="clock-city">
          <h3 class="clock-city-name">${data.city}</h3>
          <p class="clock-timezone-code">${tz}</p>
        </div>
        <div class="clock-actions">
          <button class="clock-btn favorite-btn" title="Agregar a favoritos">${isFavorite ? '⭐' : '☆'}</button>
          <button class="clock-btn remove-btn" title="Eliminar">✕</button>
        </div>
      </div>

      <div class="mini-clock">
        <div class="hand hand-hour" id="hand-hour-${tz.replace('/', '-')}"></div>
        <div class="hand hand-minute" id="hand-minute-${tz.replace('/', '-')}"></div>
        <div class="hand hand-second" id="hand-second-${tz.replace('/', '-')}"></div>
      </div>

      <div class="clock-display" id="display-${tz.replace('/', '-')}">${formattedTime}</div>

      <div class="clock-info">
        <div class="clock-info-item">
          <span class="clock-info-label" data-i18n="date">Fecha:</span>
          <span class="clock-info-value">${time.month}/${time.day}/${time.year}</span>
        </div>
        <div class="clock-info-item">
          <span class="clock-info-label" data-i18n="status">Estado:</span>
          <span class="status-badge status-${status.status}">${status.label}</span>
        </div>
      </div>
    `;

    // Event listeners
    const favoriteBtn = card.querySelector('.favorite-btn');
    const removeBtn = card.querySelector('.remove-btn');

    favoriteBtn.addEventListener('click', () => {
      this.toggleFavorite(tz);
    });

    removeBtn.addEventListener('click', () => {
      this.removeTimezone(tz);
    });

    return card;
  }

  updateClocks() {
    this.selectedTimezones.forEach(tz => {
      const time = this.getTimeInTimezone(tz);
      const formattedTime = this.getFormattedTime(time);
      const displayId = `display-${tz.replace('/', '-')}`;
      const display = document.getElementById(displayId);

      if (display) {
        display.textContent = formattedTime;
      }

      // Actualizar manecillas del reloj analógico
      this.updateAnalogClock(tz, time);
    });
  }

  updateAnalogClock(tz, time) {
    const tzKey = tz.replace('/', '-');
    const hour = parseInt(time.hour);
    const minute = parseInt(time.minute);
    const second = parseInt(time.second);

    // Calcular ángulos
    const secondDegrees = (second / 60) * 360;
    const minuteDegrees = (minute / 60) * 360 + (second / 60) * 6;
    const hourDegrees = ((hour % 12) / 12) * 360 + (minute / 60) * 30;

    // Aplicar rotaciones
    const hourHand = document.getElementById(`hand-hour-${tzKey}`);
    const minuteHand = document.getElementById(`hand-minute-${tzKey}`);
    const secondHand = document.getElementById(`hand-second-${tzKey}`);

    if (hourHand) hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    if (minuteHand) minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    if (secondHand) secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  }

  startClock() {
    this.updateClocks();
    setInterval(() => this.updateClocks(), 1000);
  }
}

// ===================================
// INICIALIZACIÓN
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  window.timezoneClock = new TimezoneClock();
});