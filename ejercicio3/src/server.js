import express from "express";

const app = express();

app.listen(2023, () => console.log("Server running on port 2023..."));

app.get("/", (req, res) => {
    res.send("<h1>Gonzalo Gómez</h1>");
})

app.get("/materia", (req, res) => {
    res.send("<h1>Aplicaciones Hibridas</h1>");
})

app.get("/profesor", (req, res) => {
    res.send("<h1>Camila Belen Marcos Galbán</h1>");
})