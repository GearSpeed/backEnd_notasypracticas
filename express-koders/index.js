const server = require("./server");
const db = require("./db");

const port = 8081;

db.init();
server.listen(port, () => {
  console.log("Server is running at http://localhost:" + port);
});
