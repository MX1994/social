import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-read',
  templateUrl: './post-read.component.html',
  styleUrls: ['./post-read.component.css']
})
export class PostReadComponent implements OnInit {

  posts: Post[]

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.read().subscribe(posts => {
      this.posts = posts
    })
  }

}
