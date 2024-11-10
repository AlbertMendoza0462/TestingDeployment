"use strict"
import express from "express";
import 'dotenv/config';
import path from 'path';
import ProductRouter from "../routes/ProductRouter.js";

const app = express()
const port = process.env.PORT || 3000

export function StartServer() {

    app.use(express.static("public"))
    app.use(express.json())

    app.use("/products", ProductRouter)

    app.get("*", (req, res) => {
        res.sendFile(path.join(path.resolve() + "/public"))
    })
    
    app.listen(port, () => {
        console.log(`Server started on:\nhttp://localhost:${port}`);
    })
}
