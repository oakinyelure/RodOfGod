import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouteHelper } from '../core/helpers/route.helper';
import { IGetBlogsResponse, Blog } from './model/blog.model';
import { NewBlog } from './model/new_blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private httpHelper: RouteHelper) { }

  getAllBlogs() {
    let url = this.httpHelper.buildUrl('Blog/GetAllBlogs');
    return this.http.get<IGetBlogsResponse>(url);
  }

  createBlog(blog: NewBlog) {
    
    let url = this.httpHelper.buildUrl('Blog/CreateBlog');
    return this.http.post<Blog>(url,blog);
  }
  
}
