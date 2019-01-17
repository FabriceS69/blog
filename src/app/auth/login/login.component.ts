import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'blog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isEnabled$: Observable<boolean>;
  public loading: boolean;

  constructor(public service: AuthService) { }

  ngOnInit() {
    this.isEnabled$ = this.service.address$.pipe(map(address => !!address));
  }

  public signup() {
    this.loading = true;
    this.service.signup()
      .then(_ => this.loading = false)
      .catch((err: Error) => {
        this.loading = false;
        console.error(err);
      });
  }
}
