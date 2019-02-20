import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile = {
    name: "Mohammad Anas Siddiquei",
    currentPosition: "Associate Consultant",
    company: "Wipro Ltd",
    location: "Bangalore, Karnataka"
  }
  constructor() { }

  ngOnInit() {
  }

}
