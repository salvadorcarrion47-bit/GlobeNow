# 🌍 GlobeNow - Información Global, al Instante

**GlobeNow** es una aplicación web moderna que centraliza información global incluyendo divisas, criptomonedas, clima, parqueos gratuitos, **reloj de zonas horarias en tiempo real** y **gestor de parqueos**. Caracterizada por su soporte multiidioma, modo oscuro automático y diseño responsivo.

## ✨ Características Principales

### 🌐 Multiidioma
- **Soporte para 3 idiomas**: Español (ES), Inglés (EN), Francés (FR)
- **Detección automática** del idioma del navegador
- **Persistencia** de preferencias en localStorage
- **Cambio instantáneo** de idioma sin recargar la página

### 🎨 Diseño
- **Responsive**: Funciona perfectamente en móviles, tablets y desktops
- **Modo Oscuro**: Detección automática según preferencias del sistema
- **Animaciones fluidas**: Transiciones suaves y agradables
- **Diseño moderno**: Componentes visuales limpios y profesionales

### 📱 Tres Modos de Visualización

#### 1. **Inicio (index.html)** - Panel Principal
Información global con 4 secciones:

1. **💱 Divisas**
   - Tipos de cambio en tiempo real
   - Variación de precios
   - Principales monedas mundiales

2. **₿ Criptomonedas**
   - Precios actuales
   - Capitalización de mercado
   - Volumen 24h
   - Cambios porcentuales

3. **🌤️ Clima**
   - Temperatura por ciudad
   - Condiciones climáticas
   - Humedad relativa
   - Velocidad del viento

4. **🅿️ Parqueos Gratuitos**
   - Disponibilidad de espacios
   - Ubicación de parqueos
   - Porcentaje de ocupación

#### 2. **Reloj de Zonas Horarias (timezone-clock.html)** ⏰ 
Reloj digital con soporte para múltiples zonas horarias:

- ⏰ **Reloj Digital**: Tiempo en formato 12/24h
- 🕐 **Reloj Analógico Mini**: Visualización análoga con manecillas
- 📍 **50+ Zonas Horarias**: Cobertura mundial
- ⭐ **Favoritos**: Marca tus zonas favoritas
- 🔍 **Búsqueda**: Encuentra zonas rápidamente
- 📅 **Información Complementaria**: Fecha y estado del día
- 💾 **Persistencia**: Guarda tus preferencias

#### 3. **Gestor de Parqueos (parking-manager.html)** 🅿️ NUEVO
Crea y gestiona tus parqueos gratuitos:

- **➕ Crear Parqueos**: Formulario completo con validación
- **✏️ Editar Parqueos**: Modifica información fácilmente
- **🗑️ Eliminar Parqueos**: Remueve parqueos innecesarios
- **📊 Monitoreo**: Visualiza disponibilidad en tiempo real
- **🔔 Información Completa**: Nombre, dirección, horarios, contacto
- **💾 Persistencia**: Todos los datos se guardan en localStorage
- **🎯 Tipos**: Calle, Lote, Garaje, Valet
- **📱 Responsive**: Funciona en todos los dispositivos

## 📋 Estructura del Proyecto

```
GlobeNow/
├── index.html                    # Página principal (divisas, crypto, clima, parqueos)
├── timezone-clock.html           # Reloj de zonas horarias
├── parking-manager.html          # Gestor de parqueos
├── style.css                     # Estilos globales
├── timezone-clock.css            # Estilos del reloj
├── parking-manager.css           # Estilos del gestor de parqueos
├── i18n.js                       # Sistema de traducción
├── app.js                        # Lógica principal
├── timezone-clock.js             # Lógica del reloj de zonas
├── parking-manager.js            # Lógica del gestor de parqueos
├── i18n-extended.json            # Traducciones adicionales
├── i18n-parking.json             # Traducciones de parqueos
├── README.md                     # Este archivo
└── assets/                       # (Opcional) Imágenes y recursos
```

## 🚀 Instalación y Uso

### Opción 1: Clonar el repositorio

```bash
git clone https://github.com/salvadorcarrion47-bit/GlobeNow.git
cd GlobeNow
```

### Opción 2: Usar directamente

Abre los archivos HTML directamente en tu navegador. No requiere servidor ni instalación adicional.

```bash
# macOS
open index.html
open timezone-clock.html
open parking-manager.html

# Windows
start index.html
start timezone-clock.html
start parking-manager.html

# Linux
xdg-open index.html
xdg-open timezone-clock.html
xdg-open parking-manager.html
```

## 🎯 Guía del Reloj de Zonas Horarias

### Características del Reloj

#### Agregar Zonas Horarias
1. Usa el **selector de zonas** para elegir
2. O **busca por nombre** de ciudad o región
3. Haz clic en **"Agregar"** para incluir

#### Zonas Soportadas
El reloj incluye 50+ zonas horarias de:
- 🌎 **América**: Nueva York, Los Ángeles, Toronto, México, Brasil, Argentina, Santo Domingo, etc.
- 🌍 **Europa**: Londres, París, Berlín, Madrid, Roma, Moscú, Estambul, Atenas, etc.
- 🌏 **Asia**: Tokio, Shanghái, Singapur, Hong Kong, Nueva Delhi, Dubái, Bangkok, Manila, etc.
- 🏖️ **Oceanía**: Sídney, Auckland, Melbourne, Brisbane, etc.
- 🌅 **África**: Cairo, Johannesburgo, Lagos, Nairobi, Casablanca, etc.

#### Funcionalidades
- **⭐ Favoritos**: Marca zonas para que aparezcan primero
- **🗑️ Eliminar**: Remueve zonas que no necesites
- **🔄 Restablecer**: Vuelve a las zonas por defecto
- **📱 Formato 24h**: Cambia entre formato 12/24 horas
- **🌙 Modo Oscuro**: Automático según preferencias del sistema

## 🎯 Guía del Gestor de Parqueos

### Crear un Nuevo Parqueo

1. Haz clic en **"+ Agregar Parqueo"**
2. Completa el formulario con:
   - **Nombre**: Nombre del parqueo
   - **Dirección**: Ubicación completa
   - **Espacios Totales**: Número total de espacios
   - **Espacios Disponibles**: Espacios libres en este momento
   - **Horario**: Apertura y cierre (opcional)
   - **Tipo**: Calle, Lote, Garaje o Valet
   - **Descripción**: Información adicional (opcional)
   - **Teléfono**: Contacto (opcional)

### Funcionalidades Principales

#### Editar Parqueos
- Haz clic en el botón **✏️ Editar** en cualquier tarjeta
- Modifica los datos que necesites
- Guarda los cambios

#### Eliminar Parqueos
- Haz clic en el botón **🗑️ Eliminar**
- Confirma la acción
- El parqueo se eliminará permanentemente

#### Monitoreo Visual
- **Barra de disponibilidad**: Muestra visualmente el porcentaje de ocupación
- **Estados**: 
  - 🟢 Verde (>30%): Disponibles
  - 🟡 Amarillo (1-30%): Limitados
  - 🔴 Rojo (0%): Lleno
- **Información en tiempo real**: Todos los datos se actualizan automáticamente

### Validación de Datos

El formulario valida:
- ✅ Campo requerido: Nombre
- ✅ Campo requerido: Dirección
- ✅ Campo requerido: Espacios totales
- ✅ Espacios disponibles ≤ Espacios totales
- ✅ Números válidos en espacios

### Ejemplo de Uso

```javascript
// Acceder al gestor de parqueos
const manager = window.parkingManager;

// Obtener todos los parqueos
console.log(manager.parkings);

// Crear nuevo parqueo (por formulario en la interfaz)
// O crear programáticamente:
const newParking = {
  id: Date.now(),
  name: "Parqueo Nueva York",
  address: "Av. Nueva 999",
  total: 200,
  available: 85,
  openTime: "06:00",
  closeTime: "23:00",
  type: "garage",
  description: "Nuevo garaje de 8 pisos",
  phone: "+1-809-555-5555",
  createdAt: new Date().toISOString()
};
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Grid layout, Flexbox, Variables CSS, Animaciones
- **Vanilla JavaScript**: Sin dependencias externas
- **Intl API**: Para manejo de zonas horarias y formatos
- **localStorage**: Persistencia de datos
- **matchMedia API**: Detección de preferencias del sistema

## 🌍 Sistema de Traducción (i18n)

### Idiomas Soportados
- 🇪🇸 **Español**
- 🇬🇧 **Inglés**
- 🇫🇷 **Francés**

### Agregar un Nuevo Idioma

En `i18n.js`, agrega a las traducciones:

```javascript
const translations = {
  de: {
    appName: "GlobeNow",
    slogan: "Globale Informationen sofort",
    timezoneClock: "Zeitzonen-Uhr",
    parkingManager: "Parkplatz-Manager",
    // ... más traducciones
  }
};
```

Y actualiza el selector en los HTMLs:

```html
<select id="language">
  <option value="es">🇪🇸 Español</option>
  <option value="en">🇬🇧 English</option>
  <option value="fr">🇫🇷 Français</option>
  <option value="de">🇩🇪 Deutsch</option>
</select>
```

### Usar Traducción en el Código

```javascript
// Traducir una clave
const text = window.i18n.translate('appName');

// O usar en HTML
<h1 data-i18n="appName">GlobeNow</h1>
```

## 🎨 Personalización de Colores

En `style.css`, modifica las variables CSS:

```css
:root {
  --primary-color: #1e3a8a;      /* Azul oscuro */
  --secondary-color: #3b82f6;    /* Azul */
  --accent-color: #fbbf24;       /* Amarillo */
  --text-color: #1f2937;         /* Gris oscuro */
  --bg-color: #f9fafb;           /* Blanco */
  --border-color: #e5e7eb;       /* Gris claro */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1200px
- **Móvil**: < 768px

## 🌙 Modo Oscuro

- **Automático**: Detecta las preferencias del sistema
- **Manual**: Usa el botón en el footer (🌙)
- **Persistente**: Se guarda en localStorage

## 💾 Persistencia de Datos

Todos los datos se guardan localmente en el navegador usando `localStorage`:

- **Idioma**: `globenow-language`
- **Modo Oscuro**: `globenow-darkmode`
- **Zonas Horarias**: `globenow-timezones`
- **Favoritos**: `globenow-favorites`
- **Parqueos**: `globenow-parkings`
- **Formato 24h**: `globenow-24hformat`

## 📊 Datos Simulados

Actualmente, los datos de divisas, criptomonedas y clima son simulados. Para implementar APIs reales:

### Divisas
- Usar: [Open Exchange Rates](https://openexchangerates.org/)
- Endpoint: `https://openexchangerates.org/api/latest.json`

### Criptomonedas
- Usar: [CoinGecko API](https://www.coingecko.com/api)
- Endpoint: `https://api.coingecko.com/api/v3/simple/price`

### Clima
- Usar: [OpenWeatherMap](https://openweathermap.org/api)
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`

## 💡 Ejemplo de Integración de API Real

```javascript
async loadCryptoReal() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_market_cap=true');
    const data = await response.json();
    // Procesar y mostrar datos
  } catch (error) {
    console.error('Error cargando crypto:', error);
  }
}
```

## 🔗 Enlaces Útiles

- **GitHub**: [salvadorcarrion47-bit/GlobeNow](https://github.com/salvadorcarrion47-bit/GlobeNow)
- **Página Principal**: [index.html](index.html)
- **Reloj de Zonas**: [timezone-clock.html](timezone-clock.html)
- **Gestor de Parqueos**: [parking-manager.html](parking-manager.html)
- **Issues**: [Reportar Problemas](https://github.com/salvadorcarrion47-bit/GlobeNow/issues)
- **Discussions**: [Discusiones](https://github.com/salvadorcarrion47-bit/GlobeNow/discussions)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**Salvador Carrión**
- GitHub: [@salvadorcarrion47-bit](https://github.com/salvadorcarrion47-bit)
- Email: salvadorcarrion47@gmail.com

## 🎉 Cambios Recientes

### v3.0 - Gestor de Parqueos
- ✅ Nuevo módulo de gestión de parqueos
- ✅ CRUD completo (Crear, Leer, Actualizar, Eliminar)
- ✅ Validación de formularios
- ✅ Visualización de disponibilidad
- ✅ Tipos de parqueo (Calle, Lote, Garaje, Valet)
- ✅ Información de horarios y contacto
- ✅ Persistencia en localStorage
- ✅ Soporte multiidioma

### v2.0 - Reloj de Zonas Horarias
- ✅ Nuevo módulo de reloj digital multizona
- ✅ 50+ zonas horarias soportadas
- ✅ Reloj analógico miniatura
- ✅ Sistema de favoritos
- ✅ Búsqueda de zonas horarias
- ✅ Soporte para formato 12/24 horas
- ✅ Información de fecha y estado del día
- ✅ Persistencia en localStorage

### v1.0 - Lanzamiento Inicial
- ✅ Sistema i18n multiidioma (ES, EN, FR)
- ✅ Detección automática del idioma del navegador
- ✅ Modo oscuro automático
- ✅ Divisas, criptomonedas, clima, parqueos
- ✅ Responsive design
- ✅ Animaciones fluidas

---

**Hecho con ❤️ por Salvador Carrión**