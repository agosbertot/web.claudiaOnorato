import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { CursosComponent } from './cursos/cursos.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [ContactoComponent, InicioComponent, CursosComponent],
  exports:[ContactoComponent, InicioComponent, CursosComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
