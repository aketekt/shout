import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder } from '@angular/forms';
import { Shouts } from '../../../both/collections/shouts.collection';
import template from './shouts-input.component.html'

@Component({
  selector: 'shouts-input',
  template,
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ShoutsInputComponent implements OnInit {
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
    text: [],
    location: [],
    time: []
    });
  }
  addShout() {

  if (this.addForm.valid) {
  Shouts.insert(this.addForm.value);
  }
}
}
