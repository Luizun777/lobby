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
        nombre: this.info.title,
        url: this.info.url,
        subNombre: this.info.subtitle,
        kanji: this.info.kanji,
        img: this.info.imgUrl
      });
    }

    if (this.grupo && this.data.type === 'Edit') {
      this.getListado();
      this.todo = this.info.listadoId;
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
      imgUrl: this.orderForm.value.img,
      title: this.orderForm.value.nombre,
      url: this.orderForm.value.url,
      subtitle: this.orderForm.value.subNombre,
      kanji: this.orderForm.value.kanji
    };
    if (this.data.type === 'Edit') {
      this.listadosSrv.putDato(this.info._id, payload).subscribe((data: any) => {
        this.dialogRef.close();
        if (!data.ok) {
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
        if (!data.ok) {
          this.listadosSrv.alertaError(false);
        } else {
          this.listadosSrv.alertaOk();
        }
      });
    }
  }

  edirGrupo(): void {
    console.log(this.info._id);
    const listadoId = this.info.listadoId.reduce((accumulator: number[], currentValue: any) => [...accumulator, currentValue._id], []);
    const payload = {
      name: this.info.name,
      listadoId
    };
    console.log(this.info._id);
    console.log(payload);
    this.listadosSrv.putGrupo(this.info._id, payload).subscribe((data) => {
      console.log(data);
      if (!data.ok) {
        this.dialogRef.close();
        this.listadosSrv.alertaError(true);
      } else {
        this.listadosSrv.alertaOk();
      }
    });
  }

  getListado(): void {
    this.listadosSrv.getListaTotal().subscribe((data: any) => {
      console.log(data);
      this.done = data.result;
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

    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => {
        this.getListado();
      }, 1000);
    });
  }

}
