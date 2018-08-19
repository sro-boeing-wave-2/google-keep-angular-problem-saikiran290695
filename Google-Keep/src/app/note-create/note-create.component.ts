import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service';
import {FormGroup, FormControl} from '@angular/forms';
import {Note} from '../Note';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {
  constructor(private noteservice : NotesService) { };

  CreateNote = new FormGroup({
    Title : new FormControl(),
    Message: new FormControl(),
    IsChecked : new FormControl()
  });
  onSubmit():void{
    alert("form submitted successfully");
    this.GenerateNote();
  }
  note : Note= {
    Id : 112,
    Title : this.CreateNote.value.Title,
    Message : this.CreateNote.value.Message,
    Label : this.CreateNote.value.Label,
    CheckList : this.CreateNote.value.CheckList,
    IsPinned : this.CreateNote.value.IsChecked
  };
  _note : Note= {

      Id:1112,
      Title:"title-new",
      Message:"Message-new",
      Label:[{Label : "Label-1.1"},{Label :"Label-1.2"},{Label : "Label-1.3"}],
      CheckList : [{CheckList : "CheckList-1.1",IsChecked : false},{CheckList : "CheckList-1.2",IsChecked : false},{CheckList : "CheckList-1.3",IsChecked : false}],
      IsPinned : true
    };

  GenerateNote():void{
    console.log(this.CreateNote.value.IsChecked)
   // this.noteservice.post(this.note);
   // this.noteservice.post(this._note);
  }
  AddLabel():void{

  }
  ngOnInit() {
  }



}
