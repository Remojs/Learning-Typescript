# Estructura de archivos y carpetas para hacer el proyecto mas escalable y manejable.

- Carpeta llamada **config** (configuracion de la aplciacion o librerias, como swagger por ejemplo)
- Carpeta llamada **providers** (los proveedores de la aplicacion)
- Carpeta llamada **public** (aqui se guardan cosas estaticas, como imagenes, textos, etc.)
- Carpeta llamada **modules** (Ahi va toda la logica y los modulos de la aplicacion [cada carpeta de modulo va a tener su module y ademas subcarpetas con sus controladores, con sus servicios, con sus DTOs y en caso de usar Databases puede tener su carpeta Schema.])

Estructura completa: 

- **-SRC**<br>
- **-CONFIG**
- **-MODULES** <br>
    |-- *users* <br>
            ||--- *controllers* <br>
            ||--- *dtos* <br> 
            ||--- *services* <br> 
            ||--- *schemas* <br> <br>
- **-PROVIDERS**
- **-PUBLIC** <br>
- *--app.controller.spec.ts* <br>
- *--app.controller.ts* <br>
- *--app.module.ts* <br>
- *--app.service.ts* <br>
- *--main.ts* <br>
