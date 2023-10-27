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
exports.updateNote = exports.deleteNote = exports.addNote = exports.getSpecifNote = exports.getNotes = void 0;
const data_1 = require("../../data");
function getNotes() {
    return data_1.notes;
}
exports.getNotes = getNotes;
function getSpecifNote(id) {
    let note = data_1.notes.find((note) => note.id === id);
    if (note)
        return note;
    return null;
}
exports.getSpecifNote = getSpecifNote;
function addNote(note) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`before adding nots is ${data_1.notes}`);
        data_1.notes.push(note);
        console.log(`after adding nots is ${data_1.notes}`);
        return data_1.notes;
    });
}
exports.addNote = addNote;
function deleteNote(id) {
    let indexofNote = data_1.notes.findIndex((note) => note.id === id);
    if (indexofNote < 0) {
        return null;
    }
    else {
        data_1.notes.splice(indexofNote, 1);
        return indexofNote;
    }
}
exports.deleteNote = deleteNote;
function updateNote(id, body) {
    let indexOfNote = data_1.notes.findIndex((note) => note.id === id);
    if (indexOfNote >= 0) {
        data_1.notes[indexOfNote] = body;
        let success = true;
        return success;
    }
    else {
        return false;
    }
}
exports.updateNote = updateNote;
