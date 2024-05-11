import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [FormsModule,
    CommonModule

  ],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.scss'
})
export class Ejercicio4Component {
  asciiCharacters: { character: string, code: number }[] = [];

  constructor() {
    this.generateAsciiTable();
  }

  generateAsciiTable(): void {
    for (let i = 32; i < 164; i++) {
      const character = String.fromCharCode(i);
      if (i < 97 || i > 122) { // Excluir caracteres minúsculas
        this.asciiCharacters.push({ character, code: i });
      }
    }
  }

}
