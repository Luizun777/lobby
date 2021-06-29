import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  @Output() changeFondo: EventEmitter<void> = new EventEmitter();

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  public tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);
  }
}
