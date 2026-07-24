import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { LoadingService } from './services/loading';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('student-course-portal');
  isLoading$;

  constructor(
    public loadingService: LoadingService,
    public authService: AuthService
  ) {
    this.isLoading$ = this.loadingService.isLoading$;
  }

  toggleLogin() {
    this.authService.isLoggedIn = !this.authService.isLoggedIn;
  }
}
