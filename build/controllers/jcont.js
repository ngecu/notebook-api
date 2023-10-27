"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskNote = exports.getNoteById = exports.getNotes = void 0;
const data_1 = require("../data");
function getNotes() {
    return data_1.notes;
}
exports.getNotes = getNotes;
function getNoteById(id) {
    let note = data_1.notes.find((note) => note.id === id);
    if (note)
        return note;
    return null;
}
exports.getNoteById = getNoteById;
function deleteTaskNote(id) {
    let indexofNote = data_1.notes.findIndex((note) => note.id === id);
    if (indexofNote < 0) {
        return null;
    }
    else {
        data_1.notes.splice(indexofNote, 1);
        return indexofNote;
    }
}
exports.deleteTaskNote = deleteTaskNote;
