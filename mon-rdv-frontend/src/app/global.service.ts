import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public backEndUrl: string = "http://localhost:8080/";
  constructor() { }
}
