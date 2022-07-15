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
exports.seedMachine = exports.machine_id_2 = exports.machine_id_1 = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Machine_1 = require("../models/Machine");
exports.machine_id_1 = new mongoose_1.default.Types.ObjectId();
exports.machine_id_2 = new mongoose_1.default.Types.ObjectId();
const machines = [
    {
        _id: exports.machine_id_1,
        name: "CNC Machine",
    },
    {
        _id: exports.machine_id_2,
        name: "Milling Machine",
    },
];
const seedMachine = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Machine_1.MachineModel.deleteMany();
    yield Machine_1.MachineModel.insertMany(machines);
});
exports.seedMachine = seedMachine;
