import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MainMenuModule } from './main-menu/main-menu.module';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MainMenuModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
