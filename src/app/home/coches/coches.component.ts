import { PeticionesService } from './../../services/peticiones.services';
import { Component } from '@angular/core';
import { Coche } from './coche'


@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})

export class CochesComponent {

    public coche: Coche;
    public coches: Array<Coche>;
    public user;

    constructor(

        private peticionesService: PeticionesService
    ) {
        this.coche = new Coche("", null, "");
        this.coches = [
            new Coche("Seat Panda", 120, "Negro"),
            new Coche("Citroen", 90, "Rojo"),
            new Coche("Mini", 120, "Amarillo")
        ];
    }

    ngOnInit() {
      
     this.peticionesService.getArticulos().subscribe(
            result => {
                //this.user= result;
                console.log(result);
                /*if(!this.user){
                    console.log("error en el servidor");
                }*/
            },
            error => {
                var errorMensaje= <any>error;
                    console.log(errorMensaje);
            }

        );
    }

    onSubmit() {
        //console.log(this.coche);
        this.coches.push(this.coche);
        this.coche = new Coche("", null, "");


    }


}