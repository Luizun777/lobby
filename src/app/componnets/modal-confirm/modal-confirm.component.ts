import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListadosService } from 'src/app/services/listados.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  typeDelete: boolean;
  typeGrupo: boolean;
  idGrupo: string;
  idTarjeta: string;

  constructor(
    private listadosSrv: ListadosService,
    public dialogRef: MatDialogRef<ModalConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    const { eliminar, grupo } = this.data;
    const info = this.data.info;
    this.typeGrupo = grupo;
    this.idGrupo = grupo ? info._id : info.grupo;
    if (!this.typeGrupo) {
      this.idTarjeta = info._id
    }
    this.typeDelete = eliminar;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminado(): void {
    if (this.typeDelete) {
      this.typeGrupo ? this.elimiarGrupo() : this.elimiarEnlace();
      return
    }
    this.listadosSrv.quitarLista(this.listadosSrv.idGrupo, this.idTarjeta).subscribe((resp: any) => {
      this.listadosSrv.change.emit();
    });
    this.dialogRef.close();
  }

  elimiarEnlace(): void {
    this.listadosSrv.eliminarEnlace(this.listadosSrv.idGrupo, this.idTarjeta).subscribe((resp: any) => {
      this.listadosSrv.change.emit();
    });
    this.dialogRef.close();
  }

  elimiarGrupo(): void {
    this.listadosSrv.eliminarGrupo(this.listadosSrv.idGrupo).subscribe((resp: any) => {
      this.listadosSrv.change.emit();
    });
    this.dialogRef.close();
  }

}
