const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.tareasPath = "/api/tareas";
    this.tareasOrdenarPath = "/api/tareas/ordenar"

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.tareasPath, require("../routes/task"));
    this.app.use(this.tareasOrdenarPath, require("../routes/sort"));  
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto ", this.port);
    });
  }
}

module.exports = Server;
