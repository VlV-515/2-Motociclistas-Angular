import { Component, OnInit } from '@angular/core';
export interface MotociclistaInt {
  hora: string;
  libres: number;
  uso: boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  arrMoto!: MotociclistaInt[];
  constructor() {
    //Data mockeada, simulando proveniente de un API.
    this.arrMoto = [
      { hora: '08:00', libres: 8, uso: false },
      { hora: '08:30', libres: 7, uso: false },
      { hora: '09:00', libres: 6, uso: false },
      { hora: '09:30', libres: 5, uso: false },
      { hora: '10:00', libres: 4, uso: false },
      { hora: '10:30', libres: 3, uso: false },
      { hora: '11:00', libres: 2, uso: false },
      { hora: '11:30', libres: 1, uso: false },
      { hora: '12:00', libres: 0, uso: false },
      { hora: '12:30', libres: 8, uso: false },
      { hora: '13:00', libres: 7, uso: false },
      { hora: '13:30', libres: 6, uso: false },
      { hora: '14:00', libres: 5, uso: false },
      { hora: '14:30', libres: 4, uso: false },
      { hora: '15:00', libres: 3, uso: false },
      { hora: '15:30', libres: 2, uso: false },
      { hora: '16:00', libres: 1, uso: false },
      { hora: '16:30', libres: 0, uso: false },
      { hora: '17:00', libres: 8, uso: false },
      { hora: '17:30', libres: 7, uso: false },
      { hora: '18:00', libres: 6, uso: false },
      { hora: '18:30', libres: 5, uso: false },
      { hora: '19:00', libres: 4, uso: false },
      { hora: '19:30', libres: 3, uso: false },
      { hora: '20:00', libres: 1, uso: false },
    ];
  }

  ngOnInit(): void {}
  //Funcion para establecer el color inicial del elemento.
  getStyleCard(libres: number) {
    if (libres <= 0) {
      return false;
    } else {
      return true;
    }
  }
  //Funcion que contiene la logica.
  selectMotociclista(libres: number, index: number) {
    const objLibre: number = this.arrMoto[index].libres;
    const objUso: boolean = this.arrMoto[index].uso;

    //Si no esta seleccionado y tiene minimo 1 libre.
    if (!objUso && objLibre > 0) {
      this.arrMoto[index].uso = true;
      this.arrMoto[index].libres = objLibre - 1;
    }
    //Si esta seleccionado, lo libera y recupera (suma) el recurso que se quito.
    else if (objUso) {
      this.arrMoto[index].uso = false;
      this.arrMoto[index].libres = objLibre + 1;
    }
    //Si no entro a nada, entonces no hay disponibles.
    else {
      alert('Lo sentimos, no contamos con motociclistas disponibles. =(');
    }
  }
}
