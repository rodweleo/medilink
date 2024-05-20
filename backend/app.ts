import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: ["http://localhost:5173, https://medilink.vercel.app"]
}))

app.get("/", (req, res) => {
    res.send("Server is live")
})

app.listen(8080, () => {
    console.log(`Server is live on port ${8080}`)
})