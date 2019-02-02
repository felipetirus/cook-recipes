import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.message = data['message'];
      }
    );
  }

}
