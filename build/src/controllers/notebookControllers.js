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
exports.updateNoteController = exports.addNoteController = exports.deleteNoteController = exports.getSpecificNoteController = exports.getAllNotesController = exports.TestingRoute = void 0;
const notebookServices_1 = require("../services/notebookServices");
function TestingRoute(req, res) {
    return res.send("Server Running well");
}
exports.TestingRoute = TestingRoute;
function getAllNotesController(req, res) {
    let notes = (0, notebookServices_1.getNotes)();
    res.json(notes);
}
exports.getAllNotesController = getAllNotesController;
function getSpecificNoteController(req, res) {
    let noteID = parseInt(req.params.noteID);
    let note = (0, notebookServices_1.getSpecifNote)(noteID);
    res.json(note);
}
exports.getSpecificNoteController = getSpecificNoteController;
function deleteNoteController(req, res) {
    let { noteID } = req.params;
    let parsedID = parseInt(noteID);
    let result = (0, notebookServices_1.deleteNote)(parsedID);
    if (result !== null) {
        res.send(`Note on index: ${result} deleted`);
    }
    else {
        res.send("Note not found");
    }
}
exports.deleteNoteController = deleteNoteController;
function addNoteController(req, res) {
    let new_note = req.body;
    (0, notebookServices_1.addNote)(new_note);
    res.json({
        id: new_note.id,
        sucess: true
    });
}
exports.addNoteController = addNoteController;
function updateNoteController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let { noteID } = req.params;
            let parsedID = parseInt(noteID);
            let updatedNote = req.body;
            yield (0, notebookServices_1.updateNote)(updatedNote);
            return res.json({
                id: parsedID,
                success: true,
            });
        }
        catch (error) {
            res.json(error);
        }
    });
}
exports.updateNoteController = updateNoteController;
