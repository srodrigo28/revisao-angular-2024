import { Component } from '@angular/core';

@Component({
  selector: 'app-component07',
  templateUrl: './component07.component.html',
  styleUrl: './component07.component.scss'
})
export class Component07Component {

  condicao : boolean = false;

  lista: string[] = [ 'Aprovado', 'Aprovado', 'Reprovado']

  alterar(){
    if(this.condicao === false){
      this.condicao = true
    }else if(this.condicao === true){
      this.condicao = false
    }
  }

}
