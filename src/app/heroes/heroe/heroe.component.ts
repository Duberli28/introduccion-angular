import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent  {

  nombre: string = 'Ironmam';
  edad:number=45;

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }
  getDatos():string{
    return `${this.nombre} - ${this.edad} `;

  }

  cambiarHeroe():void{
    this.nombre='Spiderman'
  }
  cambiarEdad():void{
    this.edad=18;
  }


}
