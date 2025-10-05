import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDashboard } from './components/product-dashboard/product-dashboard';
import { NotificationCenter } from './components/notification-center/notification-center';

@Component({
  selector: 'app-root',
  imports: [ProductDashboard, NotificationCenter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
