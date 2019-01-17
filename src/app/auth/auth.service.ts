import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as Box from '3box';
import { filter, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _address = new BehaviorSubject<string>(null);
  public address$ = this._address.asObservable();
  public box: any;
  public isSync$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  public async signup() {
    if ((<any>window).ethereum) {
      try {
        const [ address ] = await (<any>window).ethereum.enable();
        this.box = await Box.openBox(address, (<any>window).ethereum, {});
        this.box.onSyncDone(_ => this.isSync$.next(true));
        this._address.next(address);
      } catch (err) {
        throw new Error(err);
      }
    } else {
      throw new Error('Please download MetaMask or use Mist');
    }
  }

  public update() {
    this.isSync$.pipe(
      filter(isSync => isSync),
      take(1)
    ).subscribe(_ => console.log('update'));
  }
}
