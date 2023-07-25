import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  @Output() onUpdate = new EventEmitter();

  showRoles = false;
  form: FormGroup;

  constructor() {}
  ngOnInit(): void {
    this.form = new FormGroup({
      todo: new FormControl('', [Validators.required]),
    });
  }
  update() {
    console.log('update');
  }
}
