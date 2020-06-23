import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  post: Post = {
    title: 'Título',
    description: 'Descrição'
  }

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createPost(): void {
    this.postService.create(this.post).subscribe(()=> {
      this.postService.showMessage('Message posted!')
      this.router.navigate(['/posts'])
    })
  }

  cancel(): void {
    this.router.navigate(['/posts'])
  }
}
