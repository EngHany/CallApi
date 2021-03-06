import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CallApiService } from './call-api.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //CallApiService,
    HttpModule,
    FormsModule
  ],
  providers: [CallApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
