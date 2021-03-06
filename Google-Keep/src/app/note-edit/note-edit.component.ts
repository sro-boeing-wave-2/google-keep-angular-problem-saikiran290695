import { Component, OnInit, Input, Inject } from '@angular/core';
import { Note } from '../Note';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NotesService } from '../notes.service';
import { FormBuilder, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  TempNote: Note;
  notes: Note[];
  id: number;
  constructor(
    private noteservice: NotesService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NoteEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number) {
    console.log(data);
    this.getNote();
  }
  EditForm = this.fb.group({
    Id: [''],
    Title: [''],
    Message: [''],
    Pinned: ["false"],
    CheckList: this.fb.array([]),
    Label: this.fb.array([])
  });
  get Label() {
    return this.EditForm.get('Label') as FormArray;
  }
  addLabel() {
    this.Label.push(this.fb.group({
      label: ['']
    }));
  }
  get CheckList() {
    return this.EditForm.get('CheckList') as FormArray;
  }
  addCheckList() {
    this.CheckList.push(this.fb.group({
      Checklist: [''],
      IsChecked: ["false"]
    }));
  }
  goBack(): void {
    this.dialogRef.close();
  }
  ngOnInit() {

  }
  getNote(): void {
    const Id = this.data;
    this.noteservice.getNoteById(Id).subscribe(notes => {
      this.notes = notes.json();
      notes.json()[0].checkList.forEach(element => {
        this.addCheckList();
      });
      notes.json()[0].label.forEach(element => {
        this.addLabel();
      });
    });
  }
  saveDetails(Id: number) {
    console.log(Id);
    console.log(this.EditForm.value as Note);
    this.noteservice.put(this.EditForm.value as Note, Id).subscribe(result => console.log(result.status));
    this.dialogRef.close();
  }

}
