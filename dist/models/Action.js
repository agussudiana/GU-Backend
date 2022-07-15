"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionModel = void 0;
const mongoose_1 = require("mongoose");
const models_1 = require("../const/models");
const ActionSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.ActionModel = (0, mongoose_1.model)(models_1.ModelEnum.Action, ActionSchema);
