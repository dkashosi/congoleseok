import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  toggleWelcome: boolean = false ;
  
  title: string;
  @Input() input;
  constructor() { }

  ngOnInit() {
    this.title = this.input;
    if(this.title =="Welcome") this.toggleWelcome = true;
    

  }
  

}
