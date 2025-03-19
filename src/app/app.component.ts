import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes: Routes = [];

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.routes = this.router.config;
  }

}
