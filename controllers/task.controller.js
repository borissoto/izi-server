const { response } = require("express");
const GestorTareasController = require("./sort.controller");
const tasks = require("../models/tasks");

const gestorTareas = new GestorTareasController;
const tareasOrdenadas = gestorTareas.ordenarTareas()
const tareasNoOrdenadas = gestorTareas.obetenerTareas()

const tareasGet = (req, res = response) => {
  res.json({
    tareas: tareasNoOrdenadas
  });
};

const tareasOrdenar = (req, res = response) => {
    res.json({
        tareas: tareasOrdenadas
    })
}

module.exports = {tareasGet, tareasOrdenar,};
