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
- La inyeccion de dependencias es una tecnica en la cual 

## Codigo / Estructura de carpetas
- Todo lo que esta afuera de */Src* es archivo de configuracion
- El **Main.ts** es el nucleo del proyecto y arrancador de la app
- El **Module.ts** es el indice de cada modulo
- Para generar un controller, servicio o lo que sea se usa el comando **Nest g -cosa- -nombre-** (ejemplo: nest g controller Tasks)
- Si se agrega un -no-spec al final del comando no se crea el archivo de testing
- Si pongo un ? al definir datos significa que dicho dato es opcional (ejemplo: Id?: number;)
- Se puede usar el decorador @Param de la siguiente manera: 
    consiguiendo acceder a todos los parametros de una, sin necesidad de especificar uno por uno
    ```typescript
    getProducto(@Param() param):string { return `el producto es ${params.id}`}
    ```
- Tambien se puede usar de esta manera: 
    consiguiendo acceder a todos los parametros de una, pero especificando cada parametro individualmente
    ```typescript
    getProducto(
        @Param('query') query, 
        @Param('page') page,
        @Param('id') id,
        ):string { 
            return `el producto es ${id}, con ${nombre} y ${query}`}
    ```
- La estructura de los controllers es masomenos asi: 
    ```typescript
    @Controller('tasks') //2. a la ruta /tasks
    export class TaskController {
        @Get() //1. cuando llamen por un metodo GET
        helloworld() { //3. quiero que ejecutes este codigo
            return 'Hello World';
        }
    }
    ```
