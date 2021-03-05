import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntelPrincipalComponent } from './pages/intel-principal/intel-principal.component';
import { TableComponent } from './helpers/tables/table/table.component';
import { AddPeopleComponent } from './helpers/formulary/add-people/add-people.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IntelPrincipalComponent,
    TableComponent,
    AddPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
