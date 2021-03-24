import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListadosService } from 'src/app/services/listados.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {

  imgPreview: string = '';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imgFile: File;

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
    if (!this.grupo && this.data.type === 'Edit') {
      this.imgPreview = this.info.imgUrl;
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

  veryfImage() {
    // "4ecd282a45020536e965a548f1b409a5"
    if (this.imgFile) {
      const form = new FormData();
      form.append('file', this.imgFile);
      this.listadosSrv.subirImg(form).subscribe((data: any) => {
        this.orderForm.controls['img'].setValue(String(data.secure_url));
        this.editar();
      }, () => {
        this.editar();
        this.listadosSrv.alertaError(false, 'Error al guardar imagen');
      });
    }
    this.editar();
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
    const listadoId = this.info.listadoId.reduce((accumulator: number[], currentValue: any) => [...accumulator, currentValue._id], []);
    const payload = {
      name: this.info.name,
      listadoId
    };
    this.listadosSrv.putGrupo(this.info._id, payload).subscribe((data) => {
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

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    const block = this.croppedImage.split(";");
    const contentType = block[0].split(":")[1];
    const realData = block[1].split(",")[1];
    const blob = this.b64toBlob(realData, contentType, 512);
    const file = this.blobToFile(blob, 'img.png');
    this.imgFile = new File([file], "img.png", {type: "image/png"});
  }
  imageLoaded(image: HTMLImageElement) {
    // show cropper
  }

  cut() {
    // this.orderForm.controls['img'].setValue(String(this.croppedImage));
    this.imgPreview = this.croppedImage;
    this.imageChangedEvent = '';
    this.croppedImage = '';
  }

  deleteImg() {
    this.imageChangedEvent = '';
    this.imgPreview = '';
    this.croppedImage = '';
    this.orderForm.controls['img'].setValue('');
  }

  b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;
    const byteCharacters = atob(b64Data);
    let byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  blobToFile(theBlob, fileName): File{
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return <File>theBlob;
  }

}
