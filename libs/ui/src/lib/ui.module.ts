import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {NavComponent} from './nav/nav.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { _MatMenuDirectivesModule, MatMenuModule } from '@angular/material/menu';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatGridListModule, MatButtonModule, MatListModule, MatIconModule, RouterModule, _MatMenuDirectivesModule, MatMenuModule, FlexModule],
  declarations: [
    NavComponent,
    HomeComponent
  ],
  exports: [
    NavComponent,
    HomeComponent
  ],
})
export class UiModule {}
