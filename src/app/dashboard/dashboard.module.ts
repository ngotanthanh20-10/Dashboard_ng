import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from '../default/default.component';
import { PostsComponent } from '../posts/posts.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent, DefaultComponent, PostsComponent],
  imports: [CommonModule, RouterModule],
})
export class DashboardModule {}
