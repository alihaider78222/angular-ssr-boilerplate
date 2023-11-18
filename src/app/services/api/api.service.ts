import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly getBlogPosts_URL = `https://api.slingacademy.com/v1/sample-data/blog-posts`;

  constructor(
    private http: HttpClient,
  ) { }

  // Get Blog posts
  async getBlogPosts() : Promise<any> {
    return new Promise( (resolve, reject)=> {
      return this.http.get( this.getBlogPosts_URL )
      // .pipe( map( data => new BlogsResponse(data) ) ) // for converting data into model class
      .subscribe({
          next: res => {
              resolve(res);
          },
          error: error => {
              console.log(error);
              reject(error);
          },
          complete(){},
      })
    });
  }

  // Get Blog detail
  async getBlogDetail(id: String) : Promise<any> {
    return new Promise( (resolve, reject)=> {
      return this.http.get( `${this.getBlogPosts_URL}/${id}` )
      // .pipe( map( data => new BlogsDetail(data) ) ) // for converting data into model class
      .subscribe({
          next: res => {
              resolve(res);
          },
          error: error => {
              console.log(error);
              reject(error);
          },
          complete(){},
      })
    });
  }


}
