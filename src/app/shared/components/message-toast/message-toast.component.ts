import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MessageToast } from '../../models/message-toast';

@Component({
  selector: 'app-message-toast',
  templateUrl: './message-toast.component.html',
  styleUrls: ['./message-toast.component.css'],
})
export class MessageToastComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: MessageToast) {}
}
