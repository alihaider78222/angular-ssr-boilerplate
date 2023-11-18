import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading : boolean = false;
  blogs : any;

  constructor(
    private api : ApiService
  ){ }

  ngOnInit(): void {
    this.loading = true;
    var res = this.api.getBlogPosts().then(res => {
      console.log(res);
      this.loading = false;
      this.blogs = res.blogs;
    }).catch( error => {
      console.log(error);
    });
  }

}
