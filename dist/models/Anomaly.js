"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnomalyModel = void 0;
const mongoose_1 = require("mongoose");
const models_1 = require("../const/models");
const AnomalySchema = new mongoose_1.Schema({
    timestamp: {
        type: Number,
        required: true,
    },
    machine: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: models_1.ModelEnum.Machine,
        required: true,
    },
    anomaly: {
        type: String,
        required: true,
    },
    sensor: {
        type: Number,
        required: true,
    },
    soundClip: {
        type: String,
        required: true,
    },
    reason: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: models_1.ModelEnum.Reason,
    },
    action: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: models_1.ModelEnum.Action,
    },
    comment: String,
    status: String,
}, {
    timestamps: true,
});
exports.AnomalyModel = (0, mongoose_1.model)(models_1.ModelEnum.Anomaly, AnomalySchema);
