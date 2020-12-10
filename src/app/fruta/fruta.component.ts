import{Component} from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
    selector:'fruta',
    templateUrl: './fruta.component.html'
    
})

export class FrutaComponent{
    public nombre_componente= 'Componente de fruta';
    public listado_frutas= 'Naranja,Manzana, peray y sandia';
    public nombre: string= '5';

    constructor(){
        console.log(this.listado_frutas);

        
    }

    ngOnInit(){
      //  this.holamundo();
    }

    holamundo(){
        alert('HOla mundo');
    }

}