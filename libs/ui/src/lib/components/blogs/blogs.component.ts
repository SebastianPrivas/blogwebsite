import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blogsite-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  blog: Blog | undefined;
  blogId: string | null | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.blogId = this.route.snapshot.paramMap.get('id');
    if (this.blogId) {
      this.blogService.getBlogById(this.blogId).subscribe((blog) => {
        this.blog = blog;
      });
    }
  }
}
