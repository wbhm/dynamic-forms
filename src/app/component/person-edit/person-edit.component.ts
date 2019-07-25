import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl()
    });
  }

  ngOnInit() {}
}
