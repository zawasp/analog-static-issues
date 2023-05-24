import { injectContentFiles } from '@analogjs/content';
import { InjectContentFilesFilterFunction } from '@analogjs/content/lib/inject-content-files';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BlogPostAttributes } from 'src/app/types/BlogPostAttributes';

@Component({
  selector: 'app-blog-posts',
  standalone: true,
  imports: [NgFor, RouterLink, RouterOutlet],
  templateUrl: './blog.page.html',
})
export default class BlogPostsComponent {
  private readonly contentFilterFn: InjectContentFilesFilterFunction<BlogPostAttributes> =
    (contentFile) => !!contentFile.filename.includes('/src/content/blog/');
  protected readonly posts = injectContentFiles<BlogPostAttributes>(
    this.contentFilterFn
  );
}
