const fs = require("node:fs");

// Crea un archivo, el primer parametro es el nombre y extensión del archivo, el segundo parametro es el contenido que queremos poner
fs.writeFileSync("hola.txt", "Hola koders!!");
