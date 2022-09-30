import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GithubService } from '../../src/app/github/github.service';

import { SearchComponent } from '../../src/app/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [GithubService],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
