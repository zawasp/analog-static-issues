import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { MarkdownComponent, injectContent } from '@analogjs/content';
import { BlogPostAttributes } from '../../types/BlogPostAttributes';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, NgIf, MarkdownComponent],
  templateUrl: './slug.page.html',
})
export default class BlogPostComponent {
  readonly post$ = injectContent<BlogPostAttributes>({
    subdirectory: 'blog',
    param: 'slug',
  });
}
