import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = [
    {
      id: 1,
      name: 'Book 1'
    },
    {
      id: 2,
      name: 'Book 2'
    },
    {
      id: 3,
      name: 'Book 3'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onBookAdded(event) {
    this.books.push({
      id: event.id,
      name: event.name
    });
  }

}
