import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './model/blog.model';
import { NewBlog } from './model/new_blog.model';
import { BlogTypes } from '../constants/enums/blog-types.enum';
import {MessageService} from 'primeng/api';
import { DateHelper } from '../core/helpers/date.helper';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [MessageService]
})
export class BlogComponent implements OnInit {

  blogs: Blog[];
  newBlog = new NewBlog();
  page:string = "blog";

  constructor(private blogService: BlogService,private notification: MessageService, private dateHelper: DateHelper) { }

  ngOnInit() {

    this.blogService.getAllBlogs().subscribe(response => {
      this.blogs = response.blogs;
      this.blogs.forEach(element => {

      });
    });
  }


  createBlog(){
    this.newBlog.blogTypeId = BlogTypes.Testimony;
    this.newBlog.createDate = new Date();

    if(this.newBlog.blogPost.trim()) {
      this.blogService.createBlog(this.newBlog).subscribe(response => {
        this.notification.add({key: 'postNotification', severity:'success', summary:'Testimony shared', detail:'Your testimony have been shared'});
        this.blogs.unshift({blogId: response.blogId, blogPost: response.blogPost, createDate: response.createDate, blogTypeId: response.blogTypeId});
        this.newBlog.blogPost = null;
      });
    }
  }

}
