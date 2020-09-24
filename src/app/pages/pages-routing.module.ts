import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'cursos', component: CursosComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
