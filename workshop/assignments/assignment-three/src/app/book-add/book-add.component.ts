import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  book = {
    name: '',
    id: ''
  };
  formSubmitted = false;
  @Output() bookAdded = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signupForm);
    this.book.name = this.signupForm.value.name;
    this.book.id = this.signupForm.value.id;
    this.formSubmitted = true;
    this.bookAdded.emit({
      name: this.book.name,
      id: this.book.id
    });
  }

}
