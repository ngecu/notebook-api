import { notes } from "../../data";
import { Note } from "../Types/interface";
import { dbConnectService } from "./dbConnectServices";
import sql from 'mssql'

export function getNotes(){
      return notes;
    }

    export function getSpecifNote(id: number){
      let note = notes.find((note)=>note.id===id)
      if(note)return note;
      return null
    }

    export async function addNote(note: Note){
        let { id, title, content,createdAt } = note;
        let connectionPool = await dbConnectService();
        let query = `INSERT INTO notes (note_id, title, content,createdAt) VALUES ('${id}', '${title}', '${content}','${createdAt}')`;
  
        connectionPool?.connect(async(err)=>{
          if(err){
            console.log(err)
          }else{
           let results = await  connectionPool?.request()
                                               .query(query)
           console.log(results)
          }
      }
        )}
      


          
        export async function updateNote(note: Note) {
  const { id, title, content, createdAt } = note;
  const connectionPool = await dbConnectService();

 
    const query = `
      UPDATE notes 
      SET title = '${title}', content = '${content}', createdAt = '${createdAt}'
      WHERE note_id = '${id}'
    `;
    connectionPool?.connect(async (err) => {
      if (err) {
        console.log(err);
      } else {
        const results = await connectionPool?.request().query(query);
        console.log(results);
      }
    });
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
