import { Component } from '@angular/core';
import { CallApiService } from "./call-api.service";
import { NEXT } from '@angular/core/src/render3/interfaces/view';
import { error } from 'protractor';
import { FormsModule } from "@angular/forms";
import { IPosts } from "./IPosts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CallApi';
  //_postsArray: IPosts[];
  _postsArray=[];
  constructor(private callapi: CallApiService) {

  }

  calling() {
    this.callapi.getPost().subscribe(
      NEXT => {
        this._postsArray = NEXT;
      },
      error => {
        console.log('erorrrrrrrrr');
      },
      () => {
        console.log('Done');
      }
    );
  }

}
