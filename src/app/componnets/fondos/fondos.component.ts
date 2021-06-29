import { Component, OnInit } from '@angular/core';
import { PicturesService } from 'src/app/services/pictures.service';
import { Fondos } from 'src/assets/fondo/fondos';

@Component({
  selector: 'app-fondos',
  templateUrl: './fondos.component.html',
  styleUrls: ['./fondos.component.scss']
})
export class FondosComponent implements OnInit {

  fondos: string[] = Fondos;
  path: string = '../../../assets/fondo/';

  constructor(private picturesSrv: PicturesService) { }

  ngOnInit(): void {
  }

  selectFondo(fondo: string): void {
    localStorage.setItem('local-fondo', fondo);
    this.picturesSrv.changeFondo.emit();
  }

}
