"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReasonModel = void 0;
const mongoose_1 = require("mongoose");
const models_1 = require("../const/models");
const ReasonSchema = new mongoose_1.Schema({
    machine: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: models_1.ModelEnum.Machine,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.ReasonModel = (0, mongoose_1.model)(models_1.ModelEnum.Reason, ReasonSchema);
