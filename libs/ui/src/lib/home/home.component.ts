import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Blog } from './model/blog.model';

@Component({
  selector: 'blogsite-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  blogs: Blog[] = [
    new Blog(
      "How I learned Angular in 2 days",
      "It was so ez omg gg",
      "https://miro.medium.com/max/3798/1*eOE7VhXBlqdIJ9weEdHbQQ.jpeg"
    ),
    new Blog(
      "How I learned Angular in 2 days",
      "It was so ez omg gg",
      "https://miro.medium.com/max/3798/1*eOE7VhXBlqdIJ9weEdHbQQ.jpeg"
    ),
    new Blog(
      "How I learned Angular in 2 days",
      "It was so ez omg gg",
      "https://miro.medium.com/max/3798/1*eOE7VhXBlqdIJ9weEdHbQQ.jpeg"
    ),
    new Blog(
      "How I learned Angular in 2 days",
      "It was so ez omg gg",
      "https://miro.medium.com/max/3798/1*eOE7VhXBlqdIJ9weEdHbQQ.jpeg"
    ),
    new Blog(
      "How I learned Angular in 2 days",
      "It was so ez omg gg",
      "https://miro.medium.com/max/3798/1*eOE7VhXBlqdIJ9weEdHbQQ.jpeg"
    )
  ]
  constructor(private breakpointObserver: BreakpointObserver) {}
}
