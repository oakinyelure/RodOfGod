import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouteHelper } from '../core/helpers/route.helper';
import { IGetBlogsResponse } from './model/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private httpHelper: RouteHelper) { }

  getAllBlogs() {
    let url = this.httpHelper.buildUrl('Blog/GetAllBlogs');
    return this.http.get<IGetBlogsResponse>(url);
  }
  
}
