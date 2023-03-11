import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { TabsMenuComponent } from './tabs-menu/tabs-menu.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    component: TabsMenuComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('./posts/posts.module').then(m=>m.PostsModule)
      },
     /*  {
        path: 'posts/:id',
        loadChildren: () =>
          import('./posts/posts.module').then(m=>m.PostsModule)
      }, */
      {
        path: 'comments',
        loadChildren: () =>
          import('./comments/comments.module').then(m=>m.CommentsModule)
      },
      {
        path: 'toDo',
        loadChildren: () =>
          import('./to-do/to-do.module').then(m=>m.ToDoModule)
      }
    ]
  },
  { path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingModules = []
