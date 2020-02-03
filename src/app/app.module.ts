import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { TooltipModule } from 'primeng/tooltip';
import { MultiSelectModule } from 'primeng/multiselect';
import { MyTableComponent } from './my-table.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
    TableModule,
    CheckboxModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    FieldsetModule,
    TooltipModule,
    MultiSelectModule
  ],
  declarations: [ AppComponent, HelloComponent, MyTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
