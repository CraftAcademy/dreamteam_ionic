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
  // private apiUrl: string = 'http://localhost:3000/api/v1/articles';
  private apiUrl: string = 'https://dreamteam-publications.herokuapp.com/api/v1/articles';
  articles: any[];

  constructor(private http: Http, navCtrl: NavController) { 
    this.http.get(this.apiUrl)
             .map((response: Response) => response.json())
             .subscribe(articles => {
                console.log(articles);
                this.articles = articles.data;
             });
  }
}
