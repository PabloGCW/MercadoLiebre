const express = require("express");
const path = require("path");
const app = express();


const publicPath = path.resolve("./public");
app.use(express.static(publicPath));

app.listen(3000, ()  => console.log("Servidor Corriendo en el puerto 3000"))


app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/home.html"));
})

app.post("/", (req, res) => {
    res.sendFile(path.resolve("./views/home.html"));
})

app.get("/creaTuCuenta", (req, res) => {
    res.sendFile(path.resolve("./views/register.html"));
})

app.get("/ingresa", (req, res) => {
    res.sendFile(path.resolve("./views/login.html"));
})