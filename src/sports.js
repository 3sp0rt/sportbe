import express from "express";
import bodyParser from "body-parser";

// Creamos servidor
const server = express();

// enrutamiento
import indexRoutes from "./routes/routes.js";
const port = 8001;

// Poder recibir datos
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// indicamos donde está el enrutamiento
server.use(indexRoutes);

// Control de sitio no encontrado
server.all("*", function (req, res) {
  res.status(404);
  return;
});

// Escuchamos por el puerto port
server.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
