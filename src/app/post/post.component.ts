import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Ipost } from '../data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Ipost;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {

   }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if(param){
      const id = +param;
      this.getPost(id);

    }
  }

  getPost(id: number){
    this.dataService.getPost(id).subscribe(value =>{
      this.post = value;

    })
  }

  onBack():void{
    this.router.navigate(['/welcome']);
  }


}
