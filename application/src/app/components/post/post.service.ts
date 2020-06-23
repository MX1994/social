import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = "http://localhost:5000/posts"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    })
  }

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post)
  }

  read(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl)
  }
}
