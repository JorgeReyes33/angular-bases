import { Component } from '@angular/core';

@Component({ //Definicion de un componente mediante el decorador
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'IronMan';
  public age: number = 45;

  //getter
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName():void {
    this.name = 'Spiderman'
  }

  changeAge():void {
    this.age = 25;
  }

  resetForm():void {
    this.name = 'IronMan';
    this.age = 45;

    //Estas instrucciones estan fuera del ciclo de deteccion de angular
    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // })
  }


}
