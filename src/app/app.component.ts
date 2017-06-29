import { Component, ViewChildren, QueryList, OnInit } from '@angular/core';

import { style } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';

import 'rxjs/add/operator/take';

import { animations } from './app.component.animations';

import { FormComponent } from './form.component';
import { WallService } from './wall.service';

@Component({
  animations,
  selector: 'app-root',
  template: `
    <div [class]="backgroundCss"></div>
    <h1 [class]="headerCss">
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

    <div [class]="buttonContainerCss">
      <button [class]="buttonCss" (click)="addAllItems()">Add All</button>
      <button [class]="buttonCss" (click)="clear()">Clear All</button>
    </div>

    <ul *ngIf="items.length" [class]="wallCss">
      <li [@appear] *ngFor="let item of items" style="overflow: hidden;">
        <bf-post [item]="item" (deleteItem)="deleteItem($event)"></bf-post>
      </li>
    </ul>
  `,
})
export class AppComponent implements OnInit {
  title = 'Better Facebook';
  items = [];
  maxLength = 4;
  color = 'red';
  @ViewChildren(FormComponent) forms: QueryList<FormComponent>;

  backgroundCss = style({
    height: '80vh',
    width: '100vw',
    top: 0,
    left: 0,
    position: 'fixed',
    background: 'linear-gradient(145deg,#0d47a1,#42a5f5)',
    zIndex: -1,
    transform: 'skewY(8deg)',
    transformOrigin: '100%',
  });

  textStyle: NestedCSSProperties = {
    color: 'white',
    textShadow: '1px 2px 2px rgb(51, 51, 51)',
  }
  headerStyle: NestedCSSProperties = {
    textAlign: 'center',
  };
  headerCss = style(this.textStyle, this.headerStyle);

  wallStyle: NestedCSSProperties = {
    listStyleType: 'none',
  };
  wallCss = style(this.textStyle, this.wallStyle);

  buttonContainerStyle: NestedCSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  }
  buttonContainerCss = style(this.buttonContainerStyle);

  buttonStyle: NestedCSSProperties = {
    fontSize: '20px',
    fontFamily: 'Spectral',
    border: '1px solid blue',
    borderRadius: '3px',
    background: 'linear-gradient(145deg,#0d47a1,#42a5f5)',
    color: 'white',
    cursor: 'pointer',
    outline: 'none',
  };
  buttonCss = style(this.buttonStyle);

  constructor(private wall: WallService) { }

  async addItem(text) {
    const id = await this.wall.addItem(text);
    this.items.push({ id, text });
  }

  addAllItems() {
    this.forms.forEach(form => form.submitCurrentValue());
  }

  clear() {
    this.forms.forEach(form => form.clear());
  }

  deleteItem(id) {
    const idx = this.items.findIndex(item => id === item.id);
    this.items = [
      ...this.items.slice(0, idx),
      ...this.items.slice(idx + 1),
    ];
  }

  ngOnInit() {
    this.wall.loadItems().take(1).subscribe(items => {
      this.items = items;
    });
  }
}
