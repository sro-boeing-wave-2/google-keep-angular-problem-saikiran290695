import { Component, OnInit, Inject } from '@angular/core';
import {NotesService} from '../notes.service';
import {FormBuilder, FormArray} from '@angular/forms';
import {Note} from '../Note';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {
  constructor(
    private noteservice : NotesService,
     private fb : FormBuilder,
    private router : Router,
    private location : Location,
    public dialogRef: MatDialogRef<NoteCreateComponent>){}
  CreateNoteDF = this.fb.group({
    Title : [''],
    Message : [''],
    Pinned:["false"],
    Label : this.fb.array([
      this.fb.group({
        label : ['']
      })
    ]),
    CheckList : this.fb.array([
      this.fb.group({
        Checklist : [''],
        IsChecked : ["false"]
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
    IsChecked : ["false"]}));
  }
  onSubmit():void{
    this.GenerateNote();
    this.dialogRef.close();
  }
  goBack(){
    this.dialogRef.close();
  }
  GenerateNote():void{
    console.log(this.CreateNoteDF.value);
    this.noteservice.post(this.CreateNoteDF.value as Note).subscribe(result => {
      console.log(result.statusText)
      this.router.navigate(['']);
    });
  }
  AddLabel():void{

  }


  ngOnInit() {
  }



}
