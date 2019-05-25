import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  nav: any;
  preambule: any;

  constructor(private dataService: DataService) { 
    this.nav = "Apropos De Nous";
  }

  ngOnInit() {
    this.dataService.getStatus().subscribe(value =>{
      this.preambule =value.preambule;
    })
  }

}
