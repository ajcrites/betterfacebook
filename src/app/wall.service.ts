import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export interface Post {
  id: number;
  text: string;
}

@Injectable()
export class WallService {
  constructor(private http: Http) { }

  loadItems(): Observable<Post[]> {
    return this.http.get('http://localhost:3000/wall')
      .map(response => response.json());
  }

  addItem(text) {
    return this.http.post('http://localhost:3000/wall', {text})
      .map(response => response.json().id)
      .toPromise();
  }
}
