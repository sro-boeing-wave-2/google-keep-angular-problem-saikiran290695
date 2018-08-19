import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NotesDashboardComponent } from './notes-dashboard/notes-dashboard.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { AppRoutingModule } from './/app-routing.module';
import { NoteCreateComponent } from './note-create/note-create.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesDashboardComponent,
    NoteEditComponent,
    NoteCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
