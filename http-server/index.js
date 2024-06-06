//Importar función http
const http = require("node:http");

//Crear un servidor
const server = http.createServer((request, response) => {
  console.log("request:", request);
  const method = request.method;
  const url = request.url;

  if (url.startsWith("/koders")) {
    if (method === "GET") {
      response.end("listado de koders");
    }
  }

  response.end(`${method}: ${url}`);
});

server.listen(8080, () => {
  console.log("Server is listening on port: 8080");
});

/** methods
 *
 * GET -> Obtener
 * POST -> Crear
 * DELETE -> Eliminar
 * PATCH -> Actualizar
 * PUT  -> Reemplazar
 */

// URL https://api.kodemia.mx/koders

// GET https://api.kodemia.mx/koders -> listado de koders
// POST https://api.kodemia.mx/koders -> Crear un koder
// DELETE https://api.kodemia.mx/koders -> Borrar koder
