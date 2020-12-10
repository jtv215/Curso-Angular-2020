import { RopaService } from './../services/ropa.service';
import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

export class HomeComponent {
    public titulo = "Pagina home";
    public listado_ropa: Array<String>;
    public prenda_a_guardar:string;

    constructor(
        private _ropaService: RopaService
    ) { }

    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);

    }


    guardarPrenda(){

        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar= null;
    }

  


    eliminarPrenda( index:number){
        this._ropaService.eliminarPrenda(index);

    }
}