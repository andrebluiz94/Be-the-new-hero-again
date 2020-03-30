const express = require("express");

const routes = require("./routes/routes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log(`Server running on port: ${PORT}`);
});
