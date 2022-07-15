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
exports.AnomalyService = void 0;
const Anomaly_1 = require("../models/Anomaly");
class AnomalyService {
    findAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Anomaly_1.AnomalyModel.find(query.machineId
                ? {
                    machine: query.machineId,
                }
                : {}).populate(["machine", "reason", "action"]);
            return result;
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const anomaly = yield Anomaly_1.AnomalyModel.findById(id);
            if (anomaly) {
                anomaly.reason = body.reason ? body.reason : null;
                anomaly.action = body.action ? body.action : null;
                anomaly.comment = body.comment;
                yield anomaly.save();
                return anomaly;
            }
            else {
                throw new Error("Not Found");
            }
        });
    }
}
exports.AnomalyService = AnomalyService;
