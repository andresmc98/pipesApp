import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  nombre: string = 'Andres';
  
  
  mostrarNombre(){
    let name = 'luis';
    const nomb = 'gaby';
    console.log(this.nombre);
    console.log(nomb)
  }
}
