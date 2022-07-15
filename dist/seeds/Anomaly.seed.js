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
exports.seedAnomaly = void 0;
const Anomaly_1 = require("../models/Anomaly");
const Machine_seed_1 = require("./Machine.seed");
const anomalies = [
    {
        timestamp: 1628676001,
        machine: Machine_seed_1.machine_id_1,
        anomaly: "Mild",
        sensor: 1234567890,
        soundClip: "1.wav",
        status: "new",
    },
    {
        timestamp: 1629102961,
        machine: Machine_seed_1.machine_id_1,
        anomaly: "Moderate",
        sensor: 1123456789,
        soundClip: "2.wav",
        status: "new",
    },
    {
        timestamp: 1629058322,
        machine: Machine_seed_1.machine_id_1,
        anomaly: "Severe",
        sensor: 1234567890,
        soundClip: "3.wav",
        status: "viewed",
    },
    {
        timestamp: 1629057722,
        machine: Machine_seed_1.machine_id_2,
        anomaly: "Mild",
        sensor: 1122334455,
        soundClip: "4.wav",
        status: "viewed",
    },
    {
        timestamp: 1628676001,
        machine: Machine_seed_1.machine_id_2,
        anomaly: "Moderate",
        sensor: 2345678900,
        soundClip: "5.wav",
        status: "viewed",
    },
    {
        timestamp: 1628676001,
        machine: Machine_seed_1.machine_id_2,
        anomaly: "Severe",
        sensor: 2345678900,
        soundClip: "6.wav",
        status: "viewed",
    },
];
const seedAnomaly = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Anomaly_1.AnomalyModel.deleteMany();
    yield Anomaly_1.AnomalyModel.insertMany(anomalies);
});
exports.seedAnomaly = seedAnomaly;
