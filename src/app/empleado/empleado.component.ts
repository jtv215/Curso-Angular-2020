import{Component} from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import {Empleado} from './empleado';


@Component({
selector: 'empleado-tag',
templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{

public titulo = 'componente del empleado';
public empleado:Empleado;
public trabajadores: Array<Empleado>;
public trabajador_externo:boolean;
public color:string;

constructor(){
    this.empleado = new Empleado('David',45,'cocinero',true);
    this.trabajadores = [
        new Empleado('David',45,'cocinero',true),
        new Empleado('jefferson',45,'ingeniero',true),
        new Empleado('ana',23,'camarera',true)

    ];
    this.trabajador_externo= false;
    this.color='red';
}
//negonit es los segundo que carga cuando carga el constructor
ngOnInit(){
console.log(this.trabajadores);
}

cambiarExterno(valor){
    this.trabajador_externo = valor;
}

}