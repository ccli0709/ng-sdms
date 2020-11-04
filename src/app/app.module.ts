import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// 使用BS4,但不引用JQUERY
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Component
import { SoftwareListComponent } from './software/software-list/software-list.component';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    SoftwareListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //
    NgbModule,
    // PrimeNG
    RadioButtonModule,
    ButtonModule,
    InputMaskModule,
    DropdownModule,
    CardModule,
    ToolbarModule,
    InputTextModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
