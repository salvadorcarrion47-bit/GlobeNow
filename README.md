# 🌍 GlobeNow - Información Global, al Instante

**GlobeNow** es una aplicación web moderna que centraliza información global incluyendo divisas, criptomonedas, clima y parqueos gratuitos. Caracterizada por su soporte multiidioma, modo oscuro automático y diseño responsivo.

## ✨ Características

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

### 📊 Secciones de Datos

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

## 📁 Estructura del Proyecto

```
GlobeNow/
├── index.html          # Estructura HTML principal
├── style.css           # Estilos CSS (variables, responsive, dark mode)
├── i18n.js             # Sistema de traducción multiidioma
├── app.js              # Lógica principal de la aplicación
├── README.md           # Documentación
└── assets/             # (Opcional) Imágenes y recursos
```

## 🚀 Instalación y Uso

### Opción 1: Clonar el repositorio

```bash
git clone https://github.com/salvadorcarrion47-bit/GlobeNow.git
cd GlobeNow
```

### Opción 2: Usar directamente

Abre `index.html` en tu navegador favorito. No requiere servidor ni instalación adicional.

```bash
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Grid layout, Flexbox, Variables CSS, Animaciones
- **Vanilla JavaScript**: Sin dependencias externas
- **localStorage**: Persistencia de datos
- **matchMedia API**: Detección de preferencias del sistema

## 🌍 Sistema de Traducción (i18n)

### Agregar un nuevo idioma

En `i18n.js`, añade a las traducciones:

```javascript
const translations = {
  de: {
    appName: "GlobeNow",
    slogan: "Globale Informationen sofort",
    // ... más traducciones
  }
};
```

Y actualiza el selector en `index.html`:

```html
<select id="language">
  <option value="es">🇪🇸 Español</option>
  <option value="en">🇬🇧 English</option>
  <option value="fr">🇫🇷 Français</option>
  <option value="de">🇩🇪 Deutsch</option>
</select>
```

### Usar traducción en el código

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
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1200px
- **Móvil**: < 768px

## 🌙 Modo Oscuro

- **Automático**: Detecta las preferencias del sistema
- **Manual**: Usa el botón en el footer
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
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true');
    const data = await response.json();
    // Procesar y mostrar datos
  } catch (error) {
    console.error('Error cargando crypto:', error);
  }
}
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 👤 Autor

**Salvador Carrión**
- GitHub: [@salvadorcarrion47-bit](https://github.com/salvadorcarrion47-bit)
- Email: [Tu email]

## 🔗 Enlaces Útiles

- [Demo](https://salvadorcarrion47-bit.github.io/GlobeNow)
- [Issues](https://github.com/salvadorcarrion47-bit/GlobeNow/issues)
- [Discussions](https://github.com/salvadorcarrion47-bit/GlobeNow/discussions)

---

**Hecho con ❤️ por Salvador Carrión**