import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bf-post',
  template: `
    {{item.text}}
    <img height="25" style="vertical-align: middle;" src="assets/icon-trash-a-128.png" (click)="deleteItem.emit(item.id)">
  `,
})
export class PostComponent {
  @Input() item;
  @Output() deleteItem = new EventEmitter;
}
