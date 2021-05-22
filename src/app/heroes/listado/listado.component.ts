import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent  {

 heroes:string[]=['Spiderman', 'Batman', 'Arrow', 'Flash']
 heroeBorrado:string='';
borrar(){
  this.heroeBorrado=this.heroes.shift()||'';
}
}

