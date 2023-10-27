"use strict";
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
    let { noteID } = req.params;
    let parsedID = parseInt(noteID);
    let updatedNote = req.body;
    let result = (0, notebookServices_1.updateNote)(parsedID, updatedNote);
    if (result) {
        return res.json({
            id: parsedID,
            success: true
        });
    }
    return res.json({
        success: false
    });
}
exports.updateNoteController = updateNoteController;
