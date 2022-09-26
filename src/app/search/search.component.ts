import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});

  constructor(private _formBuilder: FormBuilder) {
    this._initForm();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.searchForm.value);
  }

  private _initForm(): void {
    this.searchForm = this._formBuilder.group({
      search: [''],
    });
  }
}
