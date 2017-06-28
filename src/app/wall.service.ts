import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WallService {
  constructor(private http: Http) { }

  loadItems() {
    return this.http.get('http://localhost:3000/wall')
      .map(response => response.json());
  }

  addItem(text) {
    return this.http.post('http://localhost:3000/wall', {text}).toPromise();
  }
}
