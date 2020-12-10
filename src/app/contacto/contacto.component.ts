import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; //para recoger parametros 

//decorador
@Component({
    selector: 'contacto', //metadatos  esta es la etiqueta para llamar desde html
    templateUrl: './contacto.component.html' //plantilla nos permite trabajar con directivas y data-binding y pipes
})

export class ContactoComponent {
    public titulo = "Pagina de contacto";
    public parametro;
    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) {

    }

    ngOnInit() {
        this._route.params.forEach((params: Params)=>{
            this.parametro = params['page'];
        });
    }


    redirigir(){
        this._router.navigate(['/contacto','marca.com']);
    }
    redirigir2(){
        this._router.navigate(['/pagina-principal']);
    }
}


