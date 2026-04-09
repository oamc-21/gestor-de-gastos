require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ ok: true, message: "API gestor-gastos" });
});

app.use("/api/users", require("./routes/user.routes"));
app.use("/api/movements", require("./routes/movement.routes"));


const start = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB conectado");
  app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
};

start().catch((err) => {
  console.error("No se pudo iniciar el servidor:", err.message);
  process.exit(1);
});
