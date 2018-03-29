import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  inputValue: string = 'this is an event test';
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
      this.notify.emit(this.inputValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
