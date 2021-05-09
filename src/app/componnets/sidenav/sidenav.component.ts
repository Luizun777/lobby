import { Component, OnInit } from '@angular/core';
import { ListadosService } from 'src/app/services/listados.service';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  favoriteSeason: string;
  seasons: string[] = ['Column', 'Row'];

  constructor(private listadosService: ListadosService) { }

  ngOnInit(): void {
    this.favoriteSeason = localStorage.getItem('ajuste-tarjetas');
  }

  ajusteTarjeta(event: any): void {
    localStorage.setItem('ajuste-tarjetas', event);
    this.listadosService.ajusteTarjetas.emit();
  }

}
