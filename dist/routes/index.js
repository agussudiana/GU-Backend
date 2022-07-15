"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Action_route_1 = __importDefault(require("./Action.route"));
const Anomaly_route_1 = __importDefault(require("./Anomaly.route"));
const Machine_route_1 = __importDefault(require("./Machine.route"));
const Reason_route_1 = __importDefault(require("./Reason.route"));
const indexRouter = express_1.default.Router();
indexRouter.use("/anomaly", Anomaly_route_1.default);
indexRouter.use("/machine", Machine_route_1.default);
indexRouter.use("/action", Action_route_1.default);
indexRouter.use("/reason", Reason_route_1.default);
exports.default = indexRouter;
