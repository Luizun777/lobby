import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

@Component({
  selector: 'boton-option',
  templateUrl: './boton-option.component.html',
  styleUrls: ['./boton-option.component.scss']
})
export class BotonOptionComponent implements OnInit {

  @Input() type: string;
  @Input() data: any;
  @Input() grupo: boolean;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  edit() {
    this.dialog.open(ModalEditComponent, {
      width: this.grupo ? '400px' : '250px',
      data: {type: this.type, info: this.data, grupo: this.grupo}
    });
  }

}
