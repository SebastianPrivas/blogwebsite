import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BlogsComponent } from './blogs.component';
import { BlogService } from '../../services/blog.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;
  const serviceStub = {
    getBlogById: (id: string) =>
      of({ id: id, title: 'yeah', description: 'boi', imagePath: 'n' }),
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BlogsComponent],
        imports: [RouterTestingModule],
        providers: [{ provide: BlogService, useValue: serviceStub }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
