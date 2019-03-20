import { Component, OnInit } from '@angular/core';
import { DataService, Ipost } from '../data.service';

@Component({
  selector: 'app-adm-post',
  templateUrl: './adm-post.component.html',
  styleUrls: ['./adm-post.component.css']
})
export class AdmPostComponent implements OnInit {

  listPost: Ipost[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(value =>{
      this.listPost = value;
    })
  }

  edit(id: number){
    console.log(id);
  }

}
