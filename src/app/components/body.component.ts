import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})

export  class BodyComponent{

  frase:any ={
    mensaje: 'El tiempo es como un bicho que anda y anda',
    autor: 'Julio Cortázar'
  }

  mostrar:boolean = false;

  escritores:string[] = [
    'Albert Camus',
    'Jose Falconi',
    'Charles Bukowski',
    'Oscar Wilde',
    'Ernest Hemingway',
    'Johann Wolfgang von Goethe',
    'Mario Vargas Llosa'
  ];

}
