import { Injectable } from '@angular/core';
import {Note} from './Note';
import {Notes} from './Mock-NoteDB';
import {Observable, of} from 'rxjs';
import {Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public _Notes : Note[];
  getNotes() : Observable<Note []>
  {
    return  of (Notes);
  }
  getNoteById(Id) : Observable<Note>{
    return of (Notes.find(Notes => Notes.Id == Id));
  }
  post(note:Note):void{
    Notes.push(note);
  }
  constructor() { }
}
