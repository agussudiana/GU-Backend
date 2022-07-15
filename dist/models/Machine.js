"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineModel = void 0;
const mongoose_1 = require("mongoose");
const models_1 = require("../const/models");
const machineSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
}, {
    timestamps: true,
});
exports.MachineModel = (0, mongoose_1.model)(models_1.ModelEnum.Machine, machineSchema);
