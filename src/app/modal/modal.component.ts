import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() onClose = new EventEmitter();
  @Output() onUpdate = new EventEmitter();

  showRoles = false;
}
