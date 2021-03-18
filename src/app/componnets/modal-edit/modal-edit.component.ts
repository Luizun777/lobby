import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListadosService } from 'src/app/services/listados.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {

  grupo: boolean;
  info: any;
  orderForm: FormGroup;

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  constructor(
    private listadosSrv: ListadosService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.formInit();
    this.grupo = this.data.grupo;
    this.info = this.data.info;
    if (!this.data.grupo && this.data.type === 'Edit') {
      this.orderForm.setValue({
        nombre: this.info.titulo,
        url: this.info.URL
      });
    }
  }

  formInit() {
    this.orderForm = this.formBuilder.group({
      nombre: new FormControl('',[Validators.required]),
      url: new FormControl('',[Validators.required])
    });
  }

  editar() {
    console.log(this.orderForm.value);
    const payload = {
      "img": "",
      "titulo": this.orderForm.value.nombre,
      "URL": this.orderForm.value.url
    };
    if (this.data.type === 'Edit') {
      this.listadosSrv.putDato(this.info.id, payload).subscribe((data: any) => {
        console.log(data);
        this.dialogRef.close();
        this.listadosSrv.change.emit();
      });
    } else {
      this.listadosSrv.agregarDato(payload).subscribe(() => {
        this.dialogRef.close();
      });
    }
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
  }

}
