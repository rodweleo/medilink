"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("Hello Server");
});
app.listen(process.env.SERVER_PORT, function () {
    console.log("Server is live at port ".concat(process.env.SERVER_PORT));
});
