import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GithubService } from '../../src/app/github/github.service';

import { SearchComponent } from '../../src/app/search/search.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchForm } from '../../src/app/types/search.types';

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
    component.searchForm = new FormGroup<SearchForm>({
      search: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      page: new FormControl<number>(1, { nonNullable: true }),
      per_page: new FormControl<number>(10, { nonNullable: true }),
      sort: new FormControl<string>('best match', { nonNullable: true }),
    });
    fixture.detectChanges();
  });

  //

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
