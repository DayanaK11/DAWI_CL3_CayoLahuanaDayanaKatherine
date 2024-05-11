import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.scss'
})
export class Ejercicio1Component {
  ejercicio1={
    minutos: 0,
    pago: 0,
  }
  texto=" $ por la llamada";

  mostrarPago = false;
  calcularPago(){
    if (this.ejercicio1.minutos <= 5) {
      this.ejercicio1.pago = 10;
    } else {
      this.ejercicio1.pago = 10 + (this.ejercicio1.minutos - 5) * 2;
    }
    this.mostrarPago=true;
  }

}
