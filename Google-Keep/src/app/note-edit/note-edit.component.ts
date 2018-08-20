import { Component, OnInit, Input } from '@angular/core';
import {Note} from '../Note';
import {ActivatedRoute, Router} from '@angular/router';
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
  notes : Note[];
  constructor(
    private noteservice : NotesService,
    private route :ActivatedRoute,
    private location :Location,
    private router: Router
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
    this.noteservice.getNoteById(Id).subscribe(notes =>{ this.notes = notes.json();console.log(this.notes);});
  }

  saveDetails(note : Note, Id : number){
    console.log(note);
    // console.log(Id);
    this.noteservice.post(note, Id).subscribe(result => console.log(result.status));
    //this.location.back();
    this.router.navigate(['']);
  }
}
