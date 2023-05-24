import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2>Blog</h2>
    <router-outlet></router-outlet>
  `,
})
export default class BlogComponent {}
