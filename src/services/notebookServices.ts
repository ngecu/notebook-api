import { notes } from "../../data";
import { Note } from "../types/interface";
import { dbConnectService } from "./dbConnectServices";
import sql from 'mssql'

export async function getNotes() {
  try {
      let connectionPool = await dbConnectService();
      let query = 'SELECT * FROM notes';

      let results = await connectionPool?.request().query(query);
      if(results){
        return results.recordset;
      }
      
  } catch (error) {
      console.error('Error retrieving notes from the database:', error);
      throw error; // You can handle or log the error as needed
  }
}



export async function getSpecifNote(id: number) {
  try {
      let connectionPool = await dbConnectService();
      let query = `SELECT * FROM notes WHERE note_id = ${id}`;

      let results = await connectionPool?.request().query(query);
      if (results) {
        if (results?.recordset?.length > 0) {
          return results?.recordset[0];
      } else {
          return null;
      }
      }
     
  } catch (error) {
      console.error('Error retrieving the specific note from the database:', error);
      throw error; // You can handle or log the error as needed
  }
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
