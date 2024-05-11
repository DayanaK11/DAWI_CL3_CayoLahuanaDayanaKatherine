import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.scss'
})
export class Ejercicio3Component {
  ejercicio3={
    numero:0,
  }
  mensaje1=" Es capicúa ";
  mensaje2=" No es capicúa ";
  mensaje="";
  mostrarMensaje=false;

  calcularCapicua(){
    
    const numeroString: string = this.ejercicio3.numero.toString();
    const primerDigito: string = numeroString.charAt(0);
    const ultimoDigito: string = numeroString.charAt(1);
    if(primerDigito==ultimoDigito){
      this.mensaje=this.mensaje1;
    }
    else{
      this.mensaje=this.mensaje2;

    }

    this.mostrarMensaje=true; 
  }

}
