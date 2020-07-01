import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  post: Post

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.readById(id).subscribe(post => {
      this.post = post[0];
      console.log(post)
    })
  }

  updatePost(): void {
    this.postService.update(this.post).subscribe(() => {
      this.postService.showMessage("Post Edited!")
      this.router.navigate(['/posts'])
    })
  }

  cancel(): void {
    this.router.navigate(['/posts'])
  }
}
