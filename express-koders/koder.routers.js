const express = require("express");
const kodersUseCase = require("./koders.usecase");

const router = express.Router();

router.use((request, response, next) => {
  console.log("Middleware a nivel de router (Koders)");
  next();
});

// GET /koders -> endpoint

router.get(
  "/",
  (request, response, next) => {
    console.log("Middleware a nivel de ruta(get Koders)", request.isAWizard);
    next();
  },
  (request, response) => {
    try {
      const koders = kodersUseCase.getAll();

      response.json({
        message: "All koders",
        data: {
          koders: koders,
        },
      });
    } catch (error) {
      response.status(error.status || 500);
      response.json({
        error: error.message,
      });
    }
  }
);

router.post("/", (request, response) => {
  try {
    const newKoder = request.body;
    const koders = kodersUseCase.add(newKoder);

    response.json({
      message: "Koder added",
      data: { koders },
    });
  } catch (error) {
    response.status(error.status || 500);

    response.json({
      error: error.message,
    });
  }
});

router.delete("/", (request, response) => {
  try {
    const koders = kodersUseCase.deleteAll();
    response.json({
      message: "All koders deleted",
      data: { koders },
    });
  } catch (error) {
    response.status(error.status || 500);

    response.json({
      error: error.message,
    });
  }
});

router.delete("/:name", (request, response) => {
  try {
    const name = request.params.name;
    const koders = kodersUseCase.deleteByName(name);

    response.json({
      message: "Koder deleted",
      data: { koders },
    });
  } catch (error) {
    response.status(error.status || 500);

    response.json({
      error: error.message,
    });
  }
});

module.exports = router;
