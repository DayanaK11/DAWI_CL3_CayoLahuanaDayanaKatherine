import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.scss'
})
export class Ejercicio2Component {
  ejercicio2={
    hermano1:0,
    hermano2:0,
    diferencia:0,
    mayor:0,
    menor:0,
  }

  mensaje1=" la edad del mayor es: ";
  mensaje2=" la diferencia de edad es: ";
  mostrarMensaje=false;

  calcularMayor(){
    this.ejercicio2.mayor=this.ejercicio2.hermano1;
    this.ejercicio2.menor=this.ejercicio2.hermano2;
    if (this.ejercicio2.hermano1 < this.ejercicio2.hermano2) {
        this.ejercicio2.mayor = this.ejercicio2.hermano2;
        this.ejercicio2.menor=this.ejercicio2.hermano1
    } 
    this.ejercicio2.diferencia=this.ejercicio2.mayor - this.ejercicio2.menor;

    this.mostrarMensaje=true;
  }

}
