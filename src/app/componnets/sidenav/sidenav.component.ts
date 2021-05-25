import { Component, OnInit } from '@angular/core';
import { ListadosService } from 'src/app/services/listados.service';
import { AuthService } from '@auth0/auth0-angular';
import { EditPerfilComponent } from '../edit-perfil/edit-perfil.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  favoriteSeason: string;
  ajusteSubnombre: boolean;
  ajusteKanji: boolean;
  seasons: string[] = ['Column', 'Row'];
  name: string = '';
  email: string = '';
  img: string = 'https://material.angular.io/assets/img/examples/shiba1.jpg';

  constructor(
    public dialog: MatDialog,
    private listadosService: ListadosService, 
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.ajusteSubnombre = false;
    this.favoriteSeason = localStorage.getItem('ajuste-tarjetas');
    this.ajusteSubnombre = localStorage.getItem('ajuste-subnombre') === 'true';
    this.ajusteKanji = localStorage.getItem('ajuste-kanji') === 'true';
    this.auth.user$.subscribe((user: any) => {
      const {picture, email, nickname} = user;
      this.name = nickname;
      this.img = picture;
      this.email = email;
      this.getUser();
    });
  }

  ajusteTarjeta(event: any): void {
    localStorage.setItem('ajuste-tarjetas', event);
    this.listadosService.ajusteTarjetas.emit();
  }

  editarPerfil(): void {
    const data = {
      nickname: 'Nuevo User'
    };
    this.dialog.open(EditPerfilComponent, { data });
    // const paload = {
    //   nickname: 'Nuevo User',
    //   picture: this.listadosService.picture,
    // };
    // this.listadosService.putUser(paload).subscribe((edit: any) => {
    //   this.getUser();
    // })
  }

  getUser(): void {
    this.listadosService.getUser().subscribe((userDB: any) => {
      const { nickname, picture } = userDB.result;
      this.name = nickname ? nickname : this.name;
      this.img = picture ? picture : this.img;
    });
  }

  agregarEnlace(): void {
    const dialogRef = this.dialog.open(ModalEditComponent, {
      width: '250px',
      data: {type: 'Crear', info: {}, grupo: false}
    });

    dialogRef.afterClosed().subscribe(() => {
      // setTimeout(() => {
      //   // this.getListado();
      // }, 1000);
    });
  }

  cambiarToggle(variable: string, type: string): void {
    localStorage.setItem(type, String(!this[variable]));
    this.listadosService.ajusteAjustes.emit();
  }

}
