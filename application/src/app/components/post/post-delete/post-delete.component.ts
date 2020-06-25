import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {

  post: Post

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.readById(id).subscribe(post => {
      this.post = post
    })
  }

  deletePost(): void {
    this.postService.delete(this.post.id).subscribe(() => {
      this.postService.showMessage('Post deleted!')
      this.router.navigate(['/posts'])
    })
  }

  cancel(): void {
    this.router.navigate(['/posts'])
  }
}
