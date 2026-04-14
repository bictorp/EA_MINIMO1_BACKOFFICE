# Registro de uso de IA - Frontend/Backoffice (Angular)

**1. Interfaces y Tipado en TypeScript**
- Prompt: "En mi frontend en Angular, a veces recibo la Universidad como un string (solo el ID) y a veces como el objeto completo poblado. ¿Cómo defino esto correctamente en mi interfaz de TypeScript para que no me dé error de compilación?"
- Prompt: "¿Cómo le paso correctamente parámetros dinámicos a una petición GET con HttpClient en Angular para enviar `page`, `limit` y `search` en la URL?"

**2. Diseño y Maquetación (UI/HTML)**
- Prompt: "Hazme el HTML y el CSS (styleUrl) para un componente en Angular. Quiero que tenga una barra de búsqueda simple arriba. Debajo, un listado en formato 'cards' o cuadrícula para mostrar preguntas. Tiene que verse limpio y moderno."
- Prompt: "Genera la vista de detalle de la pregunta en HTML/CSS. Necesito que tenga un botón para volver atrás, el título, la descripción, y debajo una sección con la lista de respuestas y un textarea pequeño al final para enviar una respuesta nueva."

**3. Dudas de lógica en Angular**
- Prompt: "Tengo un solo componente de Angular. ¿Cómo puedo usar `*ngIf` para ocultar la lista de preguntas y mostrar la vista de detalle cuando el usuario hace clic en una tarjeta de la lista, sin tener que cambiar de ruta (URL)?"
- Prompt: "Todavía no tengo implementado el sistema real de tokens y login en el frontend. ¿Qué enfoque me recomiendas para 'mockear' o simular un usuario logueado en este componente para poder probar la función de enviar respuestas?"
- *Nota:* Me sugirió inyectar el `UsuarioService` y guardar temporalmente el primer usuario devuelto por la API en una variable local `currentUser`.

**4. Solución de errores: Testing**
- Prompt: "Al generar mi componente con el CLI de Angular, el archivo preguntas.component.spec.ts me da este error en el import: 'Cannot find module './preguntas' or its corresponding type declarations.' ¿Cómo lo soluciono?"
- *Nota:* La IA identificó que el archivo autogenerado estaba buscando `Preguntas` en lugar del nombre real de mi clase (`PreguntasComponent`), y me dio el import corregido.