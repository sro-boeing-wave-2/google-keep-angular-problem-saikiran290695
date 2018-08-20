import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service';
import {FormGroup, FormControl} from '@angular/forms';
import {Note} from '../Note';
import { Label } from '../Label';

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
  GenerateNote():void{


    console.log(this.CreateNote.value.Title)
  }
  addmore():void
  {

    document.getElementById("Note_Label").innerHTML +=`<label>Label</label>
    <input type="text" class="form-control" formControlName="Label">`;
  }
  AddLabel():void{

  }
  ngOnInit() {
  }



}
