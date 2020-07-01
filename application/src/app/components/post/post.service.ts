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
      horizontalPosition: "end",
      verticalPosition: "top"
    })
  }

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post)
  }

  read(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl)
  }

  readById(id: string): Observable<Post> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Post>(url)
  }

  update(post: Post): Observable<Post> {
    const url = `${this.baseUrl}/${post.id}`
    return this.http.put<Post>(url, post)
  }

  delete(id: string): Observable<Post> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Post>(url)
  }
  
}
