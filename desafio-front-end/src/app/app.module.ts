import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';

import {PerfisServicesService} from './perfis-services.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaPessoasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ PerfisServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
