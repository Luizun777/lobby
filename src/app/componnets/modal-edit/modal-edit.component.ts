import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListadosService } from 'src/app/services/listados.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {

  grupo: boolean;
  info: any;
  orderForm: FormGroup;

  todo: any = [];
  done: any = [];

  constructor(
    public dialog: MatDialog,
    private listadosSrv: ListadosService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.grupo = this.data.grupo;
    this.info = this.data.info;
    console.log(this.info);
    if (!this.grupo && this.data.type === 'Edit') {
      this.orderForm.setValue({
        nombre: this.info.titulo,
        url: this.info.URL,
        subNombre: this.info.subtitulo,
        kanji: this.info.kanji,
        img: this.info.img
      });
    }

    if (this.grupo && this.data.type === 'Edit') {
      this.getListado();
      this.todo = this.info.listado;
    }
  }

  formInit() {
    this.orderForm = this.formBuilder.group({
      nombre: new FormControl('',[Validators.required]),
      url: new FormControl('',[Validators.required]),
      subNombre: new FormControl('',[Validators.required]),
      kanji: new FormControl('',[Validators.required]),
      img: new FormControl('')
    });
  }

  changeName(event: any): any {
    this.info.name = event.target.value;
    this.edirGrupo();
  }

  editar() {
    const payload = {
      img: this.orderForm.value.img,
      titulo: this.orderForm.value.nombre,
      URL: this.orderForm.value.url,
      subtitulo: this.orderForm.value.subNombre,
      kanji: this.orderForm.value.kanji
    };
    if (this.data.type === 'Edit') {
      this.listadosSrv.putDato(this.info.id, payload).subscribe((data: any) => {
        this.dialogRef.close();
        if (!data.PUT) {
          this.listadosSrv.alertaError(false);
          return
        } else {
          this.listadosSrv.alertaOk();
        }
        this.listadosSrv.change.emit();
      });
    } else {
      this.listadosSrv.agregarDato(payload).subscribe((data: any) => {
        this.dialogRef.close();
        if (!data.POST) {
          this.listadosSrv.alertaError(false);
        } else {
          this.listadosSrv.alertaOk();
        }
      });
    }
  }

  edirGrupo(): void {
    const listadoId = this.info.listado.reduce((accumulator: number[], currentValue: any) => [...accumulator, currentValue.id], []);
    const payload = {
      name: this.info.name,
      listadoId
    };
    this.listadosSrv.putGrupo(this.info.id, payload).subscribe((data) => {
      console.log(data);
      if (!data.PUT) {
        this.dialogRef.close();
        this.listadosSrv.alertaError(true);
      } else {
        this.listadosSrv.alertaOk();
      }
    });
  }

  getListado(): void {
    this.listadosSrv.getListaTotal().subscribe((data: any) => {
      let todos = data.result.map((result: any) => {
        const existe = this.info.listado.find((exist: any) => exist.id === result.id);
        if (!existe) {
          return result;
        }
      });
      todos = todos.filter((dato: any) => dato !== undefined);
      this.done = todos;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.edirGrupo();
  }

  agregarEnlace(): void {
    const dialogRef = this.dialog.open(ModalEditComponent, {
      width: '250px',
      data: {type: 'Crear', info: {}, grupo: false}
    });

    dialogRef.afterClosed().subscribe(() => this.getListado());
  }

}
