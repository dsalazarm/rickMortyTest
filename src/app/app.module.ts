import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDescriptionComponent } from './character-description/character-description.component';
import { HttpClientModule } from '@angular/common/http';
import {RickMortyService} from './rick-morty.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDescriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RickMortyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
