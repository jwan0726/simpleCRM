import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { HightlightDirective } from './hightlight.directive';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { BindingInterpolComponent } from './binding-interpol/binding-interpol.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutingBasicComponent } from './routing-basic/routing-basic.component';
import { UsersModule } from './users/users.module';
@NgModule({
  declarations: [
    AppComponent,
    HightlightDirective,
    HeaderComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    BindingInterpolComponent,
    PipesComponent,
    RoutingBasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
