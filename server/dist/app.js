"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const conversations_1 = __importDefault(require("./routes/conversations"));
const app = express_1.default();
app.use(body_parser_1.json());
app.use("/conversations", conversations_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        additional: "C'mon man, just follow the rules!",
    });
});
app.listen(5000, () => {
    console.log("Server listening on port 5000");
});
