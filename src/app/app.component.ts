import { Component, ViewChildren, QueryList, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { FormComponent } from './form.component';
import { WallService } from './wall.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{title}}!!
    </h1>

    <bf-form
      [color]="'yellow'"
      maxlength="3"
      (submit)="addItem($event)"></bf-form>

    <bf-form
      [color]="color"
      maxlength="{{maxLength}}"
      (submit)="addItem($event)"></bf-form>

    <button (click)="clear()">Clear</button>

    <ul *ngIf="(items | async)?.length">
      <li *ngFor="let item of (items | async)">{{item.text}}</li>
    </ul>

    <button (click)="addAllItems()">Add All</button>
  `,
})
export class AppComponent implements OnInit {
  title = 'Better Facebook';
  items;
  maxLength = 4;
  color = 'red';
  @ViewChildren(FormComponent) forms: QueryList<FormComponent>;

  constructor(private wall: WallService) { }

  async addItem(value) {
    await this.wall.addItem(value);
    this.items = this.wall.loadItems();
  }

  addAllItems() {
    this.forms.forEach(form => form.submitCurrentValue());
  }

  clear() {
    this.forms.forEach(form => form.clear());
  }

  ngOnInit() {
    this.items = this.wall.loadItems();
  }
}
