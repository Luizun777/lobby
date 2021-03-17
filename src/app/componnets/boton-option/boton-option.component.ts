import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

@Component({
  selector: 'boton-option',
  templateUrl: './boton-option.component.html',
  styleUrls: ['./boton-option.component.scss']
})
export class BotonOptionComponent implements OnInit {

  @Input() grupo: boolean;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  edit() {
    const dialogRef = this.dialog.open(ModalEditComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
