import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: {id: number, name: string};

  constructor(private routes: ActivatedRoute) { }

  ngOnInit() {
    if (this.routes.snapshot.params['id']) {
      this.book = {
        id: this.routes.snapshot.params['id'],
        name: this.routes.snapshot.params['name']
      };

      this.routes.params.subscribe((params: Params) => {
        this.book.id = params['id'];
        this.book.name = params['name'];
      });
    }
  }

}
