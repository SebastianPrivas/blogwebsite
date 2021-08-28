import { of } from 'rxjs';

describe('BlogService', () => {
  const serviceStub = {
    getBlogs: () => of([{ id: '', title: '', description: '', imagePath: '' }]),
    getBlogById: (id: string) =>
      of({ id: id, title: 'yeah', description: 'boi', imagePath: 'n' }),
  };

  it('getBlogs should return Blogs', () => {
    serviceStub.getBlogs().subscribe(value => {
      console.log(value)
      expect(value).toBe([{ id: 'lelel', title: '', description: '', imagePath: '' }])
    })
  });
});
