import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  obj = {
    "title": "My amazing article",
    "content": "Lorem ipsum dolor amet readymade gluten-free shoreditch..",
    "image": "../assets/imgs/article-image-mock.jpg",
    "categories": "Fashion, Tech, Sports"
  }

  constructor(public navCtrl: NavController) {

  }

}
