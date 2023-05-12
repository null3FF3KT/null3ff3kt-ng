import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNull3ff3ktComponentComponent } from './main-null3ff3kt-component/main-null3ff3kt-component.component';
import { ProfileNull3ff3ktComponent } from './profile/profile.component';
import { TechToolsComponent } from './tech-tools/tech-tools.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNull3ff3ktComponentComponent,
    ProfileNull3ff3ktComponent,
    TechToolsComponent,
    TicTacToeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
