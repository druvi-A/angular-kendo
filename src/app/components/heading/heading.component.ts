import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() color: string | undefined;
  @Input() text: string | undefined;

  title = 'This is the heading';
}
