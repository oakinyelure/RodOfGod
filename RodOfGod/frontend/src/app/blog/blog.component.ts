import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './model/blog.model';
import { NewBlog } from './model/new_blog.model';
import { BlogTypes } from '../constants/enums/blog-types.enum';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: Blog[];
  newBlog = new NewBlog();

  constructor(private blogService: BlogService) { }

  ngOnInit() {

    this.blogService.getAllBlogs().subscribe(response => {
      this.blog = response.blogs;
      console.log(response);
    });
  }


  createBlog(){
    this.newBlog.blogTypeId = BlogTypes.Testimony;
    this.newBlog.blogPost = "This is initial blog";
    this.newBlog.createDate = new Date();

    this.blogService.createBlog(this.newBlog).subscribe(response => {
      console.log(response);
    });
  }

}
