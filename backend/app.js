import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()
const app = express();

app.use(cors({
    origin: ["*"]
}))

app.get("/", (req, res) => {
    res.send(`API Endpoints are live`)
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`[server]: Server is listening at port ${process.env.SERVER_PORT}`)
})