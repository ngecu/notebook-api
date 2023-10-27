import { notes } from "../../data";
import { Note } from "../Types/interface";


export function getNotes(){
      return notes;
    }

    export function getSpecifNote(id: number){
      let note = notes.find((note)=>note.id===id)
      if(note)return note;
      return null
    }

    export async function addNote(note: Note){
        console.log(`before adding nots is ${notes}`);
        
      notes.push(note)

      console.log(`after adding nots is ${notes}`);
        
      return notes
      }
      


          


      

    

    export function deleteNote(id: number){
      let indexofNote = notes.findIndex((note)=>note.id === id)

      if(indexofNote<0){
        return null
      }else{
        notes.splice(indexofNote, 1)
        return indexofNote
      }
    }


    export function updateNote(id:number, body:Note){
      let indexOfNote = notes.findIndex((note)=>note.id===id)

      if(indexOfNote>=0){
        notes[indexOfNote] = body;
        let success = true
        return success
      }else{
        return false
      }
    }