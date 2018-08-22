import { Injectable } from '@angular/core';
import {Note} from './Note';
import {Http} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  _Notes : Note[];
  getNotes()
  {
    return this.http.get("https://localhost:5001/api/Notes");
  }
  getNoteById(Id){
     return this.http.get("https://localhost:5001/api/Notes?Id="+Id);
  }
  put(note:Note, Id : number){
    return this.http.put("https://localhost:5001/api/Notes/"+Id, note);
    //console.log("updated")
  }
  post(note:Note){
    return this.http.post("https://localhost:5001/api/Notes", note);
  }
  delete(Id:number)
  {
    return this.http.delete("https://localhost:5001/api/Notes?Id="+Id);
  }
  constructor(private http : Http) {}
}







