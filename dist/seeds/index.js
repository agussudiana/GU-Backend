"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Machine_seed_1 = require("./Machine.seed");
const dotenv_1 = __importDefault(require("dotenv"));
const Action_seed_1 = require("./Action.seed");
const Reason_seed_1 = require("./Reason.seed");
const Anomaly_seed_1 = require("./Anomaly.seed");
dotenv_1.default.config();
const db_uri = process.env.DB_URI;
console.log(db_uri);
mongoose_1.default.connect(db_uri, {}, () => {
    console.log("database connected");
});
const seedDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, Machine_seed_1.seedMachine)();
    yield (0, Action_seed_1.seedAction)();
    yield (0, Reason_seed_1.seedReason)();
    yield (0, Anomaly_seed_1.seedAnomaly)();
    console.log("data inserted");
});
seedDB().then(() => {
    mongoose_1.default.connection.close();
});
