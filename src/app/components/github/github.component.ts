import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: any;
  repos: any;
  username: any;

  constructor(private githubService: GithubService) {
    this.user = false;
  }

  search(){
    this.githubService.updateUsername(this.username);

    this.githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this.githubService.getRepo().subscribe(repos => {
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}
