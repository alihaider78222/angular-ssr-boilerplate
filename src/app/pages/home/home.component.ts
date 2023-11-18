import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading : boolean = false;

  blogs : any = [];

  blog_id? : any;

  blog_detail? : any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api : ApiService
  ){ }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe( async params => {
      console.log(params);

      this.blog_id = params.get('id');

      if(this.blog_id == null){
        this.loadBlogsList();
      } else {
        this.loadBlogDetail();
      }
    });

  }

  loadBlogsList(){
    this.loading = true;
    this.api.getBlogPosts().then(res => {
      console.log(res);
      this.loading = false;
      this.blogs = res?.blogs ?? [];
    }).catch( error => {
      console.log(error);
      this.loading = false;
    });
  }


  loadBlogDetail(){
    this.loading = true;
    this.api.getBlogDetail(this.blog_id).then(res => {
      console.log(res);
      this.loading = false;
      this.blog_detail = res?.blog;
    }).catch( error => {
      console.log(error);
      this.loading = false;

      console.log(this.blog_detail);
    });
  }

}
