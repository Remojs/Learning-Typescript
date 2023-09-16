# Buenas practicas de nest

- *Usa singulares y plurales para definir nombres en carpetas y archivos* En carpetas usa los nombres en plural "Services", pero en archivos usa en singular "task.service.ts"

- *Organiza tu proyecto siguiendo la estructura convencional de Nest.js*. Utiliza los directorios controller, service, dto, module, etc., para mantener una organización coherente.

- *Crea módulos pequeños y reutilizables que tengan una única responsabilidad*. Esto facilita la escalabilidad y el mantenimiento.

- *Utiliza DTO* para validar y estructurar los datos que ingresan y salen de tu aplicación a través de las solicitudes HTTP.

- *Implementa validación de datos en los DTO* utilizando las capacidades de validación de clase de TypeScript o bibliotecas como class-validator.

- *Crea middlewares personalizados* para lidiar con tareas comunes, como la autenticación, la autorización y el registro de solicitudes. Esto mantiene el código del controlador limpio y reutilizable.

- *Implementa un manejo adecuado de excepciones en tu aplicación* para proporcionar respuestas claras y significativas en caso de errores.


