import { Component } from '@angular/core';

@Component({
  selector: 'app-component04',
  templateUrl: './component04.component.html',
  styleUrl: './component04.component.scss'
})
export class Component04Component {

  exibir: boolean = false

  show(){
    this.exibir = true
  }

  close(){
    this.exibir = false
  }

  acao() {
    if(this.exibir === true){
      this.exibir = false
    }else{
      this.exibir = true;
    }
  }
}
