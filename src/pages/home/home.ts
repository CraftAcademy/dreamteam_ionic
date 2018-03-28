import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { resolvePtr } from 'dns';
import 'rxjs/add/operator/map';
//import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  obj = {
    title: "My amazing article",
    content: "Lorem ipsum dolor amet readymade gluten-free shoreditch..",
    image: "../assets/imgs/article-image-mock.jpg",
    categories: "Fashion, Tech, Sports"
  };

  private apiUrl: string = 'http://localhost:3000/api/v0/articles';
  // private apiUrl: string = 'https://dreamteam-publications.herokuapp.com/api/v0/articles';
  articles: any[];
  categories: any[];

  constructor(private http: Http, navCtrl: NavController) {
    // Get some articles from API and store them in data
  
    this.http.get(this.apiUrl)
             .map((response: Response) => response.json())
             .subscribe(articles => {
                console.log(articles);
                this.articles = articles.data;
             });
  }

}
