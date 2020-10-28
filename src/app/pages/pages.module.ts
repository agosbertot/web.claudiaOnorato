import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactoComponent } from './contacto/contacto.component';
import { CursosComponent } from './cursos/cursos.component';
import { TallerEducativoComponent } from './cursos/taller-educativo/taller-educativo.component';
import { TallerPadresComponent } from './cursos/taller-padres/taller-padres.component';
import { InicioComponent } from './inicio/inicio.component';
import { FilosofiaComponent } from './mi-perfil/filosofia/filosofia.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { MisionComponent } from './mi-perfil/mision/mision.component';
import { TrayectoriaComponent } from './mi-perfil/trayectoria/trayectoria.component';
import { EquipoComponent } from './miPerfil/equipo/equipo.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { SuccessComponent } from './success/success.component';

const components = [
  ContactoComponent,
  InicioComponent,
  CursosComponent,
  ServiciosComponent,
  TallerEducativoComponent,
  TallerPadresComponent,
  MiPerfilComponent,
  FilosofiaComponent,
  TrayectoriaComponent,
  MisionComponent,
  EquipoComponent,
  SuccessComponent
]
@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
