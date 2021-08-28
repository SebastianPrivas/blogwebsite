import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@blogsite/ui';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../../../../libs/ui/src/lib/components/home/home.component';
import { BlogsComponent } from '../../../../libs/ui/src/lib/components/blogs/blogs.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog/:id', component: BlogsComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiModule,
    AngularFireModule.initializeApp(environment.firebase, 'blogify'),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
