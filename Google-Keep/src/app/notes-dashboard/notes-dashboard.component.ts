import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service';
import {Note} from '../Note';
import {Location} from '@angular/common';
// import{NoteCreateComponent} from '../note-create/note-create.component';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {NoteCreateComponent} from '../note-create/note-create.component';
import {NoteEditComponent} from '../note-edit/note-edit.component';
//import { Http } from '@angular/http';
@Component({
  selector: 'app-notes-dashboard',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.css']
})
export class NotesDashboardComponent implements OnInit {

  constructor(private notes: NotesService,
     private router:Router,
    private dialog: MatDialog ) {}
  Notes : Note[];
  SelectedNote : Note;

  ngOnInit() {
    this.getNotes();
    console.log("dashboard");
  }
  getNotes(){
    this.notes.getNotes().subscribe(result => this.Notes = result.json());
  }
  delete(Id:number){
    this.notes.delete(Id).subscribe(result=> { console.log(result.statusText)
    this.getNotes();
    });
  }
  EditNote(note : Note) : void{
    this.SelectedNote = note;
  }
  NoteToPost : Note;
  dialogClick(note : number)
  {
    let dialog = this.dialog.open(NoteCreateComponent);
    dialog.afterClosed().subscribe(result => {
      this.NoteToPost = result;
      this.getNotes();
      console.log("hello" + result);
    });
  }
  Popedit(note : Note){
    let dialog = this.dialog.open(NoteEditComponent, {data : note});
    dialog.afterClosed().subscribe(response => {console.log("edit Success");this.getNotes();});
  }


}
