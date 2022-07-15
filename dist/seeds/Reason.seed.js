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
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedReason = void 0;
const Reason_1 = require("../models/Reason");
const Machine_seed_1 = require("./Machine.seed");
const reasons = [
    {
        machine: Machine_seed_1.machine_id_1,
        reason: "Spindle Error",
    },
    {
        machine: Machine_seed_1.machine_id_1,
        reason: "Axis Problem",
    },
    {
        machine: Machine_seed_1.machine_id_1,
        reason: "Normal",
    },
    {
        machine: Machine_seed_1.machine_id_2,
        reason: "Machine Crash",
    },
    {
        machine: Machine_seed_1.machine_id_2,
        reason: "Router Fault",
    },
    {
        machine: Machine_seed_1.machine_id_2,
        reason: "Normal",
    },
];
const seedReason = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Reason_1.ReasonModel.deleteMany();
    yield Reason_1.ReasonModel.insertMany(reasons);
});
exports.seedReason = seedReason;
