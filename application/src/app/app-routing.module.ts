import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { PostCrudComponent } from './views/post-crud/post-crud.component'
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { PostUpdateComponent } from './components/post/post-update/post-update.component';
import { PostDeleteComponent } from './components/post/post-delete/post-delete.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "posts",
  component: PostCrudComponent
}, {
  path: "posts/create",
  component: PostCreateComponent
}, {
  path: "posts/update/:id",
  component: PostUpdateComponent
}, {
  path: "posts/delete/:id",
  component: PostDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
