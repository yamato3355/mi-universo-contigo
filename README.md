# 💖 Mi Universo Contigo 💖

**Mi Universo Contigo** es una experiencia web interactiva, poética e inmersiva. Diseñada como una carta de amor en el espacio, guía a la persona a través de un viaje por el sistema solar, donde cada planeta y carpeta guarda secretos, recuerdos y mensajes dedicados.

---

## ✨ Características Principales

- **Pantalla de Bienvenida:**
  - Mensaje poético de introducción.
  - Reproductor de audio de fondo (`space.mp3`) para un ambiente inmersivo.
  - Botón de entrada interactivo para iniciar la experiencia.

- **Espacio y Fondo Animado:**
  - Lienzo `<canvas>` animado con estrellas, partículas y cometas.
  - Capas visuales con nebulosas y estrellas fugaces.

- **Sistema Solar Interactivo:**
  - Representación visual del Sol y los planetas (Mercurio, Venus, Tierra, Marte, Júpiter, Saturno con anillos, Urano y Neptuno).

- **10 Carpetas Interactivas (Mensajes Especiales):**
  1. 🌍 **Mi Futuro Solo Contigo**
  2. 💖 **Eres Mi Mundo**
  3. 🌹 **Lo Que Siento Por Ti**
  4. 💌 **Una Carta Para Ti**
  5. 🌙 **Nuestros Sueños**
  6. ✨ **Momentos Inolvidables**
  7. 🪐 **Más Allá de las Estrellas**
  8. 🔒 **Mis Secretos Más Dulces**
  9. 🌌 **Un Amor Infinito**
  10. 🎁 **El Final de Nuestro Viaje**

- **Lector de Cartas:**
  - Ventana modal interactiva con animación de máquina de escribir (*typewriter effect*) para leer los mensajes de cada carpeta.

- **Pantalla Final y Dedicatoria:**
  - Cierre emotivo firmado por **Jesús Alessandro ❤️**.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica de las secciones, contenedor de carpetas, modal y reproducción de audio.
- **CSS3 (`style.css`):**
  - Tipografías personalizadas desde Google Fonts (*Great Vibes* y *Poppins*).
  - Animaciones y estilos visuales para planetas, nebulosas y efectos espaciales.
- **JavaScript (`script.js`):**
  - Renderizado dinámico de partículas y cometas en el `<canvas>`.
  - Lógica de apertura/cierre de modales y animación del texto de las cartas.
  - Control de reproducción de música de fondo.

---

## 📁 Estructura del Proyecto

```text
.
├── index.html       # Estructura principal del proyecto
├── style.css        # Hojas de estilo y animaciones visuales
├── script.js        # Lógica de interacciones, canvas y modal
└── space.mp3        # Archivo de audio de fondo ambiental
