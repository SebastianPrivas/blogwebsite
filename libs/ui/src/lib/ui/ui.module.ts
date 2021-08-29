import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from './nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {
  _MatMenuDirectivesModule,
  MatMenuModule,
} from '@angular/material/menu';
import { FlexModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogService } from '../services/blog.service';
import { MatListModule } from '@angular/material/list';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog/:id', component: BlogsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    FlexModule,
    MatRippleModule,
    RouterModule.forRoot(appRoutes),
    MatListModule
  ],
  declarations: [NavComponent, HomeComponent, BlogsComponent],
  providers: [BlogService],
  exports: [NavComponent, HomeComponent, BlogsComponent],
})
export class UiModule {}
