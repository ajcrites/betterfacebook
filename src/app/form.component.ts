import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { style } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';

@Component({
  selector: 'bf-form',
  template: `
    <input
      [class]="inputCss"
      [style.backgroundColor]="color"
      [maxLength]="maxlength"
      #forMyWall
      (keyup.enter)="submit.emit(forMyWall.value); forMyWall.value = '';">
  `,
})
export class FormComponent {
  @Input() color = 'white';
  @Input() maxlength = 140;
  @Output() submit = new EventEmitter;
  @ViewChild('forMyWall') forMyWall: ElementRef;

  inputStyle: NestedCSSProperties = {
    display: 'block',
    margin: '5px auto',
    width: '95vw',
    fontSize: '15px',
    padding: '8px',
    border: '1px solid rgb(51, 51, 51)',
    borderRadius: '8px',
    outline: 'none',
  };
  inputCss = style(this.inputStyle);

  submitCurrentValue() {
    this.submit.emit(this.forMyWall.nativeElement.value);
    this.clear();
  }

  clear() {
    this.forMyWall.nativeElement.value = '';
  }
}
