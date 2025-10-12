import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NotificationForm } from '../notification-form/notification-form';
import { NotificationModel } from '../../models/NotificationModel';

@Component({
  selector: 'app-notification-center',
  imports: [CommonModule, FormsModule, NotificationForm],
  templateUrl: './notification-center.html',
  styleUrl: './notification-center.css',
})
export class NotificationCenter {
  notifications: Array<NotificationModel> = [];

  addNotification(notification: NotificationModel) {
    this.notifications.push(notification);
  }
}
