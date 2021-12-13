const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const bodyParser = require("body-parser");
const swaggerDocument = YAML.load("./swagger.yml");

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.json("Helloworld");
});

app.get("/param", (req, res) => {
  const param = req.query.id;
  res.json(`return ${param}`);
});

app.post("/post", (req, res) => {
  const id = req.body.id;
  res.json(`return ${id}`);
});

app.listen(3001, () => {
  console.log("running");
});
