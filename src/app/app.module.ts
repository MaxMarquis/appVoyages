import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgRatingBarModule } from 'ng-rating-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniForfaitComponent } from './components/mini-forfait/mini-forfait.component';
import { ForfaitCompletComponent } from './components/forfait-complet/forfait-complet.component';
import { EtoilesComponent } from './components/etoiles/etoiles.component';
import { FormulaireGestionComponent } from './components/formulaire-gestion/formulaire-gestion.component';
import { FormulaireRechercheComponent } from './components/formulaire-recherche/formulaire-recherche.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    EtoilesComponent,
    FormulaireGestionComponent,
    FormulaireRechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    NgRatingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
