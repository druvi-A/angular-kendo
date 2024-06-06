import { Component, ViewEncapsulation } from '@angular/core';
import {
  NotificationRef,
  NotificationService,
} from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  title = 'angular-project';
  notificationRef: NotificationRef | null = null;

  constructor(private notificationService: NotificationService) {}

  public show(): void {
    const notificationRef = this.notificationService.show({
      content: 'Your data has been saved. Time for tea!',
      cssClass: 'button-notification',
      animation: { type: 'slide', duration: 400 },
      position: { horizontal: 'center', vertical: 'bottom' },
      type: { style: 'success', icon: true },
      closable: true,
    });
  }

  public hide(): void {
    if (this.notificationRef) {
      this.notificationRef.hide();
    }
  }
}
