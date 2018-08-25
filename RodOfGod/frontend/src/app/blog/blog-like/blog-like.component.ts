import { Component, OnInit, Input} from '@angular/core';
import { Blog } from '../model/blog.model';

@Component({
  selector: 'app-blog-like',
  templateUrl: './blog-like.component.html',
  styleUrls: ['./blog-like.component.css']
})
export class BlogLikeComponent implements OnInit {

  liked: boolean = false;
  openCommentBox: boolean = false;

  @Input()selectedBlog: Blog;

  constructor() { }

  ngOnInit() {
  }

  createBlogComment() {
    this.openCommentBox = true;
  }

}
