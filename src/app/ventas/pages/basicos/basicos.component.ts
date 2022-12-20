import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'andres';
  nombreUpper: string = 'ANDRES';
  nombreCompleto: string = 'anDrEs MoNtiEl';

  fecha: Date = new Date(); // Dia de hoy

}
