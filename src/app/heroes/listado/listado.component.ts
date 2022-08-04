import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America']
  HeroeBorrado: string = '';

  borrarHeroe():void{
    
    this.HeroeBorrado = this.heroes.shift() || '';
    
  }
  
}
