import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts/posts.component';
import {AllModules} from "../app.module";
import {UsersModule} from "../users/users.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostsComponent
    
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    AllModules,
    UsersModule,
    FormsModule,
    ReactiveFormsModule
    
  ],exports:[PostsComponent]
})
export class PostsModule { }
