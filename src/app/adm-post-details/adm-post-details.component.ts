import { Component, OnInit } from '@angular/core';
import { Ipost, DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adm-post-details',
  templateUrl: './adm-post-details.component.html',
  styleUrls: ['./adm-post-details.component.css']
})
export class AdmPostDetailsComponent implements OnInit {

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
    this.router.navigate(['/admPost']);
  }


}

