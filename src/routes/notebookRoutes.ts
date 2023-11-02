import { Router, Request, Response } from "express";
import { addNote, deleteNote, getAllNotes, getSpecifNote, TestingRoute, updateNote } from "../controllers/notebookControllers";


const noterouter: Router  = Router()

noterouter.get('/', TestingRoute)
noterouter.get("/all", getAllNotes)
noterouter.get('/:note_id', getSpecifNote)
noterouter.delete("/:note_id", deleteNote)
noterouter.post("/", addNote)
noterouter.put("/:note_id", updateNote)





export default noterouter;