import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: any;
  let app: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing'`, () => {
    app.title = 'testing';
    expect(app.title).toEqual('testing');
  });

  it('should render title', () => {
    app.title = 'testing';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testing app is running!');
  });

  describe('changeTitle', () => {
    it('should change app title', () => {
      const oldTitle = app.title;
      app.changeTitle();
      const newTitle = app.title;

      expect(oldTitle).toEqual('testing');
      expect(newTitle).toEqual('Modificado');
    })
  })

});
