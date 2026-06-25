# 🌍 GlobeNow - Información Global, al Instante

**GlobeNow** es una aplicación web moderna que centraliza información global incluyendo divisas, criptomonedas, clima, parqueos gratuitos y **reloj de zonas horarias en tiempo real**. Caracterizada por su soporte multiidioma, modo oscuro automático y diseño responsivo.

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

### 📱 Dos Modos de Visualización

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

#### 2. **Reloj de Zonas Horarias (timezone-clock.html)** ⏰ NUEVO
Reloj digital con soporte para múltiples zonas horarias:

- ⏰ **Reloj Digital**: Tiempo en formato 12/24h
- 🕐 **Reloj Analógico Mini**: Visualización análoga con manecillas
- 📍 **50+ Zonas Horarias**: Cobertura mundial
- ⭐ **Favoritos**: Marca tus zonas favoritas
- 🔍 **Búsqueda**: Encuentra zonas rápidamente
- 📅 **Información Complementaria**: Fecha y estado del día
- 💾 **Persistencia**: Guarda tus preferencias

## 📋 Estructura del Proyecto

```
GlobeNow/
├── index.html                    # Página principal (divisas, crypto, clima, parqueos)
├── timezone-clock.html           # Reloj de zonas horarias
├── style.css                     # Estilos globales
├── timezone-clock.css            # Estilos del reloj
├── i18n.js                       # Sistema de traducción
├── app.js                        # Lógica principal
├── timezone-clock.js             # Lógica del reloj de zonas
├── i18n-extended.json            # Traducciones adicionales
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

# Windows
start index.html
start timezone-clock.html

# Linux
xdg-open index.html
xdg-open timezone-clock.html
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

### Detalles Visuales

Cada zona horaria muestra:
- **Nombre de la ciudad** y código de zona
- **Reloj digital** con actualización en tiempo real
- **Reloj analógico mini** con manecillas
- **Fecha** actual en esa zona
- **Estado del día** (Día ☀️, Tarde, Atardecer 🌅, Noche 🌙)

### Ejemplo de Uso

```javascript
// Acceder al controlador del reloj
const clock = window.timezoneClock;

// Agregar zona
clock.addTimezone('America/New_York');

// Marcar como favorito
clock.toggleFavorite('Asia/Tokyo');

// Obtener tiempo en una zona
const time = clock.getTimeInTimezone('Europe/London');
console.log(time); // { hour: '14', minute: '30', second: '45', ... }
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

## 📊 Datos Simulados

Actualmente, los datos mostrados son simulados. Para implementar APIs reales:

### Divisas
- Usar: [Open Exchange Rates](https://openexchangerates.org/)
- Endpoint: `https://openexchangerates.org/api/latest.json`

### Criptomonedas
- Usar: [CoinGecko API](https://www.coingecko.com/api)
- Endpoint: `https://api.coingecko.com/api/v3/simple/price`

### Clima
- Usar: [OpenWeatherMap](https://openweathermap.org/api)
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`

### Parqueos
- Implementar con datos locales o API municipal

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