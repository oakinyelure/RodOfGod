import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './model/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: Blog[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {

    this.blogService.getAllBlogs().subscribe(response => {
      console.log(response);
    });


  }

}
