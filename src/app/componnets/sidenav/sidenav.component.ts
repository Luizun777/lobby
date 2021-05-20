import { Component, OnInit } from '@angular/core';
import { ListadosService } from 'src/app/services/listados.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  favoriteSeason: string;
  seasons: string[] = ['Column', 'Row'];
  name: string = '';
  email: string = '';
  img: string = 'https://material.angular.io/assets/img/examples/shiba1.jpg';

  constructor(private listadosService: ListadosService, public auth: AuthService) { }

  ngOnInit(): void {
    this.favoriteSeason = localStorage.getItem('ajuste-tarjetas');
    this.auth.user$.subscribe((user: any) => {
      console.log(user);
      const {name, picture, email, nickname, sub} = user;
      this.name = nickname;
      this.img = picture;
      this.email = email;
    });
  }

  ajusteTarjeta(event: any): void {
    localStorage.setItem('ajuste-tarjetas', event);
    this.listadosService.ajusteTarjetas.emit();
  }

}
