import { Component } from '@angular/core';

@Component({
  selector: 'app-component03',
  templateUrl: './component03.component.html',
  styleUrl: './component03.component.scss'
})
export class Component03Component {

  imagem: string = "assets/xbox.jpg"

    alterarImagem(){
      alert('alterou')
      if(this.imagem === "assets/xbox.jpg"){
        this.imagem = "assets/ps5.jfif"
      }else{
        this.imagem === "assets/xbox.jpg"
    }
  }
}
