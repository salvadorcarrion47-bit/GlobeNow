// ===================================
// GESTOR DE PARQUEOS
// ===================================

class ParkingManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('globenow-language') || 'es';
    this.darkMode = localStorage.getItem('globenow-darkmode') === 'true';
    this.parkings = JSON.parse(localStorage.getItem('globenow-parkings')) || this.getDefaultParkings();
    this.editingId = null;
    this.init();
  }

  // ===================================
  // INICIALIZACIÓN
  // ===================================

  init() {
    this.setupDarkMode();
    this.setupEventListeners();
    this.renderParkings();
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

    // Botón agregar parqueo
    const addBtn = document.getElementById('add-parking-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => this.openModal());
    }

    // Formulario
    const form = document.getElementById('parking-form');
    if (form) {
      form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    // Botones del modal
    const closeBtn = document.getElementById('close-modal');
    const cancelBtn = document.getElementById('cancel-btn');
    const modal = document.getElementById('parking-modal');

    if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());
    if (cancelBtn) cancelBtn.addEventListener('click', () => this.closeModal());
    if (modal) modal.addEventListener('click', (e) => {
      if (e.target === modal) this.closeModal();
    });

    // Validación en tiempo real
    const totalInput = document.getElementById('parking-total');
    const availableInput = document.getElementById('parking-available');

    if (totalInput && availableInput) {
      [totalInput, availableInput].forEach(input => {
        input.addEventListener('change', () => this.validateAvailability());
      });
    }
  }

  // ===================================
  // MODAL
  // ===================================

  openModal(parkingId = null) {
    const modal = document.getElementById('parking-modal');
    const form = document.getElementById('parking-form');
    const title = document.getElementById('modal-title');

    // Limpiar formulario
    form.reset();
    this.clearErrors();
    this.editingId = null;

    if (parkingId) {
      // Editar
      const parking = this.parkings.find(p => p.id === parkingId);
      if (parking) {
        title.setAttribute('data-i18n', 'editParking');
        title.textContent = this.translate('editParking');
        this.populateForm(parking);
        this.editingId = parkingId;
      }
    } else {
      // Nuevo
      title.setAttribute('data-i18n', 'newParking');
      title.textContent = this.translate('newParking');
    }

    modal.classList.add('active');
  }

  closeModal() {
    const modal = document.getElementById('parking-modal');
    modal.classList.remove('active');
    this.editingId = null;
  }

  populateForm(parking) {
    document.getElementById('parking-name').value = parking.name;
    document.getElementById('parking-address').value = parking.address;
    document.getElementById('parking-total').value = parking.total;
    document.getElementById('parking-available').value = parking.available;
    document.getElementById('parking-open-time').value = parking.openTime || '';
    document.getElementById('parking-close-time').value = parking.closeTime || '';
    document.getElementById('parking-type').value = parking.type || 'lot';
    document.getElementById('parking-description').value = parking.description || '';
    document.getElementById('parking-phone').value = parking.phone || '';
  }

  // ===================================
  // VALIDACIÓN
  // ===================================

  validateAvailability() {
    const total = parseInt(document.getElementById('parking-total').value) || 0;
    const available = parseInt(document.getElementById('parking-available').value) || 0;
    const availableError = document.getElementById('available-error');

    if (available > total) {
      availableError.textContent = this.translate('availableGreaterThanTotal');
      availableError.classList.add('show');
      return false;
    } else {
      availableError.classList.remove('show');
      return true;
    }
  }

  validateForm() {
    this.clearErrors();
    let isValid = true;

    const name = document.getElementById('parking-name').value.trim();
    const address = document.getElementById('parking-address').value.trim();
    const total = parseInt(document.getElementById('parking-total').value);
    const available = parseInt(document.getElementById('parking-available').value);

    // Validar nombre
    if (!name) {
      document.getElementById('name-error').textContent = this.translate('nameRequired');
      document.getElementById('name-error').classList.add('show');
      isValid = false;
    }

    // Validar dirección
    if (!address) {
      document.getElementById('address-error').textContent = this.translate('addressRequired');
      document.getElementById('address-error').classList.add('show');
      isValid = false;
    }

    // Validar total
    if (!total || total < 1) {
      document.getElementById('total-error').textContent = this.translate('totalRequired');
      document.getElementById('total-error').classList.add('show');
      isValid = false;
    }

    // Validar disponibilidad
    if (available < 0 || !this.validateAvailability()) {
      isValid = false;
    }

    return isValid;
  }

  clearErrors() {
    document.querySelectorAll('.form-error').forEach(error => {
      error.classList.remove('show');
      error.textContent = '';
    });
  }

  // ===================================
  // CRUD
  // ===================================

  handleSubmit(e) {
    e.preventDefault();

    if (!this.validateForm()) {
      return;
    }

    const parking = {
      id: this.editingId || Date.now(),
      name: document.getElementById('parking-name').value,
      address: document.getElementById('parking-address').value,
      total: parseInt(document.getElementById('parking-total').value),
      available: parseInt(document.getElementById('parking-available').value),
      openTime: document.getElementById('parking-open-time').value,
      closeTime: document.getElementById('parking-close-time').value,
      type: document.getElementById('parking-type').value,
      description: document.getElementById('parking-description').value,
      phone: document.getElementById('parking-phone').value,
      createdAt: this.editingId ? 
        this.parkings.find(p => p.id === this.editingId).createdAt : 
        new Date().toISOString()
    };

    if (this.editingId) {
      // Actualizar
      const index = this.parkings.findIndex(p => p.id === this.editingId);
      if (index > -1) {
        this.parkings[index] = parking;
      }
    } else {
      // Crear
      this.parkings.push(parking);
    }

    this.saveParkings();
    this.renderParkings();
    this.closeModal();
  }

  deleteParking(id) {
    if (confirm(this.translate('confirmDelete'))) {
      this.parkings = this.parkings.filter(p => p.id !== id);
      this.saveParkings();
      this.renderParkings();
    }
  }

  saveParkings() {
    localStorage.setItem('globenow-parkings', JSON.stringify(this.parkings));
  }

  // ===================================
  // RENDERIZADO
  // ===================================

  renderParkings() {
    const grid = document.getElementById('parkings-grid');
    grid.innerHTML = '';

    if (this.parkings.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🅿️</div>
          <p data-i18n="noParkings">No hay parqueos registrados</p>
          <small style="opacity: 0.6;" data-i18n="addFirstParking">Crea tu primer parqueo para comenzar</small>
        </div>
      `;
      return;
    }

    // Ordenar por fecha de creación (más recientes primero)
    const sorted = [...this.parkings].sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    );

    sorted.forEach(parking => {
      const card = this.createParkingCard(parking);
      grid.appendChild(card);
    });
  }

  createParkingCard(parking) {
    const card = document.createElement('div');
    card.className = 'parking-card';
    card.id = `parking-${parking.id}`;

    const percentageAvailable = Math.round((parking.available / parking.total) * 100);
    const status = this.getAvailabilityStatus(percentageAvailable);
    const typeLabel = this.getParkingTypeLabel(parking.type);

    const openTime = parking.openTime ? this.formatTime(parking.openTime) : this.translate('notSpecified');
    const closeTime = parking.closeTime ? this.formatTime(parking.closeTime) : this.translate('notSpecified');

    card.innerHTML = `
      <div class="parking-card-header">
        <div class="parking-card-title">
          <h3 class="parking-name">${this.escapeHtml(parking.name)}</h3>
          <span class="parking-type-badge">${typeLabel}</span>
        </div>
        <div class="parking-actions">
          <button class="parking-btn edit-btn" title="Editar">✏️</button>
          <button class="parking-btn delete-btn" title="Eliminar">🗑️</button>
        </div>
      </div>

      <div class="parking-info">
        <div class="parking-info-row">
          <span class="parking-info-label" data-i18n="address">Dirección:</span>
          <span class="parking-info-value">${this.escapeHtml(parking.address)}</span>
        </div>

        <div class="parking-info-row">
          <span class="parking-info-label" data-i18n="spaces">Espacios:</span>
          <span class="parking-info-value">${parking.available}/${parking.total}</span>
        </div>
      </div>

      <div class="availability-bar">
        <div class="availability-fill" style="width: ${percentageAvailable}%"></div>
      </div>
      <div class="availability-text">${percentageAvailable}% ${this.translate('available')}</div>
      <span class="availability-status status-${status.class}">${status.label}</span>

      ${parking.description ? `
        <p class="parking-description">${this.escapeHtml(parking.description)}</p>
      ` : ''}

      <div class="parking-hours">
        <div class="hour-item">
          <span class="hour-label" data-i18n="openingTime">Apertura:</span>
          <span class="hour-value">${openTime}</span>
        </div>
        <div class="hour-item">
          <span class="hour-label" data-i18n="closingTime">Cierre:</span>
          <span class="hour-value">${closeTime}</span>
        </div>
      </div>

      ${parking.phone ? `
        <div class="parking-contact">
          <strong>📞</strong> ${this.escapeHtml(parking.phone)}
        </div>
      ` : ''}

      <div class="parking-card-actions">
        <button class="btn btn-edit btn-small edit-btn-full" data-i18n="edit">Editar</button>
        <button class="btn btn-delete btn-small delete-btn-full" data-i18n="delete">Eliminar</button>
      </div>
    `;

    // Event listeners
    const editBtns = card.querySelectorAll('.edit-btn, .edit-btn-full');
    const deleteBtns = card.querySelectorAll('.delete-btn, .delete-btn-full');

    editBtns.forEach(btn => {
      btn.addEventListener('click', () => this.openModal(parking.id));
    });

    deleteBtns.forEach(btn => {
      btn.addEventListener('click', () => this.deleteParking(parking.id));
    });

    return card;
  }

  // ===================================
  // UTILIDADES
  // ===================================

  getAvailabilityStatus(percentage) {
    if (percentage > 30) {
      return { class: 'available', label: this.translate('available') };
    } else if (percentage > 0) {
      return { class: 'limited', label: this.translate('limited') };
    } else {
      return { class: 'full', label: this.translate('full') };
    }
  }

  getParkingTypeLabel(type) {
    const types = {
      'street': this.translate('streetParking'),
      'lot': this.translate('parkingLot'),
      'garage': this.translate('garage'),
      'valet': this.translate('valet')
    };
    return types[type] || type;
  }

  formatTime(time) {
    if (!time) return this.translate('notSpecified');
    const [hours, minutes] = time.split(':');
    return `${hours}:${minutes}`;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  translate(key) {
    return window.i18n.translate(key, this.currentLanguage);
  }

  getDefaultParkings() {
    return [
      {
        id: 1,
        name: 'Parqueo Centro',
        address: 'Av. Independencia 123',
        total: 120,
        available: 45,
        openTime: '06:00',
        closeTime: '22:00',
        type: 'lot',
        description: 'Parqueo moderno en el centro de la ciudad con vigilancia 24/7',
        phone: '+1-809-123-4567',
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        name: 'Parqueo Colón',
        address: 'Calle Colón 456',
        total: 80,
        available: 12,
        openTime: '07:00',
        closeTime: '20:00',
        type: 'street',
        description: 'Parqueos en la calle con buena ubicación',
        phone: '+1-809-234-5678',
        createdAt: new Date().toISOString()
      },
      {
        id: 3,
        name: 'Parqueo Gazcue',
        address: 'Av. Gazcue 789',
        total: 150,
        available: 67,
        openTime: '05:00',
        closeTime: '23:00',
        type: 'garage',
        description: 'Garaje de más de 6 pisos con excelentes facilidades',
        phone: '+1-809-345-6789',
        createdAt: new Date().toISOString()
      }
    ];
  }
}

// ===================================
// INICIALIZACIÓN
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  window.parkingManager = new ParkingManager();
});