# Chatbot de Spika Tech

## Descripción
El chatbot de Spika Tech es un asistente virtual que se encuentra en la esquina inferior derecha del sitio web. Proporciona información detallada sobre todos los aspectos de la empresa, proyectos y servicios.

## Características

### 🎯 Funcionalidades principales
- **Posición fija**: Se mantiene en la esquina inferior derecha de todas las páginas
- **Interfaz intuitiva**: Botón flotante con icono de chat
- **Ventana desplegable**: Interfaz de chat completa con animaciones suaves
- **Opciones rápidas**: Botones para acceder directamente a información específica
- **Entrada de texto**: Campo de texto para preguntas personalizadas
- **Responsive**: Se adapta a diferentes tamaños de pantalla

### 📱 Diseño responsivo
- **Desktop**: Ventana de 384px x 384px (sm: 448px x 448px)
- **Mobile**: Ventana de 320px x 384px
- **Animaciones**: Transiciones suaves de apertura y cierre

### 🎨 Estilo visual
- **Colores**: Utiliza la paleta de colores de Spika Tech (brand-dark, brand-lime)
- **Fuente**: Exo2, consistente con el resto del sitio
- **Iconos**: SVG personalizados para el bot y el usuario
- **Scrollbar**: Personalizada con los colores de la marca

## Temas disponibles

### 1. ¿Quiénes somos?
Información sobre la empresa, misión, valores y equipo.

### 2. Nuestros proyectos
Detalles sobre los tres proyectos principales:
- **VR-CARDIO**: Plataforma médica de realidad virtual
- **PRAS**: Robot social para asistencia sanitaria
- **Primera Vuelta al Mundo**: Exhibición inmersiva cultural

### 3. Servicios y desarrollos
Información sobre los servicios tecnológicos ofrecidos.

### 4. Nuestras tecnologías
Detalles sobre las tecnologías utilizadas:
- Realidad Virtual y Aumentada
- Inteligencia Artificial
- Robótica y Sistemas Autónomos
- Deep Tech

### 5. Logros y reconocimientos
Cronología de premios y certificaciones desde 2019 hasta 2025.

### 6. Contacto
Información de contacto y redes sociales.

## Funcionamiento técnico

### Estructura de archivos
```
src/
├── components/
│   └── Chatbot.astro          # Componente principal del chatbot
├── layouts/
│   └── Layout.astro           # Layout que incluye el chatbot
└── styles/
    └── global.css             # Estilos globales
```

### Tecnologías utilizadas
- **Astro**: Framework principal
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos y responsividad
- **Vanilla JavaScript**: Funcionalidad interactiva

### Eventos y listeners
- `astro:page-load`: Inicialización del chatbot
- `click`: Apertura/cierre de la ventana
- `keypress`: Envío de mensajes con Enter
- `scroll`: Auto-scroll en el chat

### Procesamiento de lenguaje natural
El chatbot utiliza palabras clave para identificar el tema de la pregunta:
- "quien", "somos", "empresa" → Información de la empresa
- "proyecto", "vr-cardio", "pras" → Proyectos
- "servicio", "desarrollo", "tecnología" → Servicios
- "logro", "premio", "certificación" → Reconocimientos
- "contacto", "dirección", "email" → Información de contacto

## Personalización

### Agregar nuevos temas
1. Añadir entrada en `chatbotData`
2. Crear botón de opción rápida
3. Actualizar `processUserInput()` con palabras clave

### Modificar estilos
- Colores: Editar clases de Tailwind
- Tamaños: Modificar clases de width/height
- Animaciones: Ajustar duración en CSS y JavaScript

### Agregar funcionalidades
- Integración con APIs externas
- Persistencia de conversaciones
- Análisis de uso
- Multiidioma

## Mantenimiento

### Verificación de funcionamiento
1. El botón debe aparecer en todas las páginas
2. La ventana debe abrirse/cerrarse con animaciones
3. Las opciones rápidas deben funcionar
4. El procesamiento de texto debe responder correctamente
5. El diseño debe ser responsivo

### Actualización de contenido
- Modificar `chatbotData` para actualizar respuestas
- Añadir nuevas palabras clave en `processUserInput()`
- Actualizar opciones rápidas según sea necesario

## Consideraciones de accesibilidad
- Contraste de colores adecuado
- Navegación por teclado
- Textos alternativos en iconos
- Estructura semántica correcta 