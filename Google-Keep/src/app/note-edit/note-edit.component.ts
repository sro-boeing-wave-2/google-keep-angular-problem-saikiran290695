import { Component, OnInit, Input } from '@angular/core';
import {Note} from '../Note';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {NotesService} from '../notes.service';
@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  //@Input() note : Note;
  TempNote : Note;
  note : Note;
  constructor(
    private noteservice : NotesService,
    private route :ActivatedRoute,
    private location :Location
  ) { }
  goBack():void{
    this.location.back();

  }
  ngOnInit() {
    this.getNote();
  }
  getNote() : void
  {
    const Id = +this.route.snapshot.paramMap.get("id");
   this.noteservice.getNoteById(Id).subscribe(note => this.note = note);
  }



}
