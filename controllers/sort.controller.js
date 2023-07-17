const tasks = require("../models/tasks");

class GestorTareasController{
    constructor(){
        this.tareas = tasks
    }

    obetenerTareas(){
        return this.tareas
    }

    ordenarTareas(){
        const priorityOrder = { alta:3, media:2, baja:1};

        const sortedTasks = this.tareas.slice().sort((tarea1, tarea2) => {
            const priority1 = priorityOrder[tarea1.prioridad]
            const priority2 = priorityOrder[tarea2.prioridad]
            return priority2 - priority1;
        });

        return sortedTasks;
    }   

}

module.exports = GestorTareasController;