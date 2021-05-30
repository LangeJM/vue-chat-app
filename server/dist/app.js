"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importStar(require("express"));
// previously >> import { json } from "body-parser";
const conversations_1 = __importDefault(require("./routes/conversations"));
const users_1 = __importDefault(require("./routes/users"));
const db_1 = require("./db/db");
const colors_1 = __importDefault(require("colors"));
dotenv_1.default.config();
db_1.connectDB();
colors_1.default.enable();
const app = express_1.default();
app.use(express_1.json());
app.use("/conversations", conversations_1.default);
app.use("/users", users_1.default);
// error object has status? Implement!
// use next
app.use((err, req, res, next) => {
    res.status(res.statusCode || 500).json({
        message: err.message,
    });
    next();
});
const server = app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`.cyan);
});
// Will stop the program if unhandled exception, here to stop if there's a db auth problem
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
});
