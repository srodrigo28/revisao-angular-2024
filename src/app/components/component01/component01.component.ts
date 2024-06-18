import { Component } from '@angular/core';

@Component({
  selector: 'app-component01',
  templateUrl: './component01.component.html',
  styleUrl: './component01.component.scss'
})

export class Component01Component {

  // criando variaveis
  nome: string = "Sebastião";
  idade: number = 38;

  salva(){
    alert('Chamei')
  }
}
