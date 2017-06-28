import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';

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
  @ViewChild('forMyWall') forMyWall: ElementRef;
  submitCurrentValue() {
    this.submit.emit(this.forMyWall.nativeElement.value);
    this.clear();
  }

  constructor() { }

  ngOnInit() {
    if (!this.maxlength) {
      this.maxlength = 140;
    }
  }

  clear() {
    this.forMyWall.nativeElement.value = '';
  }
}
