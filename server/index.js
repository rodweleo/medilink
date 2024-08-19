const express = require("express");
const dotenv = require("dotenv")
const path = require("path")

const { config } = dotenv;
config();

const app = express();

// Serve static files from the public directory
app.use(express.static(path.resolve(__dirname, '../frontend/dist')));

// Serve the index.html file for all routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
});

app.get("/hello", (req, res) => {
    res.send("<div>Hello</div>")
})
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`[server]: Server listening on PORT ${PORT}`);
});
