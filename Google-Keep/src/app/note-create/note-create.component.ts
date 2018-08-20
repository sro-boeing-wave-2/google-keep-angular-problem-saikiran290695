import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service';
import {FormGroup, FormControl, FormBuilder, FormArray} from '@angular/forms';
import {Note} from '../Note';
import { Label } from '../Label';
import {Router} from '@angular/router';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {
  constructor(
    private noteservice : NotesService,
     private fb : FormBuilder,
    private router : Router
    ) { };

  // CreateNote = new FormGroup({
  //   Title : new FormControl(),
  //   Message: new FormControl(),
  //   IsPinned : new FormControl(),
  //   IsChecked : new FormControl(),
  //   Label : new FormControl(),
  //   CheckList : new FormControl()
  // });
  CreateNoteDF = this.fb.group({
    Title : [''],
    Message : [''],
    Pinned:[''],
    Label : this.fb.array([
      this.fb.group({
        label : ['']
      })
    ]),
    CheckList : this.fb.array([
      this.fb.group({
        Checklist : [''],
        IsChecked : ['']
      })
    ])
  });
  get Label(){
    return this.CreateNoteDF.get('Label') as FormArray;
  }
  addLabel(){
    this.Label.push(this.fb.group({
      label : ['']
    }));
  }
  get CheckList(){
    return this.CreateNoteDF.get('CheckList') as FormArray;
  }
  addCheckList(){
    this.CheckList.push(this.fb.group({Checklist : [''],
    IsChecked : ['']}));
  }
  onSubmit():void{
    this.GenerateNote();
    this.router.navigate(['']);
  }
  GenerateNote():void{
    console.log(this.CreateNoteDF.value);
    this.noteservice.post(this.CreateNoteDF.value as Note).subscribe(result => console.log(result.statusText));
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
