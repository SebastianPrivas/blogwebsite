import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Blog } from '../models/blog';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class BlogService {
  blogCollection: AngularFirestoreCollection<Blog>;
  private blogIdSource = new BehaviorSubject('');
  currentId: Observable<string> = this.blogIdSource.asObservable();


  constructor(public db: AngularFirestore) {
    this.blogCollection = this.db.collection<Blog>('Blog');
  }

  getBlogs(): Observable<Blog[]> {
    return this.blogCollection.valueChanges({idField: 'id'});
  }

  getBlogById(id: string): Observable<Blog | undefined> {
    return this.blogCollection
      .doc(id)
      .valueChanges();
  }
}
