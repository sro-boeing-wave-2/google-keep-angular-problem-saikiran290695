import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service';
import {Note} from '../Note';
@Component({
  selector: 'app-notes-dashboard',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.css']
})
export class NotesDashboardComponent implements OnInit {

  constructor(private notes: NotesService) { }
  Notes : Note[];
  SelectedNote : Note;
  ngOnInit() {
    this.getNotes();
  }
  getNotes(){
    this.notes.getNotes().subscribe(notes => this.Notes = notes);
   // console.log(this.notes.getNotes().subscribe(notes => this.Notes = notes as Note[]));
  }
  EditNote(note : Note) : void{
    this.SelectedNote = note;
  }
}
