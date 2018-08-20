import { Injectable } from '@angular/core';
import {Note} from './Note';
//import {Notes} from './Mock-NoteDB';
import {Observable, of} from 'rxjs';
import {Http} from '@angular/http';
import { promise } from 'protractor';
import { get } from 'http';
import { Body } from '@angular/http/src/body';
//import {HttpClient, HttpResponse} from '@angular/common/http';

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
  constructor(private http : Http) {

  }
}
