import { Component, OnInit } from '@angular/core';
import { Ipost, DataService } from '../data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  postList: Ipost[] = [];
  currentList: Ipost[] = [];
  achiveList: Ipost [] = [];
  display: any[] =[] ;

  nav: any;

  constructor(private dataService: DataService) { 
    this.nav = "Bienvenue";
   }

  ngOnInit() {
    this.dataService.getPosts().subscribe(
      posts => {
        this.postList = posts;
        this.postList.sort((a , b)=> {

          var aDate = new Date(a.createdDate);
          var bDate = new Date(b.createdDate);

          if(aDate < bDate ) return 1;
          else return -1;
        });

        this.filterList();
        this.display = this.currentList;
      }
    )
  }

  filterList():void{
    var today = new Date();
  

    this.postList.forEach(post => {
      var t = new Date(post.archiveDate);
      if (t < today){
        this.achiveList.push(post);
      }
      else{
        this.currentList.push(post);
      }
    });

  }

  LoadOld():void{
    this.display = this.postList;

  }

}
