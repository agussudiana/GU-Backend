"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = require("./libs/errorHandler");
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const port = process.env.PORT;
const db_uri = process.env.DB_URI;
const app = (0, express_1.default)();
const publicDirectory = path_1.default.join(__dirname, "../public");
console.log({ publicDirectory });
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static(publicDirectory));
app.get("/", (_req, res) => {
    res.send("Groundup AI");
});
app.use(routes_1.default);
app.use(errorHandler_1.errorHandler);
mongoose_1.default.connect(db_uri, {}, () => {
    console.log("database connected");
    app.listen(port, () => {
        console.log("app runing at port " + port);
    });
});
module.exports = app;
