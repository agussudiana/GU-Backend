import { AnomalyModel } from "../models/Anomaly";
import { machine_id_1, machine_id_2 } from "./Machine.seed";

const anomalies = [
  {
    timestamp: 1628676001,
    machine: machine_id_1,
    anomaly: "Mild",
    sensor: 1234567890,
    soundClip: "1.wav",
  },
  {
    timestamp: 1629102961,
    machine: machine_id_1,
    anomaly: "Moderate",
    sensor: 1123456789,
    soundClip: "2.wav",
  },
  {
    timestamp: 1629058322,
    machine: machine_id_1,
    anomaly: "Severe",
    sensor: 1234567890,
    soundClip: "3.wav",
  },
  {
    timestamp: 1629057722,
    machine: machine_id_2,
    anomaly: "Mild",
    sensor: 1122334455,
    soundClip: "4.wav",
  },
  {
    timestamp: 1628676001,
    machine: machine_id_2,
    anomaly: "Moderate",
    sensor: 2345678900,
    soundClip: "5.wav",
  },
  {
    timestamp: 1628676001,
    machine: machine_id_2,
    anomaly: "Severe",
    sensor: 2345678900,
    soundClip: "6.wav",
  },
];

export const seedAnomaly = async () => {
  await AnomalyModel.deleteMany();
  await AnomalyModel.insertMany(anomalies);
};
