import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorgeService<T> {
  constructor() {}

  public updateStorage(value: T, key: string) {
    let _value = JSON.stringify(value);
    localStorage.setItem(key, _value);
  }

  public getStorage(key: string): T | undefined {
    let value = localStorage.getItem(key);
    if (value) return JSON.parse(value) as T;
    else return undefined;
  }
}
