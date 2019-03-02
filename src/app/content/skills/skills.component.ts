import { Component, OnInit } from '@angular/core';


export interface School{
  name: string;
  score: string;
  board: string;
  year: string;
}
const ELEMENT_DATA: School[] = [
  {name: 'MNPS', score: '92.5%', board: 'ICSE', year: '2011'},
  {name: 'MNPS', score: '92.25%', board: 'ISC', year: '2013'}
];

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'score', 'board', 'year'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
