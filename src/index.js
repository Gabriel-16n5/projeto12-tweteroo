import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (request, response) => {




    response.send("oi")
})

app.listen(5000, () => console.log("servidor rodando na porta 5000"))