# Nest review notes

## Observaciones / Datos

- Nest utiliza la estructura de angular y se escribe en TypeScript normalmente
- Nest esta centrado en el desarrollo escalable y productivo por su arquitectura orientada a las aplicaciones web y API REST
- Nest funciona sobre Node.js y utiliza Express.
- Nest tiene incluido un CLI, el cual te permite crear archivos con un solo comando para facilitar el desarrollo.
- Las piezas principales de Nest son Sus modulos, definidos por controladorer y providers, los cuales encapsulan toda la logica de la aplicacion.

## Consejos / Cosas a tener en cuenta

- Es importante saber definir bien cada modulo en nest para mantener la aplicacion escalable.
- Las interafaces nos permiten crear nuestos propios tipos de datos
- Los DTO sirven para transferir datos, mientras que las interfaces se utilizan para las transferencias internas en la aplicacion

## Codigo / Estructura de carpetas

- El **Main.ts** es el nucleo del proyecto y arrancador de la app
- El **Module.ts** es el indice de cada modulo
- Para generar un controller, servicio o lo que sea se usa el comando **Nest g -cosa- -nombre-** (ejemplo: nest g controller Tasks)
- Si pongo un ? al definir datos significa que dicho dato es opcional (ejemplo: Id?: number;)

