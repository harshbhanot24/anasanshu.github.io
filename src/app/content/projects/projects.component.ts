import { GithubrepoService } from './../../services/githubrepo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects;
  constructor(private githubRepo: GithubrepoService) { }

  ngOnInit() {
    this.githubRepo.getRepo()
    .subscribe(
      projects => {
        this.projects = projects;
        console.log(projects);
      },
      error => {
        if(error instanceof null){
          console.log("Error");
        }
      }
    )
  }

}
