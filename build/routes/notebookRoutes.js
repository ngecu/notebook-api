"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notebookControllers_1 = require("../controllers/notebookControllers");
const noterouter = (0, express_1.Router)();
noterouter.get('/', notebookControllers_1.TestingRoute);
noterouter.get("/", notebookControllers_1.getAllNotesController);
noterouter.get('/:noteID', notebookControllers_1.getSpecificNoteController);
noterouter.delete("/:noteID", notebookControllers_1.deleteNoteController);
noterouter.post("/", notebookControllers_1.addNoteController);
noterouter.put("/:noteID", notebookControllers_1.updateNoteController);
exports.default = noterouter;