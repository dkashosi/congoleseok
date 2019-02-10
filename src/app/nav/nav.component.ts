import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  toggleWelcome: boolean;
  toggleContact: boolean;
  toggleAbout: boolean;
  title: string;
  constructor() { }

  ngOnInit() {
    this.toggleWelcome = false;
    this.toggleAbout = false;
    this.toggleContact = false;
    this.goToWelcome();

  }
  goToAbout():void{
    this.title = "About Us";
    this.toggleAbout = true;
    this.toggleWelcome = false;
    this.toggleContact = false;  }

  goToContact():void{
    this.toggleWelcome = false;
    this.toggleAbout = false;
    this.toggleContact = true;
  }

  goToWelcome():void{
    this.title = "Welcome";
    this.toggleWelcome = true;
    this.toggleAbout = false;
    this.toggleContact = false;
  }

}
