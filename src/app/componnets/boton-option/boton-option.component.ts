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
  clickCopy: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  edit() {
    this.dialog.open(ModalEditComponent, {
      width: this.grupo ? '400px' : '400px',
      data: {type: this.type, info: this.data, grupo: this.grupo}
    });
  }

  copiarEnlace(): void {
    this.clickCopy = true;
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.data.url;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    setTimeout(() => this.clickCopy = false, 1500);
  }

}
