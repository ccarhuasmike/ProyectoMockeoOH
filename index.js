require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/bsclientedebito", require("./src/api/bsclientedebito/index"));
app.use("/api/bscuentadebito", require("./src/api/bscuentadebito/index"));
app.use("/api/bstrxdebito", require("./src/api/bstrxdebito/index"));
app.use("/api/bstasacambio", require("./src/api/bstasacambio/index"));
app.use("/api/carteradigital", require("./src/api/carteradigital/index"));
app.use("/api/public", require("./src/api/public/index"));
app.use("/api/bsctasahorros", require("./src/api/bsctasahorros/index"));
app.use("/api/bsutilsahorros", require("./src/api/bsutilsahorros/index"));
app.use("/api/bsbloqueosmasivosohpay", require("./src/api/bsbloqueosmasivosohpay/index"));

app.listen(3000, () => console.log("Servidor en puerto 3000"));


