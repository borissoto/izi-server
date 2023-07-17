# izi-server

### Ejecutar los siguientes comandos

`npm install`

`npm start`


### Se implemento dos endpoints:

GET `api/tareas` Para obtener el listado de tareas
GET `api/tareas/organizar` Para obtener el listado de tareas organizado 

Se implemento la funcion `ordenarTareas(tareas)` , como parte de una clase llamada 
`GestorTareasController` . 

### Ejemplo

[
 { id: 1, nombre: "Tarea 1", prioridad: "baja", fechaVencimiento: new Date("2023-07-01") },
 { id: 2, nombre: "Tarea 2", prioridad: "alta", fechaVencimiento: new Date("2023-06-29") },
 { id: 3, nombre: "Tarea 3", prioridad: "media", fechaVencimiento: new Date("2023-06-30") },
 { id: 4, nombre: "Tarea 4", prioridad: "alta", fechaVencimiento: new Date("2023-07-02") },
 { id: 5, nombre: "Tarea 5", prioridad: "media", fechaVencimiento: new Date("2023-07-01") }
];

Resultado: ordenado
[
 { id: 2, nombre: "Tarea 2", prioridad: "alta", fechaVencimiento: new Date("2023-06-29") },
 { id: 4, nombre: "Tarea 4", prioridad: "alta", fechaVencimiento: new Date("2023-07-02") },
 { id: 3, nombre: "Tarea 3", prioridad: "media", fechaVencimiento: new Date("2023-06-30") },
 { id: 5, nombre: "Tarea 5", prioridad: "media", fechaVencimiento: new Date("2023-07-01") },
 { id: 1, nombre: "Tarea 1", prioridad: "baja", fechaVencimiento: new Date("2023-07-01") }
]

El servidor corre en puerto 8080

