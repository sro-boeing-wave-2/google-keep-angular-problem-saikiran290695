import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service';
import {Note} from '../Note';
import {Location} from '@angular/common';
import {Route} from '@angular/router';
//import { Http } from '@angular/http';
@Component({
  selector: 'app-notes-dashboard',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.css']
})
export class NotesDashboardComponent implements OnInit {

  constructor(private notes: NotesService ) {}
  Notes : Note[];
  SelectedNote : Note;
  ngOnInit() {
    this.getNotes();
    //this.route.redirectTo = "Dashboard";
    console.log("Dashboard");
  }
   getNotes(){
    this.notes.getNotes().subscribe(result => this.Notes = result.json());
  }
  EditNote(note : Note) : void{
    this.SelectedNote = note;
  }
}
