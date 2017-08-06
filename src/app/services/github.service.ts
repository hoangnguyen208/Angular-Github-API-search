import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username = 'hoangnguyen208';
  private client_id = '00a5443804b282fd8e55';
  private client_secret = 'b2d788ed11731968be1e3b7f45570816a39864c8';

  constructor(private http: Http) {
    console.log('Github service started...');
  }

  getUser(){
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  getRepo(){
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  updateUsername(username:any){
    this.username = username;
  }

}
