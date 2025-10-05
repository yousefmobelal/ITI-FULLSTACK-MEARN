import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationModel } from '../../models/NotificationModel';

@Component({
  selector: 'app-notification-form',
  imports: [FormsModule],
  templateUrl: './notification-form.html',
  styleUrl: './notification-form.css',
})
export class NotificationForm {
  state: 'success' | 'error' | 'warning' | 'info' = 'success';
  description: string = '';
  @Output() add = new EventEmitter<NotificationModel>();

  addNotification() {
    if (this.description.trim().length === 0) {
      alert('Description cannot be empty');
      return;
    }
    this.add.emit(new NotificationModel(this.state, this.description));
    this.description = '';
  }
}
