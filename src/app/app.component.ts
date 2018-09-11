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
  _postsArray = [];
  user4add = { email: 'programmerhany@gmail.com', id: 248, name: 'hany', phone: '00201229174436' };
  user4Edit = {};
  isEdit: boolean = false;
  constructor(public callapi: CallApiService) {
    this.calling();
  }

  calling() {
    this.callapi.getPost().subscribe(
      X => {
        this._postsArray = X;
      },
      error => {
        console.log('erorrrrrrrrr');
      },
      () => {
        console.log('Done');
      }
    );
  }

  adding() {
    this.callapi.putUser(this.user4add).subscribe(
      X => {
        this._postsArray.unshift(X);
      },
      error => {
        console.log('erorrrrrrrrr');
      },
      () => {
        console.log('Done');
      }
    );
  }
  DeleteItem(id) {
    this.callapi.removeUser(id).subscribe(
      X => {
        for (let index = 0; index < this._postsArray.length; index++) {
          if (this._postsArray[index].id == id) { this._postsArray.splice(index, 1); }
        }
      }
    )
  }
  EditItem(user) {
    this.isEdit = true;
    this._postsArray = user;
  }
}
