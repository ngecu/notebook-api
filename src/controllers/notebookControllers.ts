import { Response, Request } from "express"
import mssql from 'mssql'
import {  sqlConfig } from "../config/sqlConfig";



export function TestingRoute(req:Request, res:Response){
      return res.send("Server Running well")
}

export async function getAllNotes(req:Request, res:Response) {
      try {
            const checkNoteQuery = `SELECT * FROM notes`;
    
            mssql.connect(sqlConfig)
            .then(pool => {
                return pool.request().query(checkNoteQuery);
            })
            .then(async result => {
                if (result.recordset.length > 0) {
                    console.log("success", result);
    
                    return res.status(200).json(result.recordset)
    
                }
    
        })
            
        } catch (error) {
            return res.json({
                error: error
            })
        }
    }
    
    
    
    export async function getSpecifNote(req:Request, res:Response) {
      const note_id = req.params.note_id;

      try {
          const query = `SELECT * FROM notes WHERE note_id = '${note_id}'`;
  
          const pool = await mssql.connect(sqlConfig);
          const result = await pool.request().query(query);
  
          if (result.recordset.length === 0) {
              return res.status(404).json({ error: 'Note not found' });
          }
  
          const specificNote = result.recordset[0];
  
          return res.status(200).json(specificNote);
      } catch (error) {
          console.error(error);
          return res.status(500).json({ error: 'An error occurred while fetching the note profile' });
      }
  };
    
    
    
        export async function addNote(req: Request, res: Response){
            let { id, title, content } = req.body;
            let query = `INSERT INTO notes (note_id, title, content) VALUES ('${id}', '${title}', '${content}')`;
      
            mssql.connect(sqlConfig).then(pool => {
                  return pool.request().query(query);
              }).then(result => {
                  console.log("success", result);
            }).catch(err => {
                  console.log(err);
      
                
                  return res.status(500).json({
                      error: err.message || 'An error occurred while registering the note.'
                  });
              });
                  
            }
            
          
    
    
              
            export async function updateNote(req: Request, res: Response) {
                  try {
                      let { id, title, content } = req.body;
                      let query = `
                          UPDATE notes 
                          SET title = '${title}', content = '${content}'
                          WHERE note_id = '${id}'
                      `;
              
                      mssql.connect(sqlConfig)
                          .then(pool => {
                              return pool.request().query(query);
                          })
                          .then(result => {
                              console.log("Note updated successfully", result);
                              res.status(200).json({ message: 'Note updated successfully' });
                          })
                          .catch(err => {
                              console.log(err);
                              res.status(500).json({ error: err.message || 'An error occurred while updating the note.' });
                          });
                  } catch (error) {
                      console.log(error);
                      res.status(500).json({ error: 'An error occurred while processing the request.' });
                  }
              }
              
    
    
              export const deleteNote = async (req: Request, res: Response) => {
                  const note_id = req.params.note_id;
              
                  try {
                      // Check if the note exists before attempting the delete
                      const checkNoteQuery = `SELECT * FROM notes WHERE note_id = '${note_id}'`;
              
                      const pool = await mssql.connect(sqlConfig);
                      const checkResult = await pool.request().query(checkNoteQuery);
              
                      if (checkResult.recordset.length === 0) {
                          return res.status(404).json({ error: 'Note not found' });
                      }
              
                      // Delete the note
                      const deleteQuery = `DELETE FROM notes WHERE note_id = '${note_id}'`;
              
                      const deleteResult = await pool.request().query(deleteQuery);
              
                      return res.status(200).json({ message: 'Note deleted successfully' });
                  } catch (error) {
                      console.error(error);
                      return res.status(500).json({ error: 'An error occurred while deleting the note' });
                  }
              };
    