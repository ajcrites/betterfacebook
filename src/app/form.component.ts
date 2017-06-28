import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'bf-form',
  template: `
    <input
      [style.backgroundColor]="color"
      [maxLength]="maxlength"
      #forMyWall
      (keyup.enter)="submit.emit(forMyWall.value); forMyWall.value = '';">
  `,
})
export class FormComponent implements OnInit {
  @Input() color = "white";
  @Input() maxlength: number;
  @Output() submit = new EventEmitter;
  constructor() { }

  ngOnInit() {
    if (!this.maxlength) {
      this.maxlength = 140;
    }
  }
}
