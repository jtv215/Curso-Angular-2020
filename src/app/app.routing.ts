import { CochesComponent } from './home/coches/coches.component';
//IMPORTAAR COMPONENETES

import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { Empleado } from './empleado/empleado';
import {Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes: Routes = [
    {path:'' ,component: HomeComponent}, //pag principal
    {path:'empleado',component:EmpleadoComponent},
    {path:'pagina-principal',component:HomeComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'contacto/:page',component:ContactoComponent},
    {path:'fruta',component:FrutaComponent},
    {path:'coches',component:CochesComponent},
    {path: '**',component:HomeComponent}//cuando hay algun fallo
]


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);