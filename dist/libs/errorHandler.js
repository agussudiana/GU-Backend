"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, _req, res, _next) => {
    console.log(err);
    res.status(500);
    res.json({
        err: err.message || err,
    });
};
exports.errorHandler = errorHandler;
