import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService, User } from '../../../auth/shared/services/auth/auth.service';
import { Store } from 'store';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  subscription: Subscription;

  constructor(private authService: AuthService,
              private store: Store,
              private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
