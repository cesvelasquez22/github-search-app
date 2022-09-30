import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from '../../../src/app/search/user/user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('should render user', () => {
    component.user = {
      login: 'test',
      id: 1,
      avatar_url: 'test',
      html_url: 'test',
      score: 1,
    };
    fixture.detectChanges();
    expect(compiled).toMatchSnapshot();
  });

  it('should open user on _blank', () => {
    component.user = {
      login: 'test',
      id: 1,
      avatar_url: 'test',
      html_url: 'test',
      score: 1,
    };
    fixture.detectChanges();
    const a = compiled.querySelector('a');
    expect(a?.target).toBe('_blank');
  });
});
