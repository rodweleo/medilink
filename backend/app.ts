import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Server")
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is live at port ${process.env.SERVER_PORT}`)
})
