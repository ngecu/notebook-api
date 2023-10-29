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
exports.deleteNote = exports.updateNote = exports.addNote = exports.getSpecifNote = exports.getNotes = void 0;
const data_1 = require("../../data");
const dbConnectServices_1 = require("./dbConnectServices");
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
        let { id, title, content, createdAt } = note;
        let connectionPool = yield (0, dbConnectServices_1.dbConnectService)();
        let query = `INSERT INTO notes (note_id, title, content,createdAt) VALUES ('${id}', '${title}', '${content}','${createdAt}')`;
        connectionPool === null || connectionPool === void 0 ? void 0 : connectionPool.connect((err) => __awaiter(this, void 0, void 0, function* () {
            if (err) {
                console.log(err);
            }
            else {
                let results = yield (connectionPool === null || connectionPool === void 0 ? void 0 : connectionPool.request().query(query));
                console.log(results);
            }
        }));
    });
}
exports.addNote = addNote;
function updateNote(note) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id, title, content, createdAt } = note;
        const connectionPool = yield (0, dbConnectServices_1.dbConnectService)();
        const query = `
      UPDATE notes 
      SET title = '${title}', content = '${content}', createdAt = '${createdAt}'
      WHERE note_id = '${id}'
    `;
        connectionPool === null || connectionPool === void 0 ? void 0 : connectionPool.connect((err) => __awaiter(this, void 0, void 0, function* () {
            if (err) {
                console.log(err);
            }
            else {
                const results = yield (connectionPool === null || connectionPool === void 0 ? void 0 : connectionPool.request().query(query));
                console.log(results);
            }
        }));
    });
}
exports.updateNote = updateNote;
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
