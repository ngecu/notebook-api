"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notebookRoutes_1 = __importDefault(require("./src/routes/notebookRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/notes', notebookRoutes_1.default);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on  ${port}`));
