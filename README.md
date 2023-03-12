# GestionUsuariosApp

## Requisitos Funcionales

Login(Completado)


Users:(Completado al 100%)

El usuario debe poder ver una lista de usuarios existentes.

El usuario debe poder ver la cantidad de post que tiene cada usuario en el mismo listado.


Post:(Completado al 100%)

El usuario debe poder ver una lista de publicaciones existentes.

El usuario debe poder filtrar las publicaciones por autor

El usuario debe poder agregar una nueva publicación a la lista.

El usuario debe poder eliminar las publicaciones en las que él es autor.
 

Comments:(Completado al 100%)

El usuario debe poder ver una lista de comentarios solo de sus publicaciones.

El usuario debe poder eliminar comentarios de sus publicaciones


ToDo:(Pendiente)

El usuario debe poder ver una lista de tareas existentes.

El usuario debe poder agregar una nueva tarea a la lista.

El usuario debe poder cambiar el estado de una tarea de pendiente a completada o viceversa.

El usuario debe poder eliminar una tarea de la lista.


##Requisitos Técnicos

Utilice Ionic CLI para generar y administrar el proyecto. (Ejecutado al 100%)

Realice el proceso de autenticación con el Bearer Token para poder utilizar los métodos de PUT, POST, PATCH, DELETE (Ejecutado al 100%)

Utilice servicios para manejar la lógica de negocios de la aplicación. (Ejecutado al 100%)

Utilice Observables en los casos que considere necesario (Ejecutado  al 100%)

Utilice Reactive Forms para manejar la entrada de datos del usuario. (Ejecutado al 100%)

Utilice Pipe para formatear los datos que no tengan una estructura amigable para el usuario

Utilice el sistema de navegación de Ionic para navegar entre las diferentes vistas de la aplicación. (Ejecutado al 100%)

Utilice los métodos async y await preferentemente antes que las Promise (Ejecutado al 100%)

Utilice GraphQL en todos los casos de ser posible

Integrar el plugin de capacitor Network y cuando la App este offline redirigirlo a una página con el mensaje que esta sin conexión a internet y retornarlo a la página 
principal del proyecto una vez se restablezca(Ejecutado al 50%)

Cuando intente eliminar alguno de los elementos levantar una confirmación de la acción y hacer vibrar el móvil utilizando el plugin de @capacitor/haptics(Ejecutado al 50%)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
