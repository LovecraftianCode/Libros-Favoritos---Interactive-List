# Libros Favoritos - Interactive List

Una aplicación web interactiva que permite a los usuarios marcar sus libros favoritos y ver descripciones de cada libro con un diseño moderno de dos columnas.

<img width="1907" height="869" alt="Captura de pantalla 2026-04-02 175442" src="https://github.com/user-attachments/assets/7c7842d1-bfd5-4b91-9357-028ac98a342c" />

## Características

- Marcar/desmarcar libros favoritos con animación de corazón
- Despliegue de descripciones al hacer clic en cada tarjeta
- Diseño responsive con dos columnas (se adapta a móvil)
- Efectos hover y transiciones suaves
- Interfaz limpia y moderna con tarjetas sombreadas

## Tecnologías utilizadas

| Tecnología | ¿Para qué? |
|------------|-------------|
| **HTML5** | Estructura semántica de la página |
| **CSS3** | Estilos, diseño con Grid/Flexbox, animaciones, responsive |
| **JavaScript (Vanilla)** | Manipulación del DOM, manejo de eventos, toggle de clases |

## Conceptos de JavaScript aplicados

- **DOM Manipulation**: Selección de elementos con `querySelectorAll`
- **Event Listeners**: `addEventListener` para clics en botones y tarjetas
- **Class Toggling**: `classList.add()`, `classList.remove()`, `classList.toggle()`
- **Event Propagation Control**: `event.stopPropagation()` y `event.target.closest()` para evitar conflictos entre eventos
- **Conditional Rendering**: Cambio de contenido según el estado (`textContent`)

## Funcionalidades destacadas

### Botón de like con toggle visual
```javascript
// Cambia entre corazón vacío (🎔) y lleno (❤️)
if (icon.textContent === "🎔") {
    icon.textContent = "❤️";
    btn.classList.add("filled");
} else {
    icon.textContent = "🎔";
    btn.classList.remove("filled");
}
```
## Despliegue de descripciones

Cada tarjeta de libro es clickeable y muestra/oculta una descripción sin afectar el botón de like gracias al control de propagación de eventos.

## Cómo ejecutar el proyecto ?

1. Clona el repositorio:
```bash
git clone https://github.com/LovecraftianCode/Libros-Favoritos---Interactive-List.git
```
2. Abre el archivo index.html en tu navegador

## Responsive Design
Pantallas grandes (>768px): 2 columnas de libros

Pantallas pequeñas (<768px): 1 columna

Adaptación automática de tamaños y espaciados

## ¿Qué aprendí haciendo este proyecto?

- A manejar eventos de clic en diferentes elementos sin que interfieran entre sí
- Usar classList.toggle() para alternar estilos
- Diseñar con CSS Grid para layouts responsivos
- Crear una experiencia de usuario fluida con transiciones CSS
- Documentar un proyecto para mi portafolio

## Autor
Humberto Isaac Padilla Contreras - https://github.com/LovecraftianCode
