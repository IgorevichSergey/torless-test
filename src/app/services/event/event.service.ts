import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventService {
  public headerText$ = new EventEmitter();

  constructor() { }

}
