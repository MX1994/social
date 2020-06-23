import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { PostCrudComponent } from './views/post-crud/post-crud.component'
import { PostCreateComponent } from './components/post/post-create/post-create.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "posts",
  component: PostCrudComponent
}, {
  path: "posts/create",
  component: PostCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
